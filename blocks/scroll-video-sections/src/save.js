import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { blockTitle, blockSubtitle, sections } = attributes;
    const blockProps = useBlockProps.save();

    // Debug: Log sections data (remove in production)
    if (typeof console !== 'undefined') {
        console.log('Scroll Video Sections save data:', { blockTitle, blockSubtitle, sections });
    }

    // Filter out sections without videos for frontend, but be more permissive
    const validSections = (sections || []).filter(section => 
        section && (section.videoUrl || section.title || section.text)
    );

    return (
        <div {...blockProps} data-block-path="/wp-content/themes/somira/blocks/scroll-video-sections/">
            <div className="scroll-video-wrapper">
                {/* Header Section */}
                <div className="scroll-video-header">
                    <RichText.Content
                        tagName="h2"
                        className="scroll-video-title"
                        value={blockTitle}
                    />
                    <RichText.Content
                        tagName="p"
                        className="scroll-video-subtitle"
                        value={blockSubtitle}
                    />
                </div>

                {/* Main Content */}
                <div className="scroll-video-container">
                    {/* Left Column - Text Sections */}
                    <div className="text-sections-column">
                        {validSections.map((section, index) => (
                            <div 
                                key={section.id || index} 
                                className="text-section"
                                data-section-index={index}
                            >
                                <div className="section-content">
                                    <h3 className="section-title">{section.title}</h3>
                                    <p className="section-text">{section.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Video Container */}
                    <div className="video-sections-column">
                        <div className="video-container">
                            {validSections.map((section, index) => (
                                <div 
                                    key={section.id || index}
                                    className="video-section"
                                    data-video-index={index}
                                    style={{ display: index === 0 ? 'block' : 'none' }}
                                >
                                    {section.videoUrl ? (
                                        <video 
                                            className="scroll-video"
                                            src={section.videoUrl}
                                            muted
                                            playsInline
                                            preload="metadata"
                                            data-section={index}
                                        />
                                    ) : (
                                        <div className="video-placeholder">
                                            <p>No video selected for section {index + 1}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {/* Pause/Play Button */}
                            <button className="video-pause-button" aria-label="Pause auto-play">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                                    <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="mobile-scroll-video">
                {/* Mobile Header */}
                <div className="mobile-header">
                    <RichText.Content
                        tagName="h2"
                        className="mobile-title"
                        value={blockTitle}
                    />
                    <RichText.Content
                        tagName="p"
                        className="mobile-subtitle"
                        value={blockSubtitle}
                    />
                </div>

                {/* Mobile Carousel Container */}
                <div className="mobile-carousel">
                    {validSections.map((section, index) => (
                        <div 
                            key={section.id || index}
                            className="mobile-slide"
                            data-slide-index={index}
                        >
                            {/* Video */}
                            <div className="mobile-video-container">
                                {section.videoUrl ? (
                                    <video 
                                        className="mobile-video"
                                        src={section.videoUrl}
                                        muted
                                        playsInline
                                        preload="metadata"
                                        loop
                                        data-section={index}
                                    />
                                ) : (
                                    <div className="mobile-video-placeholder">
                                        <p>No video selected for section {index + 1}</p>
                                    </div>
                                )}
                            </div>
                            
                            {/* Text Section */}
                            <div className="mobile-text-section">
                                <div className="mobile-text-content">
                                    <h3 className="mobile-section-title">{section.title}</h3>
                                    <p className="mobile-section-text">{section.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}