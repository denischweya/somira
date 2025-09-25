import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, description, linkText, linkUrl, imageUrl, imageAlt } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="cta-container">
				<div className="cta-content">
					<RichText.Content
						tagName="h2"
						className="cta-title"
						value={title}
					/>
					
					<RichText.Content
						tagName="p"
						className="cta-description"
						value={description}
					/>

					{linkText && linkUrl && (
						<a href={linkUrl} className="cta-link">
							{linkText}
						</a>
					)}
					
					<div className="lifetime-warranty">
						<svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_2600_10356)">
								<path d="M0 10.9936V10.1147C0.0138426 9.98056 0.0373148 9.8458 0.0391204 9.71103C0.060787 8.33759 0.0752315 6.96357 0.0993055 5.59014C0.112546 4.79209 0.530833 4.4165 1.34815 4.3831C2.24551 4.34736 3.14769 4.31338 4.03722 4.20146C5.97699 3.95771 7.80662 3.3706 9.49181 2.38506C10.4272 1.83842 11.2954 1.1897 12.0798 0.451463C12.4024 0.149119 12.7827 -0.0465837 13.2167 0.0946272C13.5062 0.188377 13.7788 0.387596 14.0075 0.592088C15.2377 1.69892 16.6057 2.59072 18.1531 3.22236C20.2114 4.06318 22.3702 4.37314 24.5862 4.38896C25.3945 4.39482 25.8369 4.78389 25.8417 5.55615C25.8616 8.40908 26.0223 11.2632 25.7605 14.1138C25.6166 15.6958 25.3693 17.2567 24.9179 18.786C23.6793 22.9936 21.0768 26.1401 17.1636 28.2782C15.8805 28.9784 14.5323 29.5286 13.1481 30.0026H12.7869C12.1562 29.7683 11.5182 29.5468 10.8953 29.2913C8.72264 28.4001 6.74255 27.213 5.05736 25.5905C3.03273 23.6323 1.71829 21.2739 0.962963 18.6085C0.364722 16.4991 0.130602 14.3376 0.0601852 12.1556C0.0469444 11.7683 0.0198611 11.381 0 10.9936ZM7.12833 14.4015C7.13427 14.4284 7.14399 14.4544 7.15722 14.4788C8.29593 15.7093 9.43042 16.9397 10.5806 18.1597C10.7057 18.2921 10.9116 18.3788 11.0963 18.4269C11.5489 18.544 11.9082 18.3437 12.2296 18.0489C14.3698 16.086 16.5112 14.1241 18.6538 12.1632C18.7345 12.0983 18.8194 12.0384 18.9078 11.9839L17.3803 10.389L11.4256 15.9015L8.74069 13.0075L7.12833 14.4015Z" fill="white"/>
							</g>
							<defs>
								<clipPath id="clip0_2600_10356">
									<rect width="26" height="30" fill="white"/>
								</clipPath>
							</defs>
						</svg>
						<span className="warranty-text">Lifetime Premium Warranty</span>
					</div>
				</div>

				{imageUrl && (
					<div className="cta-image">
						<img src={imageUrl} alt={imageAlt} />
					</div>
				)}
			</div>
		</div>
	);
}