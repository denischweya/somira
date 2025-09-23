/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { 
		videoUrl = '', 
		title = '', 
		content = '', 
		buttonText = '', 
		buttonUrl = '' 
	} = attributes;

	const blockProps = useBlockProps.save({
		className: 'somira-hero-block'
	});

	return (
		<div {...blockProps}>
			<div className="somira-hero-container">
				{videoUrl && (
					<video
						className="somira-hero-video"
						autoPlay={true}
						muted={true}
						loop={true}
						playsInline={true}
					>
						<source src={videoUrl} type="video/mp4" />
					</video>
				)}
				
				<div className="somira-hero-content">
					<RichText.Content
						tagName="h2"
						className="somira-hero-title"
						value={title}
					/>
					
					<RichText.Content
						tagName="p"
						className="somira-hero-text"
						value={content}
					/>
					
					{buttonText && (
						<a 
							href={buttonUrl} 
							className="somira-hero-button"
						>
							<RichText.Content value={buttonText} />
						</a>
					)}
				</div>
			</div>
		</div>
	);
}