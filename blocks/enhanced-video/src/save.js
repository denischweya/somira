/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
		src,
		poster,
		controls = true,
		autoplay = false,
		loop = false,
		muted = false,
		customThumbnail,
		customPlayIcon
	} = attributes;

	const blockProps = useBlockProps.save({
		className: 'wp-block-somira-enhanced-video'
	});

	if (!src) {
		return null;
	}

	const videoAttributes = {
		controls,
		...(autoplay && { autoplay: true }),
		...(loop && { loop: true }),
		...(muted && { muted: true }),
		...(poster && { poster })
	};

	const DefaultPlayIcon = () => (
		<svg 
			className="default-play-icon" 
			width="80" 
			height="80" 
			viewBox="0 0 24 24" 
			fill="none"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.9)" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
			<polygon points="10,8 16,12 10,16" fill="#000"/>
		</svg>
	);

	return (
		<div {...blockProps}>
			{customThumbnail ? (
				<>
					<div className="enhanced-video-thumbnail-container">
						<img 
							src={customThumbnail.url} 
							alt={customThumbnail.alt || ''}
							className="enhanced-video-thumbnail"
						/>
						<button 
							type="button" 
							className="enhanced-video-play-button"
							aria-label="Play video"
						>
							{customPlayIcon ? (
								<img 
									src={customPlayIcon.url} 
									alt={customPlayIcon.alt || 'Play'}
									className="custom-play-icon"
								/>
							) : (
								<DefaultPlayIcon />
							)}
						</button>
					</div>

					<div className="enhanced-video-modal" aria-hidden="true" role="dialog" aria-modal="true">
						<div className="enhanced-video-modal-backdrop">
							<div className="enhanced-video-modal-content">
								<button 
									type="button" 
									className="enhanced-video-modal-close" 
									aria-label="Close video"
								>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path 
											d="M18 6L6 18M6 6l12 12" 
											stroke="currentColor" 
											strokeWidth="2" 
											strokeLinecap="round" 
											strokeLinejoin="round"
										/>
									</svg>
								</button>
								<video 
									className="enhanced-video-player"
									{...videoAttributes}
								>
									<source src={src} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</div>
				</>
			) : (
				<video 
					className="enhanced-video-player direct"
					{...videoAttributes}
				>
					<source src={src} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}
		</div>
	);
}