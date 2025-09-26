/**
 * Frontend JavaScript for Scroll Video Sections Block
 * Desktop: Click-based video loading with autoplay
 * Mobile: Canvas-based frame sequence animation with GSAP
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all scroll video sections
    const scrollVideoBlocks = document.querySelectorAll('.wp-block-somira-scroll-video-sections');
    
    scrollVideoBlocks.forEach(block => {
        initializeScrollVideoBlock(block);
    });
});

function initializeScrollVideoBlock(block) {
    const isMobile = window.innerWidth <= 768;
    
    // Clean up any existing instances
    if (block.autoLoopCleanup) {
        block.autoLoopCleanup();
    }
    if (block.mobileCarouselCleanup) {
        block.mobileCarouselCleanup();
    }
    
    if (isMobile) {
        initializeMobileCarousel(block);
    } else {
        initializeClickVideoSection(block);
    }
}

// Handle window resize to switch between desktop/mobile versions
window.addEventListener('resize', function() {
    const scrollVideoBlocks = document.querySelectorAll('.wp-block-somira-scroll-video-sections');
    scrollVideoBlocks.forEach(block => {
        initializeScrollVideoBlock(block);
    });
});

/**
 * Desktop version - Auto-loop functionality with text section navigation
 */
function initializeClickVideoSection(block) {
    const textSections = block.querySelectorAll('.text-section');
    const videos = block.querySelectorAll('.scroll-video');
    const videoSections = block.querySelectorAll('.video-section');
    const pauseButton = block.querySelector('.video-pause-button');
    
    if (!textSections.length || !videos.length) {
        console.warn('No sections or videos found in scroll video block');
        return;
    }

    // Set up videos for looping
    videos.forEach((video, index) => {
        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        video.preload = 'metadata';
        
        // Load video
        video.load();
    });

    let currentIndex = 0;
    let autoLoopInterval = null;
    let userPausedAutoLoop = false;
    let resumeAutoLoopTimeout = null;
    let isPaused = false;

    // Function to activate section and sync animations
    function activateSection(index, manualNavigation = false) {
        // Remove active class from all text sections
        textSections.forEach(section => section.classList.remove('active'));
        
        // Add active class to current section
        if (textSections[index]) {
            textSections[index].classList.add('active');
        }

        // Hide all videos
        videoSections.forEach(videoSection => {
            videoSection.style.display = 'none';
            const video = videoSection.querySelector('.scroll-video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
        
        // Show and play corresponding video
        if (videoSections[index]) {
            const videoSection = videoSections[index];
            const video = videoSection.querySelector('.scroll-video');
            
            videoSection.style.display = 'block';
            
            if (video && video.src) {
                video.play().catch(error => {
                    console.warn('Video autoplay failed:', error);
                });
            }
        }

        currentIndex = index;

        // Handle manual navigation
        if (manualNavigation) {
            // Pause auto-loop temporarily
            if (autoLoopInterval) {
                clearInterval(autoLoopInterval);
                autoLoopInterval = null;
            }
            userPausedAutoLoop = true;
            
            // Clear any existing resume timeout
            if (resumeAutoLoopTimeout) {
                clearTimeout(resumeAutoLoopTimeout);
            }
            
            // Resume auto-loop after 3 seconds
            resumeAutoLoopTimeout = setTimeout(() => {
                if (userPausedAutoLoop) {
                    startAutoLoop();
                    userPausedAutoLoop = false;
                }
            }, 3000);
        }
    }

    // Auto-loop functionality
    function startAutoLoop() {
        if (autoLoopInterval) {
            clearInterval(autoLoopInterval);
        }
        
        autoLoopInterval = setInterval(() => {
            if (!userPausedAutoLoop && !isPaused) {
                const nextIndex = (currentIndex + 1) % textSections.length;
                activateSection(nextIndex, false);
            }
        }, 8000); // 8 seconds
    }

    // Make text sections clickable for direct navigation
    textSections.forEach((textSection, index) => {
        textSection.style.cursor = 'pointer';
        
        textSection.addEventListener('click', () => {
            activateSection(index, true); // Mark as manual navigation
        });
    });

    // Pause/Play button functionality
    if (pauseButton) {
        pauseButton.addEventListener('click', () => {
            if (isPaused) {
                // Resume auto-loop and animations
                isPaused = false;
                userPausedAutoLoop = false;
                startAutoLoop();
                pauseButton.classList.remove('paused');
                pauseButton.setAttribute('aria-label', 'Pause auto-play');
                
                // Resume progress animations for active section
                const activeSection = block.querySelector('.text-section.active');
                if (activeSection) {
                    activeSection.style.animationPlayState = 'running';
                }
            } else {
                // Pause everything - auto-loop, videos, and animations
                isPaused = true;
                userPausedAutoLoop = true;
                
                // Clear auto-loop interval
                if (autoLoopInterval) {
                    clearInterval(autoLoopInterval);
                    autoLoopInterval = null;
                }
                
                // Clear any resume timeout
                if (resumeAutoLoopTimeout) {
                    clearTimeout(resumeAutoLoopTimeout);
                    resumeAutoLoopTimeout = null;
                }
                
                pauseButton.classList.add('paused');
                pauseButton.setAttribute('aria-label', 'Resume auto-play');
                
                // Pause progress animations for active section
                const activeSection = block.querySelector('.text-section.active');
                if (activeSection) {
                    activeSection.style.animationPlayState = 'paused';
                }
            }
        });
    }

    // Initialize - activate first section and start auto-loop
    activateSection(0, false);
    startAutoLoop();

    // Clean up intervals and timeouts when needed
    block.autoLoopCleanup = () => {
        if (autoLoopInterval) {
            clearInterval(autoLoopInterval);
        }
        if (resumeAutoLoopTimeout) {
            clearTimeout(resumeAutoLoopTimeout);
        }
        isPaused = false;
    };
}

/**
 * Mobile version - Flickity carousel with swipe, pageDots and auto-play
 */
function initializeMobileCarousel(block) {
    const mobileCarousel = block.querySelector('.mobile-carousel');
    const mobileVideos = block.querySelectorAll('.mobile-video');
    const mobileTextSections = block.querySelectorAll('.mobile-text-section');
    
    if (!mobileCarousel || !mobileVideos.length || !mobileTextSections.length) {
        console.warn('Mobile carousel elements not found');
        return;
    }

    // Set up videos for looping
    mobileVideos.forEach((video, index) => {
        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        video.preload = 'metadata';
        
        // Load video
        video.load();
    });

    // Initialize Flickity for mobile
    const flickity = new window.Flickity(mobileCarousel, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        pageDots: true, // Enable page dots
        prevNextButtons: false, // Disable arrow buttons
        draggable: true, // Enable swipe
        autoPlay: 8000, // 8 seconds autoplay
        pauseAutoPlayOnHover: false,
        percentPosition: false,
        adaptiveHeight: true, // Allow height to adjust
        setGallerySize: false, // Don't set fixed gallery size
    });

    let userPausedAutoPlay = false;
    let resumeAutoPlayTimeout = null;

    // Function to activate mobile section and sync animations
    function activateMobileSection(index) {
        // Remove active class from all mobile text sections
        mobileTextSections.forEach(section => section.classList.remove('active'));
        
        // Add active class to current section
        if (mobileTextSections[index]) {
            mobileTextSections[index].classList.add('active');
        }

        // Play corresponding video
        mobileVideos.forEach((video, i) => {
            if (i === index && video.src) {
                video.play().catch(error => {
                    console.warn('Mobile video autoplay failed:', error);
                });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    // Listen for carousel changes
    flickity.on('change', function(index) {
        activateMobileSection(index);
    });

    // Handle manual navigation (pause auto-play temporarily)
    flickity.on('staticClick', function() {
        // Pause autoplay temporarily
        flickity.pausePlayer();
        userPausedAutoPlay = true;
        
        // Clear any existing resume timeout
        if (resumeAutoPlayTimeout) {
            clearTimeout(resumeAutoPlayTimeout);
        }
        
        // Resume autoplay after 3 seconds
        resumeAutoPlayTimeout = setTimeout(() => {
            if (userPausedAutoPlay) {
                flickity.unpausePlayer();
                userPausedAutoPlay = false;
            }
        }, 3000);
    });

    // Initialize - activate first section
    activateMobileSection(0);

    // Clean up mobile carousel when needed
    block.mobileCarouselCleanup = () => {
        if (resumeAutoPlayTimeout) {
            clearTimeout(resumeAutoPlayTimeout);
        }
        if (flickity) {
            flickity.destroy();
        }
        userPausedAutoPlay = false;
    };
}
