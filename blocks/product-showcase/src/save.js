import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
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
	
	const blockProps = useBlockProps.save();

	const plugOptions = [
		{ label: 'United States', value: 'United States' },
		{ label: 'United Kingdom', value: 'United Kingdom' },
		{ label: 'Europe', value: 'Europe' },
		{ label: 'Australia', value: 'Australia' },
		{ label: 'Canada', value: 'Canada' }
	];

	return (
		<div {...blockProps}>
			<div 
				className="product-showcase-wrapper"
				style={{
					backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			>
				<div className="product-showcase-container">
					<div className="product-showcase-content">
						<div className="product-image-column">
							{productImage && (
								<img 
									src={productImage.url} 
									alt="Product" 
									className="product-image" 
								/>
							)}
						</div>

						<div className="product-details-column">
							<div className="testimonials-section">
								<div className="testimonial-avatars">
									{testimonialImages.map((image, index) => (
										<div key={index} className="testimonial-avatar">
											{image && (
												<img 
													src={image.url} 
													alt={`Customer ${index + 1}`} 
												/>
											)}
										</div>
									))}
								</div>
								<span className="testimonials-text">
									Loved by {customerCount} Customers
								</span>
							</div>

							<RichText.Content
								tagName="h2"
								className="product-title"
								value={title}
							/>

							<div className="pricing-section">
								<span className="current-price">{priceCurrent}</span>
								<span className="previous-price">{pricePrevious}</span>
							</div>

							<form className="product-form" data-stripe-url={stripeUrl}>
								<div className="form-row">
									<div className="form-field">
										<label htmlFor="plug-type">Plug Type:</label>
										<select name="plugType" id="plug-type" className="plug-select">
											{plugOptions.map((option) => (
												<option key={option.value} value={option.value}>
													{option.label}
												</option>
											))}
										</select>
									</div>
									
									<div className="form-field">
										<label htmlFor="quantity">Quantity:</label>
										<div className="quantity-controls">
											<button 
												type="button" 
												className="quantity-btn quantity-decrease"
												aria-label="Decrease quantity"
											>
												-
											</button>
											<input 
												type="number" 
												name="quantity" 
												id="quantity"
												className="quantity-input" 
												value="1" 
												min="1"
												readOnly
											/>
											<button 
												type="button" 
												className="quantity-btn quantity-increase"
												aria-label="Increase quantity"
											>
												+
											</button>
										</div>
									</div>
								</div>

								<div className="checkout-buttons">
									<button type="submit" className="checkout-btn" name="checkout_type" value="regular">
										Checkout
									</button>
									<button type="submit" className="apple-pay-btn" name="checkout_type" value="apple_pay">
										<span className="apple-pay-logo">
											<svg width="16" height="20" viewBox="0 0 16 20" fill="none">
												<path d="M11.624 10.547C11.648 12.836 13.657 13.653 13.68 13.664C13.66 13.719 13.352 14.806 12.656 15.922C12.064 16.882 11.448 17.839 10.472 17.858C9.52 17.876 9.224 17.262 8.12 17.262C7.016 17.262 6.68 17.839 5.768 17.876C4.832 17.913 4.128 16.845 3.528 15.889C2.288 13.924 1.352 10.279 2.632 7.917C3.264 6.748 4.448 6.007 5.744 5.989C6.656 5.971 7.52 6.643 8.112 6.643C8.704 6.643 9.744 5.836 10.848 5.953C11.296 5.971 12.656 6.133 13.544 7.376C13.472 7.421 11.608 8.584 11.624 10.547Z" fill="currentColor"/>
												<path d="M9.704 4.133C10.192 3.532 10.52 2.692 10.424 1.84C9.704 1.876 8.816 2.359 8.304 2.96C7.848 3.484 7.456 4.348 7.576 5.161C8.368 5.224 9.192 4.741 9.704 4.133Z" fill="currentColor"/>
											</svg>
										</span>
										Apple Pay
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}