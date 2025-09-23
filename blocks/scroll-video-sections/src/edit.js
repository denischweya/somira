import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    MediaUpload, 
    MediaUploadCheck,
    InspectorControls 
} from '@wordpress/block-editor';
import { 
    Button, 
    PanelBody, 
    TextControl,
    Placeholder,
    Card,
    CardBody,
    CardHeader 
} from '@wordpress/components';
import { useState, useCallback } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { blockTitle, blockSubtitle, sections = [] } = attributes;
    const blockProps = useBlockProps();
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);

    // Debug: Log current state
    console.log('Edit component - current attributes:', { blockTitle, blockSubtitle, sections });

    // Update section function
    const updateSection = useCallback((index, field, value) => {
        console.log('Updating section:', { index, field, value });
        const newSections = [...(sections || [])];
        if (newSections[index]) {
            newSections[index] = { ...newSections[index], [field]: value };
            setAttributes({ sections: newSections });
            console.log('Updated sections:', newSections);
        }
    }, [sections, setAttributes]);

    // Add section function
    const addSection = useCallback(() => {
        if (sections.length >= 4) return; // Max 4 sections
        
        const newSection = {
            id: Date.now(),
            title: `Section ${sections.length + 1}`,
            text: 'Enter your section content here...',
            videoUrl: ''
        };
        
        setAttributes({ sections: [...sections, newSection] });
    }, [sections, setAttributes]);

    // Remove section function
    const removeSection = useCallback((index) => {
        const newSections = sections.filter((_, i) => i !== index);
        setAttributes({ sections: newSections });
        if (selectedSectionIndex === index) {
            setSelectedSectionIndex(null);
        }
    }, [sections, selectedSectionIndex, setAttributes]);

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Block Settings', 'somira')}>
                    <TextControl
                        label={__('Block Title', 'somira')}
                        value={blockTitle}
                        onChange={(value) => setAttributes({ blockTitle: value })}
                        help={__('Main title for the scroll section', 'somira')}
                    />
                    <TextControl
                        label={__('Block Subtitle', 'somira')}
                        value={blockSubtitle}
                        onChange={(value) => setAttributes({ blockSubtitle: value })}
                        help={__('Subtitle text below the main title', 'somira')}
                    />
                </PanelBody>

                <PanelBody title={__('Video Sections', 'somira')} initialOpen={true}>
                    <p>{__('Manage your scroll video sections (max 4):', 'somira')}</p>
                    
                    {sections.length === 0 && (
                        <p style={{ fontStyle: 'italic', color: '#666' }}>
                            {__('No sections added yet. Click "Add Section" below to get started.', 'somira')}
                        </p>
                    )}

                    {sections.map((section, index) => (
                        <Card key={section.id} style={{ 
                            marginBottom: '20px',
                            backgroundColor: selectedSectionIndex === index ? '#f0f8ff' : '#fafafa'
                        }}>
                            <CardHeader>
                                <h4 style={{ margin: '0' }}>
                                    {__('Section', 'somira')} {index + 1}
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <TextControl
                                    label={__('Section Title', 'somira')}
                                    value={section.title}
                                    onChange={(value) => updateSection(index, 'title', value)}
                                    placeholder={__('Enter section title...', 'somira')}
                                    style={{ marginBottom: '10px' }}
                                />

                                <TextControl
                                    label={__('Section Text', 'somira')}
                                    value={section.text}
                                    onChange={(value) => updateSection(index, 'text', value)}
                                    placeholder={__('Enter section description...', 'somira')}
                                    style={{ marginBottom: '15px' }}
                                />

                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => updateSection(index, 'videoUrl', media.url)}
                                        allowedTypes={['video']}
                                        value={section.id}
                                        render={({ open }) => (
                                            <Button 
                                                onClick={open} 
                                                variant="secondary"
                                                style={{ marginBottom: '10px' }}
                                            >
                                                {section.videoUrl ? __('Change Video', 'somira') : __('Select Video', 'somira')}
                                            </Button>
                                        )}
                                    />
                                </MediaUploadCheck>

                                {section.videoUrl && (
                                    <div style={{ marginBottom: '10px' }}>
                                        <small style={{ color: '#666' }}>
                                            {__('Video:', 'somira')} {section.videoUrl.split('/').pop()}
                                        </small>
                                    </div>
                                )}

                                <Button 
                                    onClick={() => removeSection(index)} 
                                    variant="secondary" 
                                    isDestructive
                                    size="small"
                                >
                                    {__('Remove Section', 'somira')}
                                </Button>
                            </CardBody>
                        </Card>
                    ))}

                    {sections.length < 4 && (
                        <Button 
                            onClick={addSection} 
                            variant="primary"
                            style={{ marginTop: '10px' }}
                        >
                            {__('Add Section', 'somira')} ({sections.length}/4)
                        </Button>
                    )}
                </PanelBody>
            </InspectorControls>

            <div className="scroll-video-editor">
                <div className="editor-header">
                    <RichText
                        tagName="h1"
                        className="block-title"
                        value={blockTitle}
                        onChange={(value) => setAttributes({ blockTitle: value })}
                        placeholder={__('Block title...', 'somira')}
                        allowedFormats={[]}
                    />
                    
                    <RichText
                        tagName="p"
                        className="block-subtitle"
                        value={blockSubtitle}
                        onChange={(value) => setAttributes({ blockSubtitle: value })}
                        placeholder={__('Block subtitle...', 'somira')}
                        allowedFormats={[]}
                    />
                </div>

                <div className="editor-preview">
                    {sections.length === 0 ? (
                        <Placeholder
                            label={__('Scroll Video Sections', 'somira')}
                            instructions={__('Add sections using the sidebar panel to get started.', 'somira')}
                        >
                            <Button onClick={addSection} variant="primary">
                                {__('Add First Section', 'somira')}
                            </Button>
                        </Placeholder>
                    ) : (
                        <div className="sections-grid">
                            <div className="sections-column">
                                <h3>{__('Text Sections', 'somira')}</h3>
                                {sections.map((section, index) => (
                                    <div 
                                        key={section.id} 
                                        className={`section-preview ${selectedSectionIndex === index ? 'active' : ''}`}
                                        onClick={() => setSelectedSectionIndex(index)}
                                        style={{
                                            padding: '1rem',
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            marginBottom: '1rem',
                                            cursor: 'pointer',
                                            backgroundColor: selectedSectionIndex === index ? '#e3f2fd' : '#fff'
                                        }}
                                    >
                                        <h4 style={{ margin: '0 0 0.5rem 0' }}>{section.title}</h4>
                                        <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>
                                            {section.text || __('No content yet...', 'somira')}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="videos-column">
                                <h3>{__('Videos', 'somira')}</h3>
                                {sections.map((section, index) => (
                                    <div 
                                        key={section.id} 
                                        className="video-preview"
                                        style={{
                                            marginBottom: '1rem',
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {section.videoUrl ? (
                                            <video 
                                                src={section.videoUrl} 
                                                style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                                                controls={false}
                                                muted
                                            />
                                        ) : (
                                            <div style={{
                                                padding: '2rem',
                                                textAlign: 'center',
                                                backgroundColor: '#f5f5f5',
                                                color: '#666'
                                            }}>
                                                {__('No video selected', 'somira')}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}