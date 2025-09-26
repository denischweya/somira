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
        <div {...blockProps}>
            <div className="scroll-video-wrapper">
                {/* Header Section */}
                <div className="scroll-video-header">
                    <RichText.Content
                        tagName="h1"
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

                    {/* Right Column - Sticky Video Container */}
                    <div className="video-sections-column">
                        <div className="sticky-video-container">
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
                        </div>
                    </div>
                </div>

                {/* Scroll spacer for animation */}
                <div className="scroll-spacer" style={{ height: `${validSections.length * 100}vh` }}></div>
            </div>

            {/* Mobile Alternative Component */}
            <div className="mobile-scroll-alternative">
                <div className="mobile-scroll-container" style={{ height: `${validSections.length * 100}vh` }}>
                    <canvas 
                        id="mobileSequence" 
                        className="mobile-canvas"
                        width="450" 
                        height="800"
                    ></canvas>
                </div>
                
                <div className="mobile-overlay">
                    <h2 className="mobile-text-title" id="mobileTextTitle">
                        {validSections[0]?.title || 'Interactive Experience'}
                    </h2>
                    <p className="mobile-text-description" id="mobileTextDescription">
                        {validSections[0]?.text || 'Scroll to explore the interactive experience.'}
                    </p>
                </div>
            </div>
        </div>
    );
}