/**
 * Frontend JavaScript for Scroll Video Sections Block
 * Uses GSAP + ScrollTrigger for scroll-based video playback
 */

document.addEventListener('DOMContentLoaded', function() {
    // Wait for GSAP to be available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP or ScrollTrigger not loaded');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize all scroll video sections
    const scrollVideoBlocks = document.querySelectorAll('.wp-block-somira-scroll-video-sections');
    
    scrollVideoBlocks.forEach(block => {
        initializeScrollVideoSection(block);
    });
});

function initializeScrollVideoSection(block) {
    const textSections = block.querySelectorAll('.text-section');
    const videos = block.querySelectorAll('.scroll-video');
    
    if (!textSections.length || !videos.length) {
        console.warn('No sections or videos found in scroll video block');
        return;
    }

    // Preload all videos
    preloadVideos(videos);

    // Set up GSAP ScrollTrigger animation (handles all sticky behavior)
    setupStickyBlock(block, textSections);

    // Handle mobile touch optimization
    if (isMobileDevice()) {
        optimizeForMobile(block);
    }
}

function preloadVideos(videos) {
    videos.forEach((video, index) => {
        // Set up video for scroll control
        video.muted = true;
        video.playsInline = true;
        video.preload = 'metadata';
        
        // Prevent default video behavior
        video.addEventListener('loadedmetadata', () => {
            video.currentTime = 0;
            console.log(`Video ${index + 1} loaded: duration ${video.duration}s`);
        });

        // Prevent playing
        video.addEventListener('play', (e) => {
            e.preventDefault();
            video.pause();
        });
    });
}


function setupStickyBlock(block, textSections) {
    if (!block || !textSections.length) return;

    const scrollVideoContainer = block.querySelector('.scroll-video-container');
    const videos = block.querySelectorAll('.scroll-video');
    const videoSections = block.querySelectorAll('.video-section');
    
    if (!scrollVideoContainer || !videos.length) return;

    // Calculate scroll distance for all sections
    const scrollDistance = textSections.length * window.innerHeight;

    // Create main ScrollTrigger animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: scrollVideoContainer,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            onStart: () => {
                console.log('GSAP animation started - adding somira-sticky class');
                scrollVideoContainer.classList.add('somira-sticky');
            },
            onUpdate: (self) => {
                updateVideoAndTextSections(self.progress);
            },
            onComplete: () => {
                console.log('GSAP animation complete - removing somira-sticky class');
                scrollVideoContainer.classList.remove('somira-sticky');
            },
            onReverseComplete: () => {
                console.log('GSAP animation reversed - removing somira-sticky class');
                scrollVideoContainer.classList.remove('somira-sticky');
            },
            onLeave: () => {
                console.log('Animation complete - normal scroll resumed');
                scrollVideoContainer.classList.remove('somira-sticky');
            },
            onEnter: () => {
                console.log('Animation entered - adding somira-sticky class');
                scrollVideoContainer.classList.add('somira-sticky');
            },
            onEnterBack: () => {
                console.log('Animation entered back - adding somira-sticky class');
                scrollVideoContainer.classList.add('somira-sticky');
            },
            onLeaveBack: () => {
                console.log('Animation left back - removing somira-sticky class');
                scrollVideoContainer.classList.remove('somira-sticky');
            }
        }
    });

    function updateVideoAndTextSections(progress) {
        const totalSections = textSections.length;
        const currentSectionIndex = Math.floor(progress * totalSections);
        const sectionProgress = (progress * totalSections) % 1;

        // Clamp to valid range
        const validSectionIndex = Math.min(currentSectionIndex, totalSections - 1);

        // Update active text section
        textSections.forEach((section, index) => {
            section.classList.toggle('active', index === validSectionIndex);
        });

        // Update video sections
        videoSections.forEach((videoSection, index) => {
            if (index === validSectionIndex) {
                videoSection.style.display = 'block';
                videoSection.style.opacity = '1';
                
                // Update video playback
                const video = videos[index];
                if (video && video.duration) {
                    video.currentTime = Math.min(sectionProgress * video.duration, video.duration - 0.1);
                }
            } else {
                videoSection.style.display = 'none';
                videoSection.style.opacity = '0';
            }
        });

        // Check if we've reached section 3 (data-section-index="3")
        const currentSection = textSections[validSectionIndex];
        if (currentSection && currentSection.getAttribute('data-section-index') === '3' && sectionProgress > 0.8) {
            console.log('Section 3 (Intuitive Smart Controls) reached - animation will complete');
        }

        console.log(`Progress: ${(progress * 100).toFixed(1)}% - Section: ${validSectionIndex + 1}/${totalSections}`);
    }

    // Initialize - show first video section
    if (videoSections.length > 0) {
        videoSections.forEach((videoSection, index) => {
            if (index === 0) {
                videoSection.style.display = 'block';
                videoSection.style.opacity = '1';
            } else {
                videoSection.style.display = 'none';
                videoSection.style.opacity = '0';
            }
        });
    }

    // Initialize - activate first text section
    if (textSections.length > 0) {
        textSections[0].classList.add('active');
    }
}



function createSectionAnimation(textSection, video, videoSection, sectionIndex, totalSections) {
    // Create timeline for this section
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: textSection,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onEnter: () => activateSection(textSection, videoSection, sectionIndex),
            onLeave: () => deactivateSection(textSection, sectionIndex),
            onEnterBack: () => activateSection(textSection, videoSection, sectionIndex),
            onLeaveBack: () => deactivateSection(textSection, sectionIndex),
            onUpdate: (self) => updateVideoProgress(video, self.progress)
        }
    });

    // Animate video playback based on scroll
    tl.to(video, {
        currentTime: video.duration || 1,
        duration: 1,
        ease: "none"
    });

    console.log(`Created animation for section ${sectionIndex + 1}`);
}

function activateSection(textSection, videoSection, sectionIndex) {
    // Highlight text section
    textSection.classList.add('active');
    
    // Show corresponding video
    const allVideoSections = textSection.closest('.wp-block-somira-scroll-video-sections')
        .querySelectorAll('.video-section');
    
    allVideoSections.forEach((section, index) => {
        if (index === sectionIndex) {
            section.style.display = 'block';
            gsap.fromTo(section, 
                { opacity: 0 }, 
                { opacity: 1, duration: 0.3 }
            );
        } else {
            gsap.to(section, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    section.style.display = 'none';
                }
            });
        }
    });

    console.log(`Activated section ${sectionIndex + 1}`);
}

function deactivateSection(textSection, sectionIndex) {
    // Remove highlight from text section
    textSection.classList.remove('active');
    console.log(`Deactivated section ${sectionIndex + 1}`);
}

function updateVideoProgress(video, progress) {
    if (!video.duration) return;
    
    // Update video currentTime based on scroll progress
    const targetTime = progress * video.duration;
    
    // Only update if the difference is significant (performance optimization)
    if (Math.abs(video.currentTime - targetTime) > 0.1) {
        video.currentTime = targetTime;
    }
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function optimizeForMobile(block) {
    // Add mobile-specific optimizations
    block.classList.add('mobile-optimized');
    
    // Reduce video quality on mobile if needed
    const videos = block.querySelectorAll('.scroll-video');
    videos.forEach(video => {
        // Add mobile-specific attributes
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkit-playsinline', 'true');
        
        // Optimize loading
        video.preload = 'metadata';
    });

    // Adjust ScrollTrigger settings for mobile
    ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
        ignoreMobileResize: true
    });
}

// Refresh ScrollTrigger on resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Debug function (remove in production)
function debugScrollVideoSections() {
    console.log('=== Scroll Video Sections Debug ===');
    
    const blocks = document.querySelectorAll('.wp-block-somira-scroll-video-sections');
    console.log(`Found ${blocks.length} scroll video blocks`);
    
    blocks.forEach((block, blockIndex) => {
        const textSections = block.querySelectorAll('.text-section');
        const videos = block.querySelectorAll('.scroll-video');
        
        console.log(`Block ${blockIndex + 1}:`);
        console.log(`  - Text sections: ${textSections.length}`);
        console.log(`  - Videos: ${videos.length}`);
        
        videos.forEach((video, videoIndex) => {
            console.log(`  - Video ${videoIndex + 1}: ${video.src}`);
            console.log(`    Duration: ${video.duration || 'not loaded'}`);
        });
    });
    
    console.log('ScrollTrigger instances:', ScrollTrigger.getAll().length);
}

// Make debug function available globally (remove in production)
window.debugScrollVideoSections = debugScrollVideoSections;