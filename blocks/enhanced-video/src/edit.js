/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps, 
	InspectorControls, 
	MediaUpload,
	MediaUploadCheck,
	BlockControls
} from '@wordpress/block-editor';

import { 
	PanelBody, 
	Button,
	ToggleControl,
	Placeholder,
	Toolbar,
	ToolbarButton
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { 
		src,
		id,
		poster,
		controls = true,
		autoplay = false,
		loop = false,
		muted = false,
		customThumbnail,
		customPlayIcon
	} = attributes;

	const blockProps = useBlockProps({
		className: 'wp-block-somira-enhanced-video'
	});

	const onSelectVideo = (media) => {
		setAttributes({
			src: media.url,
			id: media.id,
			poster: media.poster || ''
		});
	};

	const onSelectThumbnail = (media) => {
		setAttributes({
			customThumbnail: {
				id: media.id,
				url: media.url,
				alt: media.alt || ''
			}
		});
	};

	const onSelectPlayIcon = (media) => {
		setAttributes({
			customPlayIcon: {
				id: media.id,
				url: media.url,
				alt: media.alt || ''
			}
		});
	};

	const removeVideo = () => {
		setAttributes({
			src: '',
			id: 0,
			poster: ''
		});
	};

	const removeThumbnail = () => {
		setAttributes({
			customThumbnail: null
		});
	};

	const removePlayIcon = () => {
		setAttributes({
			customPlayIcon: null
		});
	};

	if (!src) {
		return (
			<div {...blockProps}>
				<Placeholder
					icon="video-alt2"
					label={__('Enhanced Video', 'somira')}
					instructions={__('Select a video file from your media library.', 'somira')}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectVideo}
							allowedTypes={['video']}
							render={({ open }) => (
								<Button 
									onClick={open} 
									variant="primary"
								>
									{__('Media Library', 'somira')}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</Placeholder>
			</div>
		);
	}

	return (
		<>
			<BlockControls>
				<Toolbar>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectVideo}
							allowedTypes={['video']}
							value={id}
							render={({ open }) => (
								<ToolbarButton
									onClick={open}
									label={__('Replace video', 'somira')}
									icon="edit"
								/>
							)}
						/>
					</MediaUploadCheck>
				</Toolbar>
			</BlockControls>

			<InspectorControls>
				<PanelBody title={__('Video Settings', 'somira')} initialOpen={true}>
					<ToggleControl
						label={__('Controls', 'somira')}
						checked={controls}
						onChange={(value) => setAttributes({ controls: value })}
					/>
					
					<ToggleControl
						label={__('Autoplay', 'somira')}
						checked={autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
					/>
					
					<ToggleControl
						label={__('Loop', 'somira')}
						checked={loop}
						onChange={(value) => setAttributes({ loop: value })}
					/>
					
					<ToggleControl
						label={__('Muted', 'somira')}
						checked={muted}
						onChange={(value) => setAttributes({ muted: value })}
					/>
				</PanelBody>

				<PanelBody title={__('Custom Thumbnail', 'somira')} initialOpen={false}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectThumbnail}
							allowedTypes={['image']}
							value={customThumbnail?.id}
							render={({ open }) => (
								<div>
									{customThumbnail ? (
										<div>
											<img 
												src={customThumbnail.url} 
												alt={customThumbnail.alt}
												style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
											/>
											<div>
												<Button 
													onClick={open} 
													variant="secondary"
													style={{ marginRight: '10px' }}
												>
													{__('Replace Thumbnail', 'somira')}
												</Button>
												<Button 
													onClick={removeThumbnail} 
													variant="link" 
													isDestructive
												>
													{__('Remove Thumbnail', 'somira')}
												</Button>
											</div>
										</div>
									) : (
										<Button 
											onClick={open} 
											variant="secondary"
										>
											{__('Select Thumbnail', 'somira')}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody title={__('Custom Play Icon', 'somira')} initialOpen={false}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectPlayIcon}
							allowedTypes={['image']}
							value={customPlayIcon?.id}
							render={({ open }) => (
								<div>
									{customPlayIcon ? (
										<div>
											<img 
												src={customPlayIcon.url} 
												alt={customPlayIcon.alt}
												style={{ maxWidth: '100px', height: 'auto', marginBottom: '10px' }}
											/>
											<div>
												<Button 
													onClick={open} 
													variant="secondary"
													style={{ marginRight: '10px' }}
												>
													{__('Replace Play Icon', 'somira')}
												</Button>
												<Button 
													onClick={removePlayIcon} 
													variant="link" 
													isDestructive
												>
													{__('Remove Play Icon', 'somira')}
												</Button>
											</div>
										</div>
									) : (
										<Button 
											onClick={open} 
											variant="secondary"
										>
											{__('Select Play Icon', 'somira')}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="enhanced-video-preview">
					{customThumbnail ? (
						<div className="enhanced-video-thumbnail-preview">
							<img 
								src={customThumbnail.url} 
								alt={customThumbnail.alt}
								className="thumbnail-preview"
							/>
							<div className="play-button-preview">
								{customPlayIcon ? (
									<img 
										src={customPlayIcon.url} 
										alt={customPlayIcon.alt}
										className="play-icon-preview"
									/>
								) : (
									<div className="default-play-icon-preview">
										<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833333 16.1791 -7.73604e-07 15.698 -7.39955e-07 14.9282L-1.34273e-07 1.0718C-1.00623e-07 0.301996 0.833333 -0.17913 1.5 0.20577L13.5 7.13397Z" fill="#D9D9D9"/>
										</svg>
									</div>
								)}
							</div>
						</div>
					) : (
						<video
							controls={controls}
							autoPlay={autoplay}
							loop={loop}
							muted={muted}
							poster={poster}
							style={{ width: '100%', height: 'auto' }}
						>
							<source src={src} type="video/mp4" />
						</video>
					)}
				</div>
			</div>
		</>
	);
}