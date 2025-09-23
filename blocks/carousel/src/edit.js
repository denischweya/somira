import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const { eyebrow, title, videos } = attributes;
	const blockProps = useBlockProps();

	const addVideo = () => {
		const newVideos = [...videos, { id: Date.now(), url: '' }];
		setAttributes({ videos: newVideos });
	};

	const updateVideo = (index, field, value) => {
		const newVideos = [...videos];
		newVideos[index][field] = value;
		setAttributes({ videos: newVideos });
	};

	const removeVideo = (index) => {
		const newVideos = videos.filter((_, i) => i !== index);
		setAttributes({ videos: newVideos });
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Carousel Settings', 'somira')}>
					<TextControl
						label={__('Eyebrow Text', 'somira')}
						value={eyebrow}
						onChange={(value) => setAttributes({ eyebrow: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="carousel-editor">
				<p className="carousel-eyebrow">
					<span className="star-rating">
						<span className="star filled">★</span>
						<span className="star filled">★</span>
						<span className="star filled">★</span>
						<span className="star filled">★</span>
						<span className="star filled">★</span>
					</span>
					<RichText
						tagName="span"
						value={eyebrow}
						onChange={(value) => setAttributes({ eyebrow: value })}
						placeholder={__('Eyebrow text...', 'somira')}
					/>
				</p>
				
				<RichText
					tagName="h2"
					className="carousel-title"
					value={title}
					onChange={(value) => setAttributes({ title: value })}
					placeholder={__('Carousel title...', 'somira')}
				/>

				<div className="video-list">
					{videos.map((video, index) => (
						<div key={video.id} className="video-item">
							<div className="video-preview">
								{video.url ? (
									<video src={video.url} controls={false} />
								) : (
									<div className="video-placeholder">
										{__('No video selected', 'somira')}
									</div>
								)}
							</div>
							
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => updateVideo(index, 'url', media.url)}
									allowedTypes={['video']}
									value={video.id}
									render={({ open }) => (
										<Button onClick={open} variant="secondary">
											{video.url ? __('Change Video', 'somira') : __('Select Video', 'somira')}
										</Button>
									)}
								/>
							</MediaUploadCheck>


							<Button 
								onClick={() => removeVideo(index)} 
								variant="secondary" 
								isDestructive
							>
								{__('Remove Video', 'somira')}
							</Button>
						</div>
					))}
				</div>

				<Button onClick={addVideo} variant="primary">
					{__('Add Video', 'somira')}
				</Button>
			</div>
		</div>
	);
}