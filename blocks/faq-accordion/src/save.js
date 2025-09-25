import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { heading, faqItems, toggleIconType, hideOnDesktop, hideOnMobile } = attributes;
	
	const blockProps = useBlockProps.save({
		className: `faq-accordion${hideOnDesktop ? ' hide-desktop' : ''}${hideOnMobile ? ' hide-mobile' : ''}`
	});

	const renderToggleIcon = (type) => {
		if (type === 'arrow') {
			return (
				<svg 
					className="faq-arrow-icon" 
					width="17" 
					height="11" 
					viewBox="0 0 17 11" 
					fill="none" 
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M8.39941 6.70023L2.26608 0.566894L0.399414 2.43356L8.39941 10.4336L16.3994 2.43356L14.5327 0.566894L8.39941 6.70023Z" fill="#717171"/>
				</svg>
			);
		}
		return <span className="faq-plus-minus-icon">+</span>;
	};

	return (
		<div {...blockProps}>
			<section className="faq-accordion">
				<RichText.Content
					tagName="h2"
					className="faq-heading"
					value={heading}
				/>
				
				{faqItems.map((item, index) => (
					<div key={index} className="faq-item">
						<button 
							className="faq-button"
							aria-expanded="false"
							aria-controls={`faq-content-${index}`}
							data-faq-button
						>
							<div className="faq-title-wrapper">
								{item.iconUrl && (
									<img 
										src={item.iconUrl} 
										alt={item.iconAlt || ''} 
										className="faq-title-icon"
									/>
								)}
								<span className="faq-title">{item.title}</span>
							</div>
							<span className="faq-toggle-icon" data-icon-type={toggleIconType}>
								{renderToggleIcon(toggleIconType)}
							</span>
						</button>
						<div 
							className="faq-content"
							id={`faq-content-${index}`}
							hidden
							data-faq-content
						>
							<div className="faq-content-inner">
								<RichText.Content value={item.content} />
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}