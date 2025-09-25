/**
 * Frontend JavaScript for Scroll Video Sections Block
 * Desktop: Click-based video loading with autoplay
 * Mobile: Canvas-based frame sequence animation with GSAP
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all scroll video sections
    const scrollVideoBlocks = document.querySelectorAll('.wp-block-somira-scroll-video-sections');
    
    scrollVideoBlocks.forEach(block => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
        
        if (isMobile) {
            initializeMobileCanvasAnimation(block);
        } else {
            initializeClickVideoSection(block);
        }
    });
});

/**
 * Desktop version - Click-based video switching
 */
function initializeClickVideoSection(block) {
    const textSections = block.querySelectorAll('.text-section');
    const videos = block.querySelectorAll('.scroll-video');
    const videoSections = block.querySelectorAll('.video-section');
    
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

    // Make text sections clickable
    textSections.forEach((textSection, index) => {
        // Add cursor pointer style
        textSection.style.cursor = 'pointer';
        
        // Add click event listener
        textSection.addEventListener('click', () => {
            // Remove active class from all text sections
            textSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked section
            textSection.classList.add('active');
            
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
                    // Play video with error handling
                    video.play().catch(error => {
                        console.warn('Video autoplay failed:', error);
                    });
                }
            }
        });
    });

    // Initialize - show first video and activate first text section
    if (videoSections.length > 0 && textSections.length > 0) {
        // Hide all videos first
        videoSections.forEach(videoSection => {
            videoSection.style.display = 'none';
        });
        
        // Show first video
        videoSections[0].style.display = 'block';
        const firstVideo = videoSections[0].querySelector('.scroll-video');
        if (firstVideo && firstVideo.src) {
            firstVideo.play().catch(error => {
                console.warn('Initial video autoplay failed:', error);
            });
        }
        
        // Activate first text section
        textSections[0].classList.add('active');
    }
}

/**
 * Mobile version - Canvas frame sequence animation
 */
