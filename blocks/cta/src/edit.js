import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const { title, description, linkText, linkUrl, imageId, imageUrl, imageAlt } = attributes;
	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
		setAttributes({
			imageId: media.id,
			imageUrl: media.url,
			imageAlt: media.alt || ''
		});
	};

	const onRemoveImage = () => {
		setAttributes({
			imageId: 0,
			imageUrl: '',
			imageAlt: ''
		});
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('CTA Settings', 'somira')}>
					<TextControl
						label={__('Link URL', 'somira')}
						value={linkUrl}
						onChange={(value) => setAttributes({ linkUrl: value })}
						placeholder="https://example.com"
					/>
					<TextControl
						label={__('Link Text', 'somira')}
						value={linkText}
						onChange={(value) => setAttributes({ linkText: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="cta-editor">
				<div className="cta-content">
					<RichText
						tagName="h2"
						className="cta-title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__('Enter CTA title...', 'somira')}
					/>
					
					<RichText
						tagName="p"
						className="cta-description"
						value={description}
						onChange={(value) => setAttributes({ description: value })}
						placeholder={__('Enter CTA description...', 'somira')}
					/>

					<div className="cta-link-preview">
						{linkText && (
							<a href="#" className="cta-link" onClick={(e) => e.preventDefault()}>
								{linkText}
							</a>
						)}
					</div>
				</div>

				<div className="cta-image">
					{imageUrl ? (
						<div className="image-preview">
							<img src={imageUrl} alt={imageAlt} />
							<div className="image-controls">
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectImage}
										allowedTypes={['image']}
										value={imageId}
										render={({ open }) => (
											<Button onClick={open} variant="secondary">
												{__('Change Image', 'somira')}
											</Button>
										)}
									/>
								</MediaUploadCheck>
								<Button onClick={onRemoveImage} variant="secondary" isDestructive>
									{__('Remove Image', 'somira')}
								</Button>
							</div>
						</div>
					) : (
						<div className="image-placeholder">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectImage}
									allowedTypes={['image']}
									value={imageId}
									render={({ open }) => (
										<Button onClick={open} variant="primary">
											{__('Select Image', 'somira')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}