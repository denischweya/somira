import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { eyebrow, title, videos } = attributes;
	const blockProps = useBlockProps.save();

	const generateStars = (rating) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<span key={i} className={i <= rating ? 'star filled' : 'star'}>
					★
				</span>
			);
		}
		return stars;
	};

	return (
		<div {...blockProps}>
			<div className="carousel-header">
				<p className="carousel-eyebrow">
					<span className="star-rating">
						<span className="star filled">★</span>
						<span className="star filled">★</span>
						<span className="star filled">★</span>
						<span className="star filled">★</span>
						<span className="star filled">★</span>
					</span>
					<RichText.Content
						tagName="span"
						value={eyebrow}
					/>
				</p>
				<RichText.Content
					tagName="h2"
					className="carousel-title"
					value={title}
				/>
			</div>

			<div className="carousel-container">
				{videos.map((video, index) => (
					<div key={video.id || index} className="video-card">
						<div className="video-container">
							<video 
								className="video-element"
								src={video.url}
								preload="metadata"
							/>
							<div className="play-button-overlay">
								<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.5 8.13398C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33334 18.0452 0.500001 17.564 0.500001 16.7942L0.500002 1.20577C0.500002 0.435972 1.33333 -0.0451548 2 0.339746L15.5 8.13398Z" fill="white"/>
								</svg>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="carousel-navigation">
				<button className="carousel-prev" aria-label="Previous">
					<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.05026 7.34961L0.683594 1.98294L2.31693 0.349609L9.31693 7.34961L2.31693 14.3496L0.683593 12.7163L6.05026 7.34961Z" fill="white"/>
					</svg>
				</button>
				<button className="carousel-next" aria-label="Next">
					<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.05026 7.34961L0.683594 1.98294L2.31693 0.349609L9.31693 7.34961L2.31693 14.3496L0.683593 12.7163L6.05026 7.34961Z" fill="white"/>
					</svg>
				</button>
			</div>
		</div>
	);
}