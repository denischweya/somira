/**
 * Custom Link block frontend functionality
 */

document.addEventListener('DOMContentLoaded', function() {
	// Add any custom link interactions here if needed
	const customLinks = document.querySelectorAll('.wp-block-somira-custom-link');
	
	customLinks.forEach(function(linkBlock) {
		const link = linkBlock.querySelector('.custom-link');
		
		if (link) {
			// Add hover effects or animations if needed
			link.addEventListener('mouseenter', function() {
				this.style.transform = 'translateX(2px)';
			});
			
			link.addEventListener('mouseleave', function() {
				this.style.transform = 'translateX(0)';
			});
		}
	});
});