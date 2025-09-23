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
	RichText,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';

import { 
	PanelBody, 
	Button,
	TextControl
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
		videoUrl = '', 
		videoId = 0, 
		title = '', 
		content = '', 
		buttonText = '', 
		buttonUrl = '' 
	} = attributes;

	const blockProps = useBlockProps({
		className: 'somira-hero-block'
	});

	const onSelectVideo = (media) => {
		setAttributes({
			videoUrl: media.url,
			videoId: media.id
		});
	};

	const removeVideo = () => {
		setAttributes({
			videoUrl: '',
			videoId: 0
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Hero Settings', 'somira')} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectVideo}
							allowedTypes={['video']}
							value={videoId}
							render={({ open }) => (
								<div>
									<Button 
										onClick={open} 
										variant="secondary"
										style={{ marginBottom: '10px', display: 'block' }}
									>
										{videoUrl ? __('Replace Video', 'somira') : __('Select Video', 'somira')}
									</Button>
									{videoUrl && (
										<Button 
											onClick={removeVideo} 
											variant="link" 
											isDestructive
										>
											{__('Remove Video', 'somira')}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
					
					<TextControl
						label={__('Button URL', 'somira')}
						value={buttonUrl}
						onChange={(value) => setAttributes({ buttonUrl: value })}
						placeholder="https://example.com"
					/>
				</PanelBody>
			</InspectorControls>

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
						<RichText
							tagName="h2"
							className="somira-hero-title"
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__('Enter hero title...', 'somira')}
						/>
						
						<RichText
							tagName="p"
							className="somira-hero-text"
							value={content}
							onChange={(value) => setAttributes({ content: value })}
							placeholder={__('Enter hero description...', 'somira')}
						/>
						
						<RichText
							tagName="span"
							className="somira-hero-button"
							value={buttonText}
							onChange={(value) => setAttributes({ buttonText: value })}
							placeholder={__('Button text...', 'somira')}
						/>
					</div>
				</div>
			</div>
		</>
	);
}