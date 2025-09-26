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
			width="14" 
			height="16" 
			viewBox="0 0 14 16" 
			fill="none"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833333 16.1791 -7.73604e-07 15.698 -7.39955e-07 14.9282L-1.34273e-07 1.0718C-1.00623e-07 0.301996 0.833333 -0.17913 1.5 0.20577L13.5 7.13397Z" fill="#D9D9D9"/>
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
									controls={true}
									muted={muted}
									loop={loop}
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