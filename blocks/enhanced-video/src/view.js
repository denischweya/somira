/**
 * Enhanced Video Block Frontend Script
 * Handles modal functionality for video playback
 */

console.log('Enhanced Video Script: Loading at ' + new Date().toISOString());

// Global debug flag
window.enhancedVideoDebug = true;

// Simple, robust initialization
function initEnhancedVideoBlocks() {
    console.log('Enhanced Video Script: Initializing blocks at ' + new Date().toISOString());
    console.log('Document ready state: ' + document.readyState);
    
    // Try multiple selectors to find the blocks
    let blocks = document.querySelectorAll('.wp-block-somira-enhanced-video');
    console.log('Enhanced Video Script: Found ' + blocks.length + ' blocks with .wp-block-somira-enhanced-video');
    
    if (blocks.length === 0) {
        // Try alternative selectors
        blocks = document.querySelectorAll('[data-type="somira/enhanced-video"]');
        console.log('Found ' + blocks.length + ' blocks with data-type="somira/enhanced-video"');
    }
    
    if (blocks.length === 0) {
        blocks = document.querySelectorAll('[class*="enhanced-video"]');
        console.log('Found ' + blocks.length + ' elements with enhanced-video in class name');
    }
    
    if (blocks.length === 0) {
        // Debug: Show all possible video-related elements
        console.warn('Enhanced Video Script: No blocks found. Debugging...');
        const allVideoElements = document.querySelectorAll('video, [class*="video"], [class*="enhanced"]');
        console.log('All video-related elements found:', allVideoElements.length);
        allVideoElements.forEach((el, i) => {
            console.log(`Element ${i+1}:`, el.className, el.outerHTML.substring(0, 100));
        });
        return;
    }
    
    blocks.forEach(function(block, index) {
        console.log('Enhanced Video Script: Processing block ' + (index + 1));
        console.log('Block HTML:', block.outerHTML.substring(0, 200) + '...');
        
        const playButton = block.querySelector('.enhanced-video-play-button');
        const modal = block.querySelector('.enhanced-video-modal');
        const closeButton = block.querySelector('.enhanced-video-modal-close');
        const modalBackdrop = block.querySelector('.enhanced-video-modal-backdrop');
        const video = block.querySelector('.enhanced-video-player');
        
        console.log('Enhanced Video Elements Found:', {
            playButton: !!playButton,
            modal: !!modal,
            closeButton: !!closeButton,
            modalBackdrop: !!modalBackdrop,
            video: !!video
        });
        
        if (playButton) {
            console.log('Play button classes:', playButton.className);
            console.log('Play button HTML:', playButton.outerHTML);
        }
        
        if (modal) {
            console.log('Modal classes:', modal.className);
            console.log('Modal display style:', window.getComputedStyle(modal).display);
        }
        
        if (!playButton || !modal) {
            console.warn('Enhanced Video Script: Essential elements missing for block ' + (index + 1));
            if (!playButton) console.warn('Missing play button');
            if (!modal) console.warn('Missing modal');
            return;
        }
        
        // Set initial modal state
        modal.style.display = 'none';
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.zIndex = '999999';
        modal.setAttribute('aria-hidden', 'true');
        
        console.log('Modal initial styles set for block ' + (index + 1));
        
        // Open modal function
        function openModal() {
            console.log('Enhanced Video Script: *** OPENING MODAL *** for block ' + (index + 1));
            modal.style.display = 'flex';
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            modal.setAttribute('aria-hidden', 'false');
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            
            console.log('Modal styles after opening:', {
                display: modal.style.display,
                opacity: modal.style.opacity,
                visibility: modal.style.visibility,
                zIndex: modal.style.zIndex
            });
            
            // Auto-play the video when modal opens
            if (video) {
                setTimeout(function() {
                    video.play().then(function() {
                        console.log('Video auto-play started successfully');
                    }).catch(function(error) {
                        console.log('Video auto-play prevented by browser:', error);
                        // Auto-play was prevented, user will need to click play manually
                    });
                }, 200); // Small delay to ensure modal is fully visible
            }
            
            // Focus close button if available
            if (closeButton) {
                setTimeout(function() {
                    closeButton.focus();
                    console.log('Focus set to close button');
                }, 300);
            }
        }
        
        // Close modal function
        function closeModal() {
            console.log('Enhanced Video Script: *** CLOSING MODAL *** for block ' + (index + 1));
            modal.style.display = 'none';
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modal.setAttribute('aria-hidden', 'true');
            modal.classList.remove('is-open');
            document.body.style.overflow = '';
            
            // Pause video if playing
            if (video && !video.paused) {
                video.pause();
                video.currentTime = 0;
                console.log('Video paused and reset');
            }
            
            // Return focus to play button
            setTimeout(function() {
                playButton.focus();
                console.log('Focus returned to play button');
            }, 100);
        }
        
        // Add event listeners with extensive logging
        console.log('Adding click event listener to play button for block ' + (index + 1));
        playButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('*** PLAY BUTTON CLICKED *** for block ' + (index + 1));
            console.log('Event object:', e);
            openModal();
        }, true); // Use capture phase
        
        // Also add event listener without capture as backup
        playButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('*** PLAY BUTTON CLICKED (BUBBLE) *** for block ' + (index + 1));
            openModal();
        }, false);
        
        // Test button immediately
        console.log('Testing play button click handler...');
        playButton.onclick = function(e) {
            console.log('*** ONCLICK HANDLER TRIGGERED *** for block ' + (index + 1));
            e.preventDefault();
            openModal();
        };
        
        if (closeButton) {
            closeButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Enhanced Video Script: Close button clicked for block ' + (index + 1));
                closeModal();
            });
        }
        
        // Close on backdrop click
        if (modalBackdrop) {
            modalBackdrop.addEventListener('click', function(e) {
                if (e.target === modalBackdrop) {
                    console.log('Enhanced Video Script: Backdrop clicked for block ' + (index + 1));
                    closeModal();
                }
            });
        }
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                console.log('Enhanced Video Script: Escape pressed for block ' + (index + 1));
                closeModal();
            }
        });
        
        // Add manual test function to window
        window['testModal' + (index + 1)] = function() {
            console.log('Manual test: Opening modal ' + (index + 1));
            openModal();
        };
        
        console.log('Enhanced Video Script: Block ' + (index + 1) + ' initialized successfully');
        console.log('Test modal with: testModal' + (index + 1) + '()');
    });
    
    console.log('Enhanced Video Script: All blocks processed');
    window.enhancedVideoInitialized = true;
}

// Multiple initialization methods to ensure it works
console.log('Setting up initialization handlers...');

if (document.readyState === 'loading') {
    console.log('Document still loading, adding DOMContentLoaded listener');
    document.addEventListener('DOMContentLoaded', initEnhancedVideoBlocks);
} else {
    console.log('Document already loaded, initializing immediately');
    initEnhancedVideoBlocks();
}

// Backup initialization
window.addEventListener('load', function() {
    console.log('Window load event fired, initializing with delay');
    setTimeout(initEnhancedVideoBlocks, 500);
});

// Even more backup initialization
setTimeout(function() {
    if (!window.enhancedVideoInitialized) {
        console.log('Fallback initialization triggered');
        initEnhancedVideoBlocks();
    }
}, 2000);

// Global initialization function for manual calling
window.initEnhancedVideo = initEnhancedVideoBlocks;

console.log('Enhanced Video Script: Setup complete at ' + new Date().toISOString());
console.log('Manual init command: window.initEnhancedVideo()');