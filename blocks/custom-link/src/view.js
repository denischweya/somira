/**
 * Custom Link block frontend functionality
 */

document.addEventListener('DOMContentLoaded', function() {
	const customLinks = document.querySelectorAll('.wp-block-somira-custom-link');
	
	customLinks.forEach(function(linkBlock) {
		const link = linkBlock.querySelector('.custom-link-text');
		
		if (link) {
			link.addEventListener('mouseenter', function() {
				this.style.transform = 'translateX(2px)';
			});
			
			link.addEventListener('mouseleave', function() {
				this.style.transform = 'translateX(0)';
			});
		}
	});
});
