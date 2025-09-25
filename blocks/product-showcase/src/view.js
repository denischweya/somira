/**
 * Product Showcase block frontend functionality
 */

document.addEventListener('DOMContentLoaded', function() {
	// Custom Select functionality
	const customSelects = document.querySelectorAll('.wp-block-somira-product-showcase .custom-select');
	
	customSelects.forEach(function(select) {
		const trigger = select.querySelector('.custom-select-trigger');
		const options = select.querySelector('.custom-select-options');
		const hiddenSelect = select.parentNode.querySelector('.plug-select-hidden');
		const selectedValue = select.querySelector('.selected-value');
		const optionItems = select.querySelectorAll('.custom-select-option');
		
		// Toggle dropdown
		trigger.addEventListener('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			
			// Close other dropdowns
			customSelects.forEach(function(otherSelect) {
				if (otherSelect !== select) {
					otherSelect.classList.remove('open');
				}
			});
			
			select.classList.toggle('open');
		});
		
		// Handle option selection
		optionItems.forEach(function(option) {
			option.addEventListener('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				
				const value = this.getAttribute('data-value');
				const text = this.textContent;
				
				// Update selected value
				selectedValue.textContent = text;
				
				// Update hidden select
				if (hiddenSelect) {
					hiddenSelect.value = value;
				}
				
				// Update active state
				optionItems.forEach(item => item.classList.remove('selected'));
				this.classList.add('selected');
				
				// Close dropdown
				select.classList.remove('open');
			});
		});
		
		// Set initial selected state
		const initialValue = hiddenSelect ? hiddenSelect.value : 'United States';
		optionItems.forEach(function(option) {
			if (option.getAttribute('data-value') === initialValue) {
				option.classList.add('selected');
			}
		});
	});
	
	// Close dropdowns when clicking outside
	document.addEventListener('click', function(e) {
		if (!e.target.closest('.custom-select')) {
			customSelects.forEach(function(select) {
				select.classList.remove('open');
			});
		}
	});
	
	const productForms = document.querySelectorAll('.wp-block-somira-product-showcase .product-form');
	
	productForms.forEach(function(form) {
		const quantityInput = form.querySelector('.quantity-input');
		const increaseBtn = form.querySelector('.quantity-increase');
		const decreaseBtn = form.querySelector('.quantity-decrease');
		const checkoutBtns = form.querySelectorAll('.checkout-btn, .apple-pay-btn');
		
		// Quantity controls
		if (increaseBtn) {
			increaseBtn.addEventListener('click', function() {
				let currentValue = parseInt(quantityInput.value) || 1;
				quantityInput.value = currentValue + 1;
			});
		}
		
		if (decreaseBtn) {
			decreaseBtn.addEventListener('click', function() {
				let currentValue = parseInt(quantityInput.value) || 1;
				if (currentValue > 1) {
					quantityInput.value = currentValue - 1;
				}
			});
		}
		
		// Form submission
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			
			const stripeUrl = form.getAttribute('data-stripe-url');
			if (!stripeUrl) {
				alert('Checkout URL not configured. Please contact support.');
				return;
			}
			
			const formData = new FormData(form);
			const plugType = formData.get('plugType') || 'United States';
			const quantity = formData.get('quantity') || '1';
			const checkoutType = formData.get('checkout_type') || 'regular';
			
			// Build URL with query parameters
			const url = new URL(stripeUrl);
			url.searchParams.append('plug', plugType);
			url.searchParams.append('qty', quantity);
			url.searchParams.append('type', checkoutType);
			
			// Redirect to Stripe checkout
			window.location.href = url.toString();
		});
		
		// Individual button click handlers for different checkout types
		checkoutBtns.forEach(function(btn) {
			btn.addEventListener('click', function(e) {
				// Let the form submission handler take care of everything
				// This just ensures the correct checkout_type is set
			});
		});
	});
	
	// Add loading states to buttons
	const allButtons = document.querySelectorAll('.wp-block-somira-product-showcase .checkout-btn, .wp-block-somira-product-showcase .apple-pay-btn');
	allButtons.forEach(function(button) {
		button.addEventListener('click', function() {
			const originalText = this.textContent;
			this.textContent = 'Loading...';
			this.disabled = true;
			
			// Re-enable after 5 seconds as fallback
			setTimeout(() => {
				this.textContent = originalText;
				this.disabled = false;
			}, 5000);
		});
	});
});