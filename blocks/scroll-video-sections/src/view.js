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
        // Check if mobile
        if (window.innerWidth <= 768) {
            initializeMobileSequence(block);
        } else {
            initializeScrollVideoSection(block);
        }
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
        video.preload = 'auto'; // Changed to 'auto' for better preloading
        
        // Force video to load
        video.load();
        
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

    // Calculate scroll distance for 1-second video segments
    // 1-second videos at 30fps = 30 frames per video
    // For smooth scroll: need good amount of pixels per frame
    const framesPerVideo = 20; // 1 second × 30fps = 30 frames
    const pixelsPerFrame = 60; // pixels per frame for smooth experience
    const scrollPerVideo = framesPerVideo * pixelsPerFrame; // 3,000px per 1-second video
    const totalScrollDistance = scrollPerVideo * textSections.length; // total for all videos

    // Pin the container first
    ScrollTrigger.create({
        trigger: scrollVideoContainer,
        start: "top top",
        end: `+=${totalScrollDistance}px`,
        pin: true,
        pinSpacing: true,
        onEnter: () => console.log("Container pinned"),
        onLeave: () => console.log("Container unpinned")
    });

    // Create one ScrollTrigger to handle section switching (no video manipulation)
    ScrollTrigger.create({
        trigger: scrollVideoContainer,
        start: "top top",
        end: `+=${totalScrollDistance}px`,
        onUpdate: (self) => {
            // Simple section switching logic only
            const progress = self.progress;
            const totalSections = textSections.length;
            const currentSectionIndex = Math.floor(progress * totalSections);
            const validSectionIndex = Math.min(currentSectionIndex, totalSections - 1);

            // Update active text sections
            textSections.forEach((section, idx) => {
                section.classList.toggle('active', idx === validSectionIndex);
            });

            // Update video visibility
            videoSections.forEach((vSection, idx) => {
                if (idx === validSectionIndex) {
                    vSection.style.display = 'block';
                    vSection.style.opacity = '1';
                } else {
                    vSection.style.display = 'none';
                    vSection.style.opacity = '0';
                }
            });
        }
    });

    // Create one unified animation that controls all videos based on overall progress
    ScrollTrigger.create({
        trigger: scrollVideoContainer,
        start: "top top",
        end: `+=${totalScrollDistance}px`,
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const totalSections = textSections.length;
            const currentSectionIndex = Math.floor(progress * totalSections);
            const validSectionIndex = Math.min(currentSectionIndex, totalSections - 1);
            const sectionProgress = (progress * totalSections) % 1;

            // Animate the currently active video
            videos.forEach((video, index) => {
                if (index === validSectionIndex) {
                    // Play 8 seconds of this video based on section progress
                    const targetTime = sectionProgress * 8; // 0 to 8 seconds
                    video.currentTime = Math.min(targetTime, video.duration - 0.1);
                } else {
                    // Reset other videos to start
                    video.currentTime = 0;
                }
            });
        }
    });


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

