import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	RadioControl,
	ToggleControl,
	Card,
	CardHeader,
	CardBody,
	Flex,
	FlexItem,
	SelectControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const { heading, faqItems, toggleIconType, hideOnDesktop, hideOnMobile } = attributes;
	const [openItems, setOpenItems] = useState({});
	const [selectedFAQIndex, setSelectedFAQIndex] = useState(0);

	const blockProps = useBlockProps({
		className: `faq-accordion${hideOnDesktop ? ' hide-desktop' : ''}${hideOnMobile ? ' hide-mobile' : ''}`
	});

	const addFAQItem = () => {
		const newItems = [...faqItems, {
			title: 'New FAQ Question',
			content: 'Add your answer here...',
			iconUrl: '',
			iconId: 0,
			iconAlt: ''
		}];
		setAttributes({ faqItems: newItems });
	};

	const updateFAQItem = (index, field, value) => {
		const updatedItems = [...faqItems];
		updatedItems[index][field] = value;
		setAttributes({ faqItems: updatedItems });
	};

	const removeFAQItem = (index) => {
		const updatedItems = faqItems.filter((_, i) => i !== index);
		setAttributes({ faqItems: updatedItems });
		
		// Adjust selected index if needed
		if (selectedFAQIndex >= updatedItems.length && updatedItems.length > 0) {
			setSelectedFAQIndex(updatedItems.length - 1);
		} else if (updatedItems.length === 0) {
			setSelectedFAQIndex(0);
		}
	};

	const toggleItem = (index) => {
		setOpenItems(prev => ({
			...prev,
			[index]: !prev[index]
		}));
	};

	const renderToggleIcon = (isOpen) => {
		if (toggleIconType === 'arrow') {
			return (
				<svg 
					width="17" 
					height="11" 
					viewBox="0 0 17 11" 
					fill="none" 
					xmlns="http://www.w3.org/2000/svg"
					style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
				>
					<path d="M8.39941 6.70023L2.26608 0.566894L0.399414 2.43356L8.39941 10.4336L16.3994 2.43356L14.5327 0.566894L8.39941 6.70023Z" fill="#717171"/>
				</svg>
			);
		}
		return <span className="faq-icon">{isOpen ? '–' : '+'}</span>;
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('FAQ Content', 'somira')} initialOpen={true}>
					<TextControl
						label={__('FAQ Heading', 'somira')}
						value={heading}
						onChange={(value) => setAttributes({ heading: value })}
						placeholder={__('Enter FAQ heading...', 'somira')}
					/>
					
					<hr style={{ margin: '20px 0' }} />
					
					<div style={{ marginBottom: '16px' }}>
						<Flex justify="space-between" align="center">
							<h4 style={{ margin: 0 }}>{__('FAQ Items', 'somira')}</h4>
							<Button isPrimary onClick={addFAQItem} isSmall>
								{__('Add Item', 'somira')}
							</Button>
						</Flex>
					</div>
					
					{faqItems.length > 0 && (
						<>
							<SelectControl
								label={__('Select FAQ Item to Edit', 'somira')}
								value={selectedFAQIndex}
								options={faqItems.map((item, index) => ({
									label: `${index + 1}. ${item.title || __('Untitled FAQ', 'somira')}`,
									value: index
								}))}
								onChange={(value) => setSelectedFAQIndex(parseInt(value))}
							/>
							
							{selectedFAQIndex < faqItems.length && (
								<div style={{ marginTop: '16px', padding: '16px', border: '1px solid #ddd', borderRadius: '4px', background: '#f9f9f9' }}>
									<Flex justify="space-between" align="center" style={{ marginBottom: '12px' }}>
										<h4 style={{ margin: 0 }}>
											{__('Edit FAQ Item', 'somira')} {selectedFAQIndex + 1}
										</h4>
										<Button
											isDestructive
											isSmall
											onClick={() => removeFAQItem(selectedFAQIndex)}
										>
											{__('Delete', 'somira')}
										</Button>
									</Flex>
									
									<TextControl
										label={__('FAQ Title', 'somira')}
										value={faqItems[selectedFAQIndex]?.title || ''}
										onChange={(value) => updateFAQItem(selectedFAQIndex, 'title', value)}
										placeholder={__('Enter question...', 'somira')}
									/>
									
									<TextareaControl
										label={__('FAQ Content', 'somira')}
										value={faqItems[selectedFAQIndex]?.content || ''}
										onChange={(value) => updateFAQItem(selectedFAQIndex, 'content', value)}
										placeholder={__('Enter answer...', 'somira')}
										rows={4}
										style={{ marginTop: '12px' }}
									/>
									
									<div style={{ marginTop: '16px' }}>
										<strong>{__('Title Icon (Optional)', 'somira')}</strong>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={(media) => {
													updateFAQItem(selectedFAQIndex, 'iconUrl', media.url);
													updateFAQItem(selectedFAQIndex, 'iconId', media.id);
													updateFAQItem(selectedFAQIndex, 'iconAlt', media.alt);
												}}
												allowedTypes={['image']}
												render={({ open }) => (
													<div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
														{faqItems[selectedFAQIndex]?.iconUrl && (
															<img 
																src={faqItems[selectedFAQIndex].iconUrl} 
																alt={faqItems[selectedFAQIndex].iconAlt || ''} 
																style={{ width: '24px', height: '24px' }}
															/>
														)}
														<Button onClick={open} isSecondary isSmall>
															{faqItems[selectedFAQIndex]?.iconUrl ? __('Change Icon', 'somira') : __('Select Icon', 'somira')}
														</Button>
														{faqItems[selectedFAQIndex]?.iconUrl && (
															<Button 
																onClick={() => {
																	updateFAQItem(selectedFAQIndex, 'iconUrl', '');
																	updateFAQItem(selectedFAQIndex, 'iconId', 0);
																	updateFAQItem(selectedFAQIndex, 'iconAlt', '');
																}}
																isDestructive
																isSmall
															>
																{__('Remove', 'somira')}
															</Button>
														)}
													</div>
												)}
											/>
										</MediaUploadCheck>
									</div>
								</div>
							)}
						</>
					)}
				</PanelBody>
				
				<PanelBody title={__('FAQ Settings', 'somira')} initialOpen={false}>
					<RadioControl
						label={__('Toggle Icon Type', 'somira')}
						selected={toggleIconType}
						options={[
							{ label: __('Plus/Minus (+/–)', 'somira'), value: 'plusminus' },
							{ label: __('Arrow', 'somira'), value: 'arrow' }
						]}
						onChange={(value) => setAttributes({ toggleIconType: value })}
					/>
				</PanelBody>
				
				<PanelBody title={__('Visibility Options', 'somira')} initialOpen={false}>
					<ToggleControl
						label={__('Hide on Desktop (≥769px)', 'somira')}
						checked={hideOnDesktop}
						onChange={(value) => setAttributes({ hideOnDesktop: value })}
					/>
					<ToggleControl
						label={__('Hide on Mobile (≤768px)', 'somira')}
						checked={hideOnMobile}
						onChange={(value) => setAttributes({ hideOnMobile: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section className="faq-accordion-preview">
				<h2 className="faq-heading">
					{heading || __('Frequently Asked Questions', 'somira')}
				</h2>
				
				{faqItems.length === 0 ? (
					<div className="faq-placeholder" style={{ 
						padding: '40px', 
						textAlign: 'center', 
						border: '2px dashed #ddd', 
						borderRadius: '8px',
						color: '#666'
					}}>
						<p style={{ margin: 0, fontSize: '16px' }}>
							{__('No FAQ items yet. Add your first FAQ item using the Inspector Controls on the right.', 'somira')}
						</p>
					</div>
				) : (
					faqItems.map((item, index) => {
						const isOpen = openItems[index] || false;
						const isSelected = selectedFAQIndex === index;
						
						return (
							<div 
								key={index} 
								className={`faq-item-preview ${isSelected ? 'selected' : ''}`}
								onClick={() => setSelectedFAQIndex(index)}
								style={{
									border: isSelected ? '2px solid #007cba' : '1px solid #e0e0e0',
									borderRadius: '8px',
									marginBottom: '1rem',
									overflow: 'hidden',
									cursor: 'pointer',
									transition: 'border-color 0.2s ease'
								}}
							>
								<div 
									className="faq-button-preview"
									onClick={(e) => {
										e.stopPropagation();
										toggleItem(index);
									}}
									style={{
										width: '100%',
										padding: '16px',
										backgroundColor: '#f9f9f9',
										border: 'none',
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										cursor: 'pointer',
										position: 'relative'
									}}
								>
									{isSelected && (
										<div style={{
											position: 'absolute',
											top: '4px',
											left: '4px',
											background: '#007cba',
											color: 'white',
											fontSize: '10px',
											padding: '2px 6px',
											borderRadius: '2px',
											fontWeight: 'bold'
										}}>
											EDITING
										</div>
									)}
									<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
										{item.iconUrl && (
											<img 
												src={item.iconUrl} 
												alt={item.iconAlt || ''} 
												style={{ width: '20px', height: '20px' }}
											/>
										)}
										<span className="faq-title">
											{item.title || __('Untitled FAQ', 'somira')}
										</span>
									</div>
									{renderToggleIcon(isOpen)}
								</div>
								{isOpen && (
									<div 
										className="faq-content-preview" 
										style={{ padding: '16px', backgroundColor: '#fff' }}
									>
										<div>
											{item.content || __('No content added yet.', 'somira')}
										</div>
									</div>
								)}
							</div>
						);
					})
				)}
			</section>
		</div>
	);
}