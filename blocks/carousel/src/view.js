/**
 * Use this file for JavaScript code that you want to run in the front-end 
 * on posts/pages that contain this block.
 */

document.addEventListener('DOMContentLoaded', function() {
	// Initialize all carousel blocks
	const carouselBlocks = document.querySelectorAll('.wp-block-somira-carousel');
	
	carouselBlocks.forEach(block => {
		initializeCarousel(block);
	});
});

function initializeCarousel(block) {
	const carouselContainer = block.querySelector('.carousel-container');
	const prevButton = block.querySelector('.carousel-prev');
	const nextButton = block.querySelector('.carousel-next');

	// Initialize videos with play button overlay
	initializeVideoPlayback(block);

	// Initialize Flickity to advance by 1 slide
	const flickity = new window.Flickity(carouselContainer, {
		cellAlign: 'left',
		contain: false,
		wrapAround: true,
		pageDots: false,
		prevNextButtons: false,
		draggable: true,
		freeScroll: false,
		groupCells: 1,
		percentPosition: false
	});

	// Custom navigation controls
	prevButton.addEventListener('click', () => {
		flickity.previous();
	});

	nextButton.addEventListener('click', () => {
		flickity.next();
	});

	// Update navigation button states
	flickity.on('change', function() {
		updateNavigationButtons(flickity, prevButton, nextButton);
	});

	// Initial navigation button state
	updateNavigationButtons(flickity, prevButton, nextButton);
}

function initializeVideoPlayback(block) {
	const videoCards = block.querySelectorAll('.video-card');
	
	videoCards.forEach(card => {
		const videoElement = card.querySelector('.video-element');
		const playButtonOverlay = card.querySelector('.play-button-overlay');
		const videoContainer = card.querySelector('.video-container');
		
		if (videoElement && playButtonOverlay) {
			// Hide default video controls initially
			videoElement.removeAttribute('controls');
			
			// Set up video for thumbnail display (paused with first frame)
			videoElement.addEventListener('loadedmetadata', () => {
				videoElement.currentTime = 0.1; // Show first frame
			});
			
			// Handle play/pause button click
			playButtonOverlay.addEventListener('click', () => {
				if (videoElement.paused) {
					// Play video and show controls
					videoElement.play();
					videoElement.setAttribute('controls', 'true');
					playButtonOverlay.innerHTML = '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="4" height="14" fill="white"/><rect x="10" y="2" width="4" height="14" fill="white"/></svg>';
					playButtonOverlay.classList.add('is-pause');
				} else {
					// Pause video
					videoElement.pause();
					playButtonOverlay.innerHTML = '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 8.13398C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33334 18.0452 0.500001 17.564 0.500001 16.7942L0.500002 1.20577C0.500002 0.435972 1.33333 -0.0451548 2 0.339746L15.5 8.13398Z" fill="white"/></svg>';
					playButtonOverlay.classList.remove('is-pause');
				}
			});
			
			// Handle direct video click to play/pause
			videoElement.addEventListener('click', () => {
				if (videoElement.paused) {
					videoElement.play();
					videoElement.setAttribute('controls', 'true');
					playButtonOverlay.innerHTML = '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="4" height="14" fill="white"/><rect x="10" y="2" width="4" height="14" fill="white"/></svg>';
					playButtonOverlay.classList.add('is-pause');
				} else {
					videoElement.pause();
					playButtonOverlay.innerHTML = '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 8.13398C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33334 18.0452 0.500001 17.564 0.500001 16.7942L0.500002 1.20577C0.500002 0.435972 1.33333 -0.0451548 2 0.339746L15.5 8.13398Z" fill="white"/></svg>';
					playButtonOverlay.classList.remove('is-pause');
				}
			});
			
			// Update button when video is paused (via controls or other means)
			videoElement.addEventListener('pause', () => {
				playButtonOverlay.innerHTML = '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 8.13398C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33334 18.0452 0.500001 17.564 0.500001 16.7942L0.500002 1.20577C0.500002 0.435972 1.33333 -0.0451548 2 0.339746L15.5 8.13398Z" fill="white"/></svg>';
				playButtonOverlay.classList.remove('is-pause');
				// Only hide controls if video ended or was reset
				if (videoElement.currentTime === 0 || videoElement.ended) {
					videoElement.removeAttribute('controls');
				}
			});
			
			// Update button when video is playing (via controls or other means)
			videoElement.addEventListener('play', () => {
				videoElement.setAttribute('controls', 'true');
				playButtonOverlay.innerHTML = '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="4" height="14" fill="white"/><rect x="10" y="2" width="4" height="14" fill="white"/></svg>';
				playButtonOverlay.classList.add('is-pause');
			});
			
			// Reset to play button when video ends
			videoElement.addEventListener('ended', () => {
				videoElement.removeAttribute('controls');
				videoElement.currentTime = 0; // Reset to beginning
				playButtonOverlay.innerHTML = '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 8.13398C16.1667 8.51888 16.1667 9.48113 15.5 9.86603L2 17.6603C1.33334 18.0452 0.500001 17.564 0.500001 16.7942L0.500002 1.20577C0.500002 0.435972 1.33333 -0.0451548 2 0.339746L15.5 8.13398Z" fill="white"/></svg>';
				playButtonOverlay.classList.remove('is-pause');
			});
		}
	});
}

function updateNavigationButtons(flickity, prevButton, nextButton) {
	const slideCount = flickity.slides.length;
	const currentIndex = flickity.selectedIndex;

	// Enable/disable buttons based on current position
	// Since wrapAround is false, buttons should be disabled at ends
	prevButton.disabled = currentIndex === 0;
	nextButton.disabled = currentIndex === slideCount - 1;

	// Optional: Add visual feedback for first/last slides
	if (currentIndex === 0) {
		prevButton.classList.add('first-slide');
	} else {
		prevButton.classList.remove('first-slide');
	}

	if (currentIndex === slideCount - 1) {
		nextButton.classList.add('last-slide');
	} else {
		nextButton.classList.remove('last-slide');
	}
}