// Mobile Canvas Sequence Functionality
function initializeMobileSequence(block) {
    const canvas = block.querySelector('#mobileSequence');
    const textTitle = block.querySelector('#mobileTextTitle');
    const textDescription = block.querySelector('#mobileTextDescription');
    const textSections = block.querySelectorAll('.text-section');
    
    if (!canvas) {
        console.warn('Mobile canvas not found in block');
        return;
    }

    console.log('Initializing mobile sequence...');
    
    // Configuration
    const frameCount = 67;
    const images = [];
    const currentFrame = index => `/Volumes/M2 Cloud/projects/somira/frames/01_0${(index + 27).toString().padStart(4, '0')}.webp`;
    
    // Animation object
    const obj = { frame: 0 };
    
    // Touch settings
    const TOUCH_CONFIG = {
        sensitivity: 0.1,
        resistance: 0.65,
        momentum: 0.98,
        minVelocity: 0.2
    };

    // Get text content from sections
    const textContent = Array.from(textSections).map(section => ({
        title: section.querySelector('.section-title')?.textContent || 'Interactive Experience',
        description: section.querySelector('.section-text')?.textContent || 'Scroll to explore the interactive experience.'
    }));

    // Fallback if no sections
    if (textContent.length === 0) {
        textContent.push({
            title: 'Interactive Experience',
            description: 'Scroll to explore the interactive experience.'
        });
    }

    let currentTextIndex = 0;
    let touchStartY = 0;
    let currentFrameIndex = 0;
    let velocity = 0;
    let isCoasting = false;
    let momentumAnimation = null;

    // Setup canvas
    function setupCanvas() {
        const context = canvas.getContext("2d");
        canvas.width = 450;
        canvas.height = 800;
        canvas.style.width = "450px";
        canvas.style.height = "800px";
        context.imageSmoothingEnabled = false;
        return context;
    }

    const context = setupCanvas();

    // Preload images
    function preloadImages() {
        let imagesLoaded = 0;
        
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            
            img.onload = () => {
                imagesLoaded++;
                console.log(`Mobile: Loaded frame ${i + 1}/${frameCount}`);
                
                if (imagesLoaded === frameCount) {
                    console.log('Mobile: All images loaded, rendering first frame');
                    render();
                }
            };
            
            img.onerror = () => {
                console.error(`Mobile: Failed to load frame ${i}: ${currentFrame(i)}`);
                images[i] = null;
                imagesLoaded++;
                
                if (imagesLoaded === frameCount) {
                    render();
                }
            };
            
            img.src = currentFrame(i);
            images[i] = img;
        }
    }

    // Render function
    function render() {
        let frameIndex = Math.round(obj.frame);
        frameIndex = Math.max(0, Math.min(frameCount - 1, frameIndex));
        
        const imageToShow = images[frameIndex];
        if (imageToShow && imageToShow.complete && imageToShow.naturalWidth > 0) {
            try {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(imageToShow, 0, 0, canvas.width, canvas.height);
            } catch (error) {
                console.error(`Mobile: Error drawing frame ${frameIndex}:`, error);
            }
        }
        
        updateText();
    }

    // Update text based on progress
    function updateText() {
        const progress = obj.frame / (frameCount - 1);
        const textIndex = Math.floor(progress * textContent.length);
        
        if (textIndex !== currentTextIndex && textContent[textIndex]) {
            currentTextIndex = textIndex;
            
            if (textTitle && textDescription) {
                gsap.to([textTitle, textDescription], {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => {
                        textTitle.textContent = textContent[textIndex].title;
                        textDescription.textContent = textContent[textIndex].description;
                        gsap.to([textTitle, textDescription], { opacity: 1, duration: 0.2 });
                    }
                });
            }
        }
    }

    // Touch controls
    canvas.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
        currentFrameIndex = obj.frame;
        
        if (momentumAnimation) {
            cancelAnimationFrame(momentumAnimation);
            momentumAnimation = null;
        }
        isCoasting = false;
        velocity = 0;
    }, { passive: true });

    canvas.addEventListener("touchmove", (e) => {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        touchStartY = touchY;

        const rawDelta = deltaY * TOUCH_CONFIG.sensitivity;
        const resistedDelta = rawDelta * TOUCH_CONFIG.resistance;
        
        velocity = resistedDelta;
        currentFrameIndex += resistedDelta;
        currentFrameIndex = Math.max(0, Math.min(frameCount - 1, currentFrameIndex));

        obj.frame = currentFrameIndex;
        render();
    }, { passive: true });

    canvas.addEventListener("touchend", () => {
        if (Math.abs(velocity) > TOUCH_CONFIG.minVelocity) {
            startMomentumAnimation();
        }
    }, { passive: true });

    // Momentum animation
    function startMomentumAnimation() {
        if (isCoasting) return;
        
        isCoasting = true;
        
        function animate() {
            if (Math.abs(velocity) < TOUCH_CONFIG.minVelocity) {
                isCoasting = false;
                return;
            }
            
            currentFrameIndex += velocity;
            currentFrameIndex = Math.max(0, Math.min(frameCount - 1, currentFrameIndex));
            
            velocity *= TOUCH_CONFIG.momentum;
            obj.frame = currentFrameIndex;
            render();
            
            momentumAnimation = requestAnimationFrame(animate);
        }
        
        animate();
    }

    // Initialize
    preloadImages();
    
    console.log('Mobile sequence initialized');
}