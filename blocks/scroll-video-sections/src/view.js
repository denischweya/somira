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
    const videoSections = block.querySelectorAll('.video-section');
    const videos = block.querySelectorAll('.scroll-video');
    const stickyContainer = block.querySelector('.sticky-video-container');
    
    if (!textSections.length || !videos.length) {
        console.warn('No sections or videos found in scroll video block');
        return;
    }

    // Preload all videos
    preloadVideos(videos);

    // Set up sticky positioning for video container
    setupStickyVideo(stickyContainer);

    // Set up sticky behavior for entire block
    setupStickyBlock(block, textSections);

    // Create scroll animations for each section
    textSections.forEach((textSection, index) => {
        const video = videos[index];
        const videoSection = videoSections[index];
        
        if (!video || !videoSection) return;

        createSectionAnimation(textSection, video, videoSection, index, textSections.length);
    });

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

    let isInAnimationMode = false;
    let animationProgress = 0;
    const totalSections = textSections.length;
    let blockAtTop = false;

    // Monitor when block reaches the top of viewport
    ScrollTrigger.create({
        trigger: block,
        start: "top top",
        end: "bottom top",
        onToggle: (self) => {
            blockAtTop = self.isActive;
            if (blockAtTop && !isInAnimationMode) {
                enterAnimationMode();
            } else if (!blockAtTop && isInAnimationMode) {
                exitAnimationMode();
            }
        }
    });

    function enterAnimationMode() {
        if (isInAnimationMode) return;
        console.log('Block reached top:0 - starting animation mode');
        isInAnimationMode = true;
        animationProgress = 0;

        // Make block fixed at top
        block.style.position = 'fixed';
        block.style.top = '0';
        block.style.left = '0';
        block.style.width = '100%';
        block.style.height = '100vh';
        block.style.zIndex = '1000';

        // Prevent page scrolling
        document.body.style.overflow = 'hidden';

        // Initialize video sections - hide all except first
        const videoSections = block.querySelectorAll('.video-section');
        videoSections.forEach((videoSection, index) => {
            if (index === 0) {
                videoSection.style.display = 'block';
                videoSection.style.opacity = '1';
            } else {
                videoSection.style.display = 'none';
                videoSection.style.opacity = '0';
            }
        });

        // Initialize text sections - activate first
        textSections.forEach((section, index) => {
            section.classList.toggle('active', index === 0);
        });

        // Listen for scroll events to control animations only
        window.addEventListener('wheel', handleAnimationScroll, { passive: false });
        window.addEventListener('touchmove', handleAnimationScroll, { passive: false });
    }

    function handleAnimationScroll(event) {
        if (!isInAnimationMode) return;

        event.preventDefault();
        const delta = event.deltaY || (event.touches ? -event.touches[0].clientY : 0);
        const scrollSpeed = 0.0015;

        // Update animation progress (0-1)
        animationProgress = Math.max(0, Math.min(1, animationProgress + delta * scrollSpeed));

        const currentSectionIndex = Math.floor(animationProgress * totalSections);
        const sectionProgress = (animationProgress * totalSections) % 1;

        // Update active text section
        textSections.forEach((section, index) => {
            section.classList.toggle('active', index === currentSectionIndex);
        });

        // Update video sections - show/hide and update playback
        const videoSections = block.querySelectorAll('.video-section');
        const videos = block.querySelectorAll('.scroll-video');
        
        videoSections.forEach((videoSection, index) => {
            if (index === currentSectionIndex) {
                // Show current video section
                videoSection.style.display = 'block';
                gsap.to(videoSection, { opacity: 1, duration: 0.3 });
                
                // Update video playback
                const video = videos[index];
                if (video && video.duration) {
                    video.currentTime = sectionProgress * video.duration;
                }
            } else {
                // Hide other video sections
                gsap.to(videoSection, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        videoSection.style.display = 'none';
                    }
                });
            }
        });

        console.log(`Animation progress: ${(animationProgress * 100).toFixed(1)}% - Section: ${currentSectionIndex + 1}/${totalSections}`);

        // Animation complete - exit mode
        if (animationProgress >= 1) {
            console.log('Animation complete - resuming normal scroll');
            exitAnimationMode();
            
            // Continue page scroll after a brief delay
            setTimeout(() => {
                window.scrollBy(0, 100);
            }, 100);
        }
    }

    function exitAnimationMode() {
        if (!isInAnimationMode) return;
        isInAnimationMode = false;

        // Restore block to normal positioning
        block.style.position = 'relative';
        block.style.top = 'auto';
        block.style.left = 'auto';
        block.style.width = 'auto';
        block.style.height = 'auto';
        block.style.zIndex = 'auto';

        // Restore normal page scrolling
        document.body.style.overflow = 'auto';

        // Remove animation scroll listeners
        window.removeEventListener('wheel', handleAnimationScroll);
        window.removeEventListener('touchmove', handleAnimationScroll);
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