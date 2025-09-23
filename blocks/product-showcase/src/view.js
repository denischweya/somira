/**
 * Product Showcase block frontend functionality
 */

document.addEventListener('DOMContentLoaded', function() {
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