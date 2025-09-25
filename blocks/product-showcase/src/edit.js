import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	RichText, 
	MediaUpload, 
	MediaUploadCheck,
	InspectorControls 
} from '@wordpress/block-editor';
import { 
	PanelBody, 
	TextControl, 
	Button, 
	SelectControl 
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const { 
		backgroundImage, 
		productImage, 
		testimonialImages, 
		title, 
		priceCurrent, 
		pricePrevious, 
		stripeUrl,
		customerCount 
	} = attributes;
	
	const blockProps = useBlockProps();
	const [quantity, setQuantity] = useState(1);
	const [plugType, setPlugType] = useState('United States');

	const plugOptions = [
		{ label: 'United States', value: 'United States' },
		{ label: 'United Kingdom', value: 'United Kingdom' },
		{ label: 'Europe', value: 'Europe' },
		{ label: 'Australia', value: 'Australia' },
		{ label: 'Canada', value: 'Canada' }
	];

	const updateTestimonialImage = (index, image) => {
		const newImages = [...testimonialImages];
		newImages[index] = image;
		setAttributes({ testimonialImages: newImages });
	};

	const increaseQuantity = () => setQuantity(prev => prev + 1);
	const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Images', 'somira')}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ backgroundImage: media })}
							allowedTypes={['image']}
							value={backgroundImage?.id}
							render={({ open }) => (
								<div>
									<Button onClick={open} variant="primary">
										{backgroundImage ? __('Change Background Image', 'somira') : __('Upload Background Image', 'somira')}
									</Button>
									{backgroundImage && (
										<div style={{ marginTop: '10px' }}>
											<img src={backgroundImage.url} style={{ maxWidth: '100%', height: 'auto' }} alt="" />
											<Button 
												onClick={() => setAttributes({ backgroundImage: null })} 
												variant="secondary" 
												isDestructive
												style={{ marginTop: '5px' }}
											>
												{__('Remove', 'somira')}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ productImage: media })}
							allowedTypes={['image']}
							value={productImage?.id}
							render={({ open }) => (
								<div style={{ marginTop: '20px' }}>
									<Button onClick={open} variant="primary">
										{productImage ? __('Change Product Image', 'somira') : __('Upload Product Image', 'somira')}
									</Button>
									{productImage && (
										<div style={{ marginTop: '10px' }}>
											<img src={productImage.url} style={{ maxWidth: '100%', height: 'auto' }} alt="" />
											<Button 
												onClick={() => setAttributes({ productImage: null })} 
												variant="secondary" 
												isDestructive
												style={{ marginTop: '5px' }}
											>
												{__('Remove', 'somira')}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>

					<h4 style={{ marginTop: '20px' }}>{__('Testimonial Images', 'somira')}</h4>
					{testimonialImages.map((image, index) => (
						<MediaUploadCheck key={index}>
							<MediaUpload
								onSelect={(media) => updateTestimonialImage(index, media)}
								allowedTypes={['image']}
								value={image?.id}
								render={({ open }) => (
									<div style={{ marginBottom: '15px' }}>
										<Button onClick={open} variant="secondary">
											{image ? __(`Change Testimonial ${index + 1}`, 'somira') : __(`Upload Testimonial ${index + 1}`, 'somira')}
										</Button>
										{image && (
											<div style={{ marginTop: '5px' }}>
												<img src={image.url} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }} alt="" />
												<Button 
													onClick={() => updateTestimonialImage(index, null)} 
													variant="secondary" 
													isDestructive
													style={{ marginLeft: '10px' }}
												>
													{__('Remove', 'somira')}
												</Button>
											</div>
										)}
									</div>
								)}
							/>
						</MediaUploadCheck>
					))}
				</PanelBody>

				<PanelBody title={__('Product Details', 'somira')}>
					<TextControl
						label={__('Customer Count', 'somira')}
						value={customerCount}
						onChange={(value) => setAttributes({ customerCount: value })}
						help={__('Number to display for customer count (e.g., "1000+")', 'somira')}
					/>
					
					<TextControl
						label={__('Current Price', 'somira')}
						value={priceCurrent}
						onChange={(value) => setAttributes({ priceCurrent: value })}
						help={__('Display price for the product', 'somira')}
					/>
					
					<TextControl
						label={__('Previous Price', 'somira')}
						value={pricePrevious}
						onChange={(value) => setAttributes({ pricePrevious: value })}
						help={__('Strikethrough price to show discount', 'somira')}
					/>
					
					<TextControl
						label={__('Stripe Checkout URL', 'somira')}
						value={stripeUrl}
						onChange={(value) => setAttributes({ stripeUrl: value })}
						help={__('Full URL to your Stripe checkout page', 'somira')}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="product-showcase-editor" style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				borderRadius: '20px',
				overflow: 'hidden'
			}}>
				<div className="product-showcase-container">
					<div className="product-showcase-content">
						<div className="testimonials-section">
							<div className="testimonial-avatars">
								{testimonialImages.map((image, index) => (
									<div key={index} className="testimonial-avatar">
										{image ? (
											<img src={image.url} alt={`Testimonial ${index + 1}`} />
										) : (
											<div className="avatar-placeholder"></div>
										)}
									</div>
								))}
							</div>
							<span className="testimonials-text">
								{__(`Loved by ${customerCount} Customers`, 'somira')}
							</span>
						</div>

						<div className="product-title-wrapper">
							<RichText
								tagName="h2"
								className="product-title"
								value={title}
								onChange={(value) => setAttributes({ title: value })}
								placeholder={__('Enter product title...', 'somira')}
								allowedFormats={[]}
							/>
						</div>

						<div className="pricing-section">
							<span className="current-price">{priceCurrent}</span>
							<span className="previous-price">{pricePrevious}</span>
						</div>

						<div className="product-image-column">
							{productImage ? (
								<img src={productImage.url} alt="Product" className="product-image" />
							) : (
								<div className="product-image-placeholder">
									<p>{__('Upload Product Image', 'somira')}</p>
								</div>
							)}
						</div>

						<div className="product-form">
								<div className="form-row">
									<div className="form-field plug-type-field">
										<label>{__('Plug Type:', 'somira')}</label>
										<div className="custom-select">
											<div className="custom-select-trigger">
												<svg className="plug-icon" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.33333 21.3333H8.66667V18.8667L13.3333 14.2V8H2.66667V14.2L7.33333 18.8667V21.3333ZM4.66667 24V20L0 15.3333V8C0 7.26667 0.261111 6.63889 0.783333 6.11667C1.30556 5.59444 1.93333 5.33333 2.66667 5.33333H4L2.66667 6.66667V0H5.33333V5.33333H10.6667V0H13.3333V6.66667L12 5.33333H13.3333C14.0667 5.33333 14.6944 5.59444 15.2167 6.11667C15.7389 6.63889 16 7.26667 16 8V15.3333L11.3333 20V24H4.66667Z" fill="#717171"/>
												</svg>
												<span className="selected-value">{plugType}</span>
												<svg className="dropdown-arrow" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<mask id="mask0_2597_10214_editor" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
														<rect width="32" height="32" fill="#D9D9D9"/>
													</mask>
													<g mask="url(#mask0_2597_10214_editor)">
														<path d="M15.6003 17.2002L21.7337 11.0669L23.6003 12.9336L15.6003 20.9336L7.60034 12.9336L9.46701 11.0669L15.6003 17.2002Z" fill="#282828"/>
													</g>
												</svg>
											</div>
											<ul className="custom-select-options">
												{plugOptions.map((option) => (
													<li key={option.value} data-value={option.value} className="custom-select-option" onClick={() => setPlugType(option.value)}>
														{option.label}
													</li>
												))}
											</ul>
										</div>
									</div>
									
									<div className="form-field">
										<label>{__('Quantity:', 'somira')}</label>
										<div className="quantity-controls">
											<button 
												type="button" 
												onClick={decreaseQuantity}
												className="quantity-btn"
											>
												-
											</button>
											<span className="quantity-value">{quantity}</span>
											<button 
												type="button" 
												onClick={increaseQuantity}
												className="quantity-btn"
											>
												+
											</button>
										</div>
									</div>
								</div>

								<div className="checkout-buttons">
									<button className="checkout-btn" disabled>
										{__('Checkout', 'somira')}
									</button>
									<button className="apple-pay-btn" disabled>
										{__('Apple Pay', 'somira')}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}