function initializeMobileCanvasAnimation(block) {
    const canvas = block.querySelector('#mobileSequence');
    const mobileTextTitle = block.querySelector('#mobileTextTitle');
    const mobileTextDescription = block.querySelector('#mobileTextDescription');
    
    if (!canvas || !mobileTextTitle || !mobileTextDescription) {
        console.warn('Mobile canvas elements not found in scroll video block');
        return;
    }
    
    const context = canvas.getContext('2d');
    
    // Configuration
    const frameCount = 65; // 01_00027.webp to 01_00091.webp
    const images = [];
    const blockPath = block.dataset.blockPath || '/wp-content/themes/somira/blocks/scroll-video-sections/';
    const currentFrame = index => `${blockPath}frames/01_0${(index + 27).toString().padStart(4, '0')}.webp`;
    
    console.log('Block path:', blockPath);
    console.log('Sample frame path:', currentFrame(0));
    
    // Touch settings
    const TOUCH_CONFIG = {
        sensitivity: 0.1,   // Touch sensitivity (smaller = faster frame changes)
        resistance: 0.65,   // Scroll resistance factor (0.5 = heavy, 0.9 = light)
        momentum: 0.98,     // Momentum damping (0.9 = quick stop, 0.98 = long coast)
        minVelocity: 0.2    // Minimum velocity threshold to stop momentum
    };
    
    // Scroll snap configuration
    const SNAP_CONFIG = {
        enabled: true,
        threshold: 2, // How close to snap point to trigger snap
        animationDuration: 0.8, // Snap animation duration in seconds
        points: [
            { 
                name: "Massage", 
                frameNumber: 32, // 01_00032.webp (frame 32-27 = index 5)
                frameIndex: 5,   // Array index for frame 32
                textIndex: 0 
            },
            { 
                name: "Soothing Warmth", 
                frameNumber: 52, // Middle of 33-72 range
                frameIndex: 25,  // Array index for frame 52
                textIndex: 1 
            },
            { 
                name: "Deep Technology", 
                frameNumber: 82, // After warmth section
                frameIndex: 55,  // Array index for frame 82
                textIndex: 2 
            },
            { 
                name: "Smart Controls", 
                frameNumber: 91, // Final frame (01_00091.webp)
                frameIndex: 64,  // Array index for last frame
                textIndex: 3 
            }
        ]
    };
    
    // Text content
    const textContent = [
        {
            title: "Massage",
            description: "Enjoy relaxing massage with auto-rotation, enhanced by DeepRelief™ technology for targeted relief."
        },
        {
            title: "Soothing Warmth", 
            description: "The built-in heat works in harmony with the massage to ease tension and boost circulation. It helps muscles relax faster, making each session feel more restorative and calming."
        },
        {
            title: "Deep Technology",
            description: "Advanced massage nodes work deep into tight muscles, melting away tension where it hurts most. Designed to deliver real, lasting relief—not just surface-level comfort."
        },
        {
            title: "Smart Controls",
            description: "Intuitive controls let you customize your experience with precision. Choose your intensity, adjust the heat, and find your perfect rhythm for ultimate relaxation."
        }
    ];
    
    // Animation object
    const obj = { frame: 0 };
    let currentTextIndex = 0;
    
    // Scroll snap variables
    let isSnapping = false;
    let snapAnimation = null;
    
    // Touch tracking variables
    let touchStartY = 0;
    let currentFrameIndex = 0;
    let velocity = 0;
    let isCoasting = false;
    let momentumAnimation = null;
    
    // Initialize current frame index from obj.frame
    currentFrameIndex = obj.frame;
    
    // Scroll snap functions
    function findNearestSnapPoint(currentFrame) {
        if (!SNAP_CONFIG.enabled) return null;
        
        let nearestPoint = null;
        let minDistance = Infinity;
        
        SNAP_CONFIG.points.forEach(point => {
            const distance = Math.abs(currentFrame - point.frameIndex);
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = point;
            }
        });
        
        return minDistance <= SNAP_CONFIG.threshold ? nearestPoint : null;
    }
    
    function snapToPoint(targetPoint) {
        if (isSnapping || !targetPoint) return;
        
        isSnapping = true;
        console.log(`Snapping to ${targetPoint.name} (frame ${targetPoint.frameIndex})`);
        
        // Cancel any existing momentum
        if (momentumAnimation) {
            cancelAnimationFrame(momentumAnimation);
            momentumAnimation = null;
        }
        isCoasting = false;
        
        // Animate to snap point using GSAP
        if (typeof gsap !== 'undefined') {
            gsap.to(obj, {
                frame: targetPoint.frameIndex,
                duration: SNAP_CONFIG.animationDuration,
                ease: "power2.out",
                onUpdate: () => {
                    currentFrameIndex = obj.frame;
                    render();
                },
                onComplete: () => {
                    isSnapping = false;
                    console.log(`Snapped to ${targetPoint.name}`);
                }
            });
        }
    }
    
    function checkAndSnap() {
        if (isSnapping) return;
        
        const nearestPoint = findNearestSnapPoint(currentFrameIndex);
        if (nearestPoint) {
            snapToPoint(nearestPoint);
        }
    }
    
    // Preload images
    function preloadImages() {
        let imagesProcessed = 0;
        let imagesLoaded = 0;
        let imagesFailed = 0;
        
        console.log(`Starting to load ${frameCount} frames from: ${blockPath}frames/`);
        
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            const framePath = currentFrame(i);
            
            img.onload = () => {
                imagesProcessed++;
                imagesLoaded++;
                console.log(`✅ Loaded frame ${i}: ${framePath} (${img.naturalWidth}x${img.naturalHeight})`);
                
                if (imagesProcessed === frameCount) {
                    console.log(`🎉 All images processed: ${imagesLoaded} loaded, ${imagesFailed} failed`);
                    allImagesLoaded();
                }
            };
            
            img.onerror = () => {
                imagesProcessed++;
                imagesFailed++;
                console.error(`❌ Failed to load frame ${i}: ${framePath}`);
                
                // Set to null so we know it failed
                images[i] = null;
                
                if (imagesProcessed === frameCount) {
                    console.log(`🎉 All images processed: ${imagesLoaded} loaded, ${imagesFailed} failed`);
                    allImagesLoaded();
                }
            };
            
            img.src = framePath;
            images[i] = img;
            
            // Log first few frame paths for debugging
            if (i < 3) {
                console.log(`Frame ${i} path: ${framePath}`);
            }
        }
    }
    
    // All images processed (loaded or failed)
    function allImagesLoaded() {
        const validImages = images.filter(img => img && img.complete && img.naturalWidth > 0).length;
        const failedImages = images.filter(img => img === null).length;
        
        console.log(`All images processed: ${validImages} loaded, ${failedImages} failed`);
        render();
    }
    
    // Render function with proper bounds checking
    function render() {
        let frameIndex = Math.round(obj.frame);
        
        // Ensure we stay within bounds and always show a valid frame
        frameIndex = Math.max(0, Math.min(frameCount - 1, frameIndex));
        
        // Helper function to check if image is valid for drawing
        function isImageValid(img) {
            return img && 
                   img.complete && 
                   img.naturalWidth > 0 && 
                   img.naturalHeight > 0 &&
                   !img.src.includes('undefined');
        }
        
        // If the exact frame isn't available, find the nearest available frame
        let imageToShow = images[frameIndex];
        if (!isImageValid(imageToShow)) {
            console.warn(`Frame ${frameIndex} not valid, looking for fallback`);
            // Look for the nearest available frame (backwards first, then forwards)
            for (let i = 1; i < frameCount; i++) {
                if (frameIndex - i >= 0 && isImageValid(images[frameIndex - i])) {
                    imageToShow = images[frameIndex - i];
                    console.log(`Using fallback frame: ${frameIndex - i}`);
                    break;
                }
                if (frameIndex + i < frameCount && isImageValid(images[frameIndex + i])) {
                    imageToShow = images[frameIndex + i];
                    console.log(`Using fallback frame: ${frameIndex + i}`);
                    break;
                }
            }
        }
        
        if (isImageValid(imageToShow)) {
            try {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(imageToShow, 0, 0, canvas.width, canvas.height);
            } catch (error) {
                console.error(`Error drawing image for frame ${frameIndex}:`, error);
            }
        } else {
            console.error(`No valid frame to show for index ${frameIndex}`);
        }
        
        // Update text based on current frame
        updateText();
    }
    
    // Update text based on progress
    function updateText() {
        const progress = obj.frame / (frameCount - 1);
        const textIndex = Math.floor(progress * textContent.length);
        
        if (textIndex !== currentTextIndex && textContent[textIndex]) {
            currentTextIndex = textIndex;
            
            if (typeof gsap !== 'undefined') {
                gsap.to([mobileTextTitle, mobileTextDescription], {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => {
                        mobileTextTitle.textContent = textContent[textIndex].title;
                        mobileTextDescription.textContent = textContent[textIndex].description;
                        gsap.to([mobileTextTitle, mobileTextDescription], { opacity: 1, duration: 0.2 });
                    }
                });
            } else {
                mobileTextTitle.textContent = textContent[textIndex].title;
                mobileTextDescription.textContent = textContent[textIndex].description;
            }
        }
    }
    
    // Setup canvas
    function setupCanvas() {
        canvas.width = 450;
        canvas.height = 800;
        canvas.style.width = "450px";
        canvas.style.height = "800px";
        
        // Mobile optimizations
        context.imageSmoothingEnabled = false;
    }
    
    // Touch event handlers
    canvas.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
        // Sync with current frame state
        currentFrameIndex = obj.frame;
        
        // Stop any momentum animation
        if (momentumAnimation) {
            cancelAnimationFrame(momentumAnimation);
            momentumAnimation = null;
        }
        isCoasting = false;
        velocity = 0;
        
        console.log('Touch start - current frame:', currentFrameIndex);
    }, { passive: true });
    
    canvas.addEventListener("touchmove", (e) => {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY; // positive if swipe up
        touchStartY = touchY;
    
        // Apply resistance and calculate velocity
        const rawDelta = deltaY * TOUCH_CONFIG.sensitivity;
        const resistedDelta = rawDelta * TOUCH_CONFIG.resistance;
        
        // Update velocity for momentum
        velocity = resistedDelta;
        
        currentFrameIndex += resistedDelta;
        currentFrameIndex = Math.max(0, Math.min(frameCount - 1, currentFrameIndex));
    
        // Update obj.frame to sync with GSAP
        obj.frame = currentFrameIndex;
        
        console.log(`Touch move - frame: ${currentFrameIndex.toFixed(1)}, velocity: ${velocity.toFixed(2)}`);
        
        // Show completion message when reaching last frame
        if (currentFrameIndex >= frameCount - 1) {
            console.log('Reached last frame - animation complete!');
        }
        
        render();
    }, { passive: true });
    
    canvas.addEventListener("touchend", () => {
        console.log('Touch end - final frame:', currentFrameIndex, 'velocity:', velocity.toFixed(2));
        
        // Check for snap first, then momentum
        const nearestPoint = findNearestSnapPoint(currentFrameIndex);
        
        if (nearestPoint) {
            // Snap to nearest point
            snapToPoint(nearestPoint);
        } else if (Math.abs(velocity) > TOUCH_CONFIG.minVelocity) {
            // Start momentum animation if velocity is significant and no snap point nearby
            startMomentumAnimation();
        }
    }, { passive: true });
    
    // Momentum animation system
    function startMomentumAnimation() {
        if (isCoasting) return; // Already coasting
        
        isCoasting = true;
        console.log('Starting momentum with velocity:', velocity.toFixed(2));
        
        function animate() {
            if (Math.abs(velocity) < TOUCH_CONFIG.minVelocity) {
                // Stop momentum and check for snap
                isCoasting = false;
                console.log('Momentum stopped at frame:', currentFrameIndex.toFixed(1));
                
                // Check if we should snap to a nearby point
                setTimeout(() => checkAndSnap(), 100);
                return;
            }
            
            // Apply momentum with damping
            currentFrameIndex += velocity;
            currentFrameIndex = Math.max(0, Math.min(frameCount - 1, currentFrameIndex));
            
            // Reduce velocity (damping)
            velocity *= TOUCH_CONFIG.momentum;
            
            // Update frame
            obj.frame = currentFrameIndex;
            render();
            
            // Continue animation
            momentumAnimation = requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // Initialize mobile canvas animation
    function init() {
        setupCanvas();
        preloadImages();
    }
    
    // Handle resize
    window.addEventListener("resize", () => {
        setupCanvas();
        render();
    });
    
    // Start the mobile animation
    init();
}