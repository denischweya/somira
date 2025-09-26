/**
 * Frontend JavaScript for the FAQ Accordion block.
 * Handles accordion functionality, accessibility, and animations.
 */

document.addEventListener('DOMContentLoaded', function() {
	const faqAccordions = document.querySelectorAll('.wp-block-somira-faq-accordion .faq-accordion');
	
	faqAccordions.forEach(function(accordion) {
		const buttons = accordion.querySelectorAll('[data-faq-button]');
		
		buttons.forEach(function(button, index) {
			const content = button.nextElementSibling;
			const faqItem = button.closest('.faq-item');
			const toggleIcon = button.querySelector('.faq-toggle-icon');
			const iconType = toggleIcon.getAttribute('data-icon-type');
			
			// Set initial ARIA attributes - first item should be open
			const isFirstItem = index === 0;
			button.setAttribute('aria-expanded', isFirstItem ? 'true' : 'false');
			
			if (isFirstItem) {
				content.removeAttribute('hidden');
				content.setAttribute('aria-hidden', 'false');
				faqItem.classList.add('active');
			} else {
				content.setAttribute('hidden', '');
				content.setAttribute('aria-hidden', 'true');
			}
			
			// Set initial icon state
			updateToggleIcon(button, isFirstItem, iconType);
			
			// Handle click events
			button.addEventListener('click', function(e) {
				e.preventDefault();
				
				const isExpanded = button.getAttribute('aria-expanded') === 'true';
				
				// Close all other items in this accordion (accordion behavior)
				buttons.forEach(function(otherButton) {
					if (otherButton !== button) {
						closeAccordionItem(otherButton);
					}
				});
				
				// Toggle current item
				if (isExpanded) {
					closeAccordionItem(button);
				} else {
					openAccordionItem(button);
				}
			});
			
			// Handle keyboard navigation
			button.addEventListener('keydown', function(e) {
				switch(e.key) {
					case ' ':
					case 'Enter':
						e.preventDefault();
						button.click();
						break;
					case 'ArrowDown':
						e.preventDefault();
						focusNextButton(buttons, index);
						break;
					case 'ArrowUp':
						e.preventDefault();
						focusPreviousButton(buttons, index);
						break;
					case 'Home':
						e.preventDefault();
						buttons[0].focus();
						break;
					case 'End':
						e.preventDefault();
						buttons[buttons.length - 1].focus();
						break;
				}
			});
		});
	});
	
	/**
	 * Open an accordion item
	 * @param {Element} button - The button element
	 */
	function openAccordionItem(button) {
		const content = button.nextElementSibling;
		const faqItem = button.closest('.faq-item');
		const toggleIcon = button.querySelector('.faq-toggle-icon');
		const iconType = toggleIcon.getAttribute('data-icon-type');
		
		// Update ARIA attributes
		button.setAttribute('aria-expanded', 'true');
		content.removeAttribute('hidden');
		content.setAttribute('aria-hidden', 'false');
		
		// Add active class for styling
		faqItem.classList.add('active');
		
		// Update toggle icon
		updateToggleIcon(button, true, iconType);
		
		// Smooth height transition
		animateHeight(content, true);
	}
	
	/**
	 * Close an accordion item
	 * @param {Element} button - The button element
	 */
	function closeAccordionItem(button) {
		const content = button.nextElementSibling;
		const faqItem = button.closest('.faq-item');
		const toggleIcon = button.querySelector('.faq-toggle-icon');
		const iconType = toggleIcon.getAttribute('data-icon-type');
		
		// Update ARIA attributes
		button.setAttribute('aria-expanded', 'false');
		content.setAttribute('hidden', '');
		content.setAttribute('aria-hidden', 'true');
		
		// Remove active class
		faqItem.classList.remove('active');
		
		// Update toggle icon
		updateToggleIcon(button, false, iconType);
		
		// Smooth height transition
		animateHeight(content, false);
	}
	
	/**
	 * Update the toggle icon based on state and type
	 * @param {Element} button - The button element
	 * @param {boolean} isExpanded - Whether the item is expanded
	 * @param {string} iconType - The type of icon ('plusminus' or 'arrow')
	 */
	function updateToggleIcon(button, isExpanded, iconType) {
		const toggleIcon = button.querySelector('.faq-toggle-icon');
		
		if (iconType === 'plusminus') {
			const plusMinusIcon = toggleIcon.querySelector('.faq-plus-minus-icon');
			if (plusMinusIcon) {
				plusMinusIcon.textContent = isExpanded ? '–' : '+';
			}
		} else if (iconType === 'arrow') {
			const arrowIcon = toggleIcon.querySelector('.faq-arrow-icon');
			if (arrowIcon) {
				arrowIcon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
			}
		}
	}
	
	/**
	 * Animate height for smooth accordion effect
	 * @param {Element} element - The content element
	 * @param {boolean} expand - Whether to expand or collapse
	 */
	function animateHeight(element, expand) {
		if (expand) {
			element.style.maxHeight = 'none';
			const height = element.scrollHeight + 'px';
			element.style.maxHeight = '0px';
			
			// Force reflow
			element.offsetHeight;
			
			element.style.transition = 'max-height 0.4s ease';
			element.style.maxHeight = height;
			
			// Clean up after animation
			setTimeout(() => {
				element.style.maxHeight = 'none';
				element.style.transition = '';
			}, 400);
		} else {
			element.style.maxHeight = element.scrollHeight + 'px';
			
			// Force reflow
			element.offsetHeight;
			
			element.style.transition = 'max-height 0.4s ease';
			element.style.maxHeight = '0px';
			
			// Clean up after animation
			setTimeout(() => {
				element.style.transition = '';
			}, 400);
		}
	}
	
	/**
	 * Focus the next button in the accordion
	 * @param {NodeList} buttons - All buttons in the accordion
	 * @param {number} currentIndex - Current button index
	 */
	function focusNextButton(buttons, currentIndex) {
		const nextIndex = currentIndex + 1;
		if (nextIndex < buttons.length) {
			buttons[nextIndex].focus();
		} else {
			buttons[0].focus(); // Loop to first
		}
	}
	
	/**
	 * Focus the previous button in the accordion
	 * @param {NodeList} buttons - All buttons in the accordion
	 * @param {number} currentIndex - Current button index
	 */
	function focusPreviousButton(buttons, currentIndex) {
		const prevIndex = currentIndex - 1;
		if (prevIndex >= 0) {
			buttons[prevIndex].focus();
		} else {
			buttons[buttons.length - 1].focus(); // Loop to last
		}
	}
});