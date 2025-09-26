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

							<div className="product-title-wrapper">
								<RichText.Content
									tagName="h2"
									className="product-title"
									value={title}
								/>
							</div>

							<div className="pricing-section">
								<span className="current-price">{priceCurrent}</span>
								<span className="previous-price">{pricePrevious}</span>
							</div>

							<form className="product-form" data-stripe-url={stripeUrl}>
								<div className="form-row">
									<div className="form-field plug-type-field">
										<label htmlFor="plug-type">Plug Type:</label>
										<select name="plugType" id="plug-type" className="plug-select-hidden" style={{display: 'none'}}>
											{plugOptions.map((option) => (
												<option key={option.value} value={option.value}>
													{option.label}
												</option>
											))}
										</select>
										<div className="custom-select">
											<div className="custom-select-trigger">
												<svg className="plug-icon" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.33333 21.3333H8.66667V18.8667L13.3333 14.2V8H2.66667V14.2L7.33333 18.8667V21.3333ZM4.66667 24V20L0 15.3333V8C0 7.26667 0.261111 6.63889 0.783333 6.11667C1.30556 5.59444 1.93333 5.33333 2.66667 5.33333H4L2.66667 6.66667V0H5.33333V5.33333H10.6667V0H13.3333V6.66667L12 5.33333H13.3333C14.0667 5.33333 14.6944 5.59444 15.2167 6.11667C15.7389 6.63889 16 7.26667 16 8V15.3333L11.3333 20V24H4.66667Z" fill="#717171"/>
												</svg>
												<span className="selected-value">United States</span>
												<svg className="dropdown-arrow" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<mask id="mask0_2597_10214" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
														<rect width="32" height="32" fill="#D9D9D9"/>
													</mask>
													<g mask="url(#mask0_2597_10214)">
														<path d="M15.6003 17.2002L21.7337 11.0669L23.6003 12.9336L15.6003 20.9336L7.60034 12.9336L9.46701 11.0669L15.6003 17.2002Z" fill="#282828"/>
													</g>
												</svg>
											</div>
											<ul className="custom-select-options">
												{plugOptions.map((option) => (
													<li key={option.value} data-value={option.value} className="custom-select-option">
														{option.label}
													</li>
												))}
											</ul>
										</div>
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

						<div className="guarantee-section">
							<svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_2600_10247)">
									<path d="M27.3256 17.5657C26.9315 18.1273 26.5374 18.6698 26.1704 19.2353C26.0854 19.3661 26.043 19.5661 26.07 19.7162C26.1704 20.2701 26.3018 20.8203 26.4409 21.3665C26.5027 21.6089 26.4447 21.7512 26.2207 21.8782C25.7223 22.1706 25.2317 22.4822 24.7526 22.8053C24.6522 22.8746 24.5595 23.0092 24.5324 23.1285C24.4049 23.7401 24.3083 24.3557 24.177 24.9635C24.1577 25.0635 24.0263 25.1866 23.9259 25.2097C23.3271 25.3367 22.7167 25.429 22.1179 25.5598C21.9788 25.5906 21.8243 25.6983 21.7431 25.8175C21.4148 26.2946 21.1018 26.7793 20.8082 27.2794C20.6885 27.4833 20.5533 27.5141 20.3446 27.4641C19.7922 27.3294 19.2436 27.1948 18.6834 27.0948C18.5212 27.064 18.3048 27.1063 18.1658 27.1948C17.6094 27.5525 17.0725 27.9411 16.5007 28.3373C15.9676 27.9642 15.4344 27.5718 14.8781 27.2179C14.7236 27.1178 14.4841 27.0755 14.2986 27.1063C13.7539 27.1986 13.2131 27.3333 12.6722 27.4602C12.452 27.5102 12.3052 27.4795 12.1816 27.2602C11.9189 26.7985 11.5943 26.3715 11.3394 25.9099C11.1887 25.6367 10.9762 25.5444 10.6981 25.4982C10.1611 25.4098 9.62794 25.302 9.09095 25.2251C8.90551 25.1982 8.83597 25.1405 8.80507 24.952C8.71235 24.348 8.60032 23.744 8.46896 23.1477C8.44192 23.0208 8.34148 22.8746 8.2333 22.8015C7.75426 22.4783 7.26749 22.1629 6.76526 21.8705C6.55279 21.7474 6.4987 21.6127 6.55665 21.3858C6.69186 20.8395 6.82708 20.2894 6.92752 19.7315C6.95843 19.57 6.91593 19.3584 6.82321 19.2199C6.46393 18.6659 6.07374 18.1312 5.67969 17.5695C6.06215 17.0194 6.46007 16.477 6.82321 15.9153C6.91207 15.7768 6.95456 15.5652 6.92752 15.4036C6.82708 14.8497 6.69186 14.2996 6.55665 13.7494C6.4987 13.5225 6.55665 13.3878 6.76526 13.2647C7.26363 12.9723 7.75426 12.6607 8.2333 12.3337C8.34148 12.2606 8.44192 12.1144 8.46896 11.9875C8.59645 11.3912 8.70849 10.7872 8.8012 10.1832C8.83211 9.99088 8.90551 9.93702 9.08709 9.90625C9.65885 9.82161 10.2267 9.70235 10.7985 9.61387C11.0264 9.57925 11.1732 9.47923 11.293 9.27918C11.575 8.80215 11.8995 8.3482 12.1738 7.87117C12.3013 7.64804 12.4481 7.62111 12.6645 7.67113C13.1937 7.79423 13.7307 7.89041 14.2523 8.03659C14.5111 8.10969 14.7004 8.05968 14.9052 7.90579C15.419 7.52879 15.9482 7.17101 16.4891 6.79785C17.0454 7.18255 17.5901 7.5788 18.1542 7.94042C18.2932 8.0289 18.5057 8.07122 18.6718 8.04044C19.2282 7.94042 19.7806 7.80577 20.333 7.67113C20.5417 7.62111 20.6769 7.65189 20.7966 7.85578C21.0902 8.35205 21.4032 8.84062 21.7315 9.31765C21.8127 9.43691 21.9672 9.54463 22.1063 9.5754C22.7051 9.7062 23.3155 9.79853 23.9143 9.92548C24.0147 9.94856 24.1461 10.0717 24.1654 10.1717C24.2929 10.768 24.3856 11.3758 24.517 11.9721C24.5479 12.1106 24.656 12.2645 24.7719 12.3453C25.251 12.6723 25.7378 12.9839 26.24 13.2762C26.4409 13.3955 26.4872 13.5225 26.437 13.734C26.3057 14.2842 26.1666 14.8304 26.07 15.3883C26.0391 15.5614 26.0816 15.7845 26.1782 15.9345C26.5452 16.4847 26.9392 17.0155 27.3256 17.5657ZM15.3688 11.3758C15.2954 11.4066 15.2413 11.4335 15.1872 11.4528C13.978 11.8259 13.2633 12.6492 13.1281 13.8879C13.0469 14.6342 13.0469 15.4036 13.1281 16.15C13.2826 17.558 14.2252 18.4774 15.6392 18.6698C16.1066 18.7352 16.5857 18.6929 17.057 18.7044C17.4201 18.7159 17.6365 18.916 17.6404 19.2738C17.6481 19.8393 17.6519 20.4086 17.6404 20.9741C17.6326 21.3127 17.4201 21.5204 17.084 21.532C16.775 21.5435 16.4698 21.5358 16.1607 21.5358C15.5619 21.5358 15.4576 21.4473 15.361 20.8472C15.2606 20.2278 14.7159 19.7816 14.1441 19.8393C13.5067 19.9047 13.0624 20.4356 13.101 21.0934C13.1667 22.2744 13.9471 23.29 15.0674 23.6555C15.164 23.6863 15.2644 23.7209 15.3533 23.7517C15.4344 24.9981 15.7474 25.4752 16.4814 25.4982C17.2193 25.5213 17.5438 25.0481 17.6674 23.7517C17.7176 23.7286 17.7717 23.7017 17.8297 23.6863C19.0389 23.3131 19.7536 22.4899 19.8849 21.2473C19.966 20.501 19.9699 19.7315 19.8849 18.9852C19.7265 17.5657 18.7568 16.6308 17.339 16.4577C16.8832 16.4039 16.4157 16.4423 15.956 16.4308C15.5928 16.4231 15.3803 16.2154 15.3726 15.8614C15.3649 15.2959 15.3649 14.7266 15.3726 14.1611C15.3803 13.8225 15.5928 13.6148 15.9289 13.6032C16.238 13.5917 16.5432 13.5994 16.8522 13.5994C17.4511 13.5994 17.5554 13.6879 17.6519 14.288C17.7524 14.8997 18.301 15.3575 18.8689 15.2959C19.4909 15.2305 19.9351 14.7073 19.912 14.0764C19.8733 12.9454 19.1432 11.899 18.0692 11.5451C17.6983 11.422 17.5863 11.245 17.6404 10.9026C17.6442 10.8795 17.6404 10.8565 17.6404 10.8334C17.621 10.1486 17.1227 9.62926 16.4891 9.6408C15.8633 9.6485 15.3842 10.1486 15.3649 10.8218C15.3649 11.0026 15.3688 11.1912 15.3688 11.3758Z" fill="#282828"/>
									<path d="M14.2242 4.53179C14.2242 4.92419 14.2242 5.26273 14.2242 5.66667C12.8836 4.7126 11.5856 3.78932 10.2373 2.83141C11.574 1.88504 12.872 0.957909 14.2203 0C14.2203 0.403938 14.2203 0.742476 14.2203 1.13487C14.3671 1.13487 14.4908 1.13103 14.6144 1.13487C15.7386 1.15795 16.8667 1.12718 17.987 1.21181C20.9192 1.43494 23.5887 2.41978 25.984 4.11632C29.5459 6.63996 31.8754 10.033 32.6674 14.3109C33.8612 20.7855 31.8484 26.2021 26.7721 30.43C24.5082 32.315 21.8541 33.4383 18.9374 33.8307C13.7413 34.527 9.15559 33.1306 5.28073 29.6029C2.66917 27.2292 1.05046 24.2786 0.324166 20.8432C0.0228309 19.4044 -0.0467078 17.9464 0.0228309 16.4614C1.14704 16.4614 2.26352 16.4614 3.48045 16.4614C3.48045 17.1731 3.43796 17.8771 3.48818 18.5773C3.70066 21.5664 4.85191 24.1632 6.87626 26.3675C8.93924 28.6142 11.5006 29.9837 14.5178 30.4415C21.4253 31.4879 27.7533 27.0446 29.233 20.5123C30.8015 13.5877 26.7721 6.90541 19.938 5.00113C18.582 4.62412 17.195 4.51641 15.7888 4.53564C15.2827 4.53949 14.7766 4.53179 14.2242 4.53179Z" fill="#282828"/>
								</g>
								<defs>
									<clipPath id="clip0_2600_10247">
										<rect width="33" height="34" fill="white"/>
									</clipPath>
								</defs>
							</svg>
							<span>30-Day Money Back Guarantee</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}