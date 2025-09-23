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