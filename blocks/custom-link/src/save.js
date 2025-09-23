import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { prefixText, linkText, linkUrl } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			{linkUrl ? (
				<a href={linkUrl} className="custom-link">
					{prefixText && (
						<span className="custom-link-prefix">{prefixText} </span>
					)}
					<RichText.Content
						tagName="span"
						className="custom-link-text"
						value={linkText}
					/>
					<span 
						className="custom-link-arrow"
						style={{
							display: 'inline-block',
							width: '16px',
							height: '8px',
							marginLeft: '4px',
							backgroundImage: 'url(\'data:image/svg+xml;utf8,<svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6V6.75H30V6V5.25H0V6Z" fill="%23282828"/></svg>\')',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							verticalAlign: 'middle'
						}}
					></span>
				</a>
			) : (
				<span className="custom-link custom-link-no-url">
					{prefixText && (
						<span className="custom-link-prefix">{prefixText} </span>
					)}
					<RichText.Content
						tagName="span"
						className="custom-link-text"
						value={linkText}
					/>
					<span 
						className="custom-link-arrow"
						style={{
							display: 'inline-block',
							width: '16px',
							height: '8px',
							marginLeft: '4px',
							backgroundImage: 'url(\'data:image/svg+xml;utf8,<svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989593 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6V6.75H30V6V5.25H0V6Z" fill="%23282828"/></svg>\')',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							verticalAlign: 'middle'
						}}
					></span>
				</span>
			)}
		</div>
	);
}