/**
 * Use this file for JavaScript code that you want to run in the front-end 
 * on posts/pages that contain this block.
 */

document.addEventListener('DOMContentLoaded', function() {
	// Initialize all CTA blocks
	const ctaBlocks = document.querySelectorAll('.wp-block-somira-cta');
	
	ctaBlocks.forEach(block => {
		initializeCTA(block);
	});
});

function initializeCTA(block) {
	const ctaLink = block.querySelector('.cta-link');
	const ctaImage = block.querySelector('.cta-image img');
	
	// Add hover effects or animations if needed
	if (ctaLink) {
		ctaLink.addEventListener('mouseenter', () => {
			// Add hover animation class
			ctaLink.classList.add('is-hovered');
		});
		
		ctaLink.addEventListener('mouseleave', () => {
			// Remove hover animation class
			ctaLink.classList.remove('is-hovered');
		});
	}
	
	// Add image loading effects if needed
	if (ctaImage) {
		ctaImage.addEventListener('load', () => {
			ctaImage.classList.add('is-loaded');
		});
		
		// Add lazy loading observer if needed
		if ('IntersectionObserver' in window) {
			const imageObserver = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			});
			
			imageObserver.observe(ctaImage);
		}
	}
}