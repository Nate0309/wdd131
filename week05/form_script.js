// Product Array
const products = [
    { id: 'laptop', name: '2022 Macbook' },
    { id: 'phone', name: 'iPhone X' },
    { id: 'tablet', name: 'iPad Pro' },
    { id: 'watch', name: 'Apple Watch' },
    { id: 'accessory', name: 'AirPods' },
    { id: 'mouse', name: 'Magic Mouse' }
];

// Populate the Product Name Dropdown
window.onload = function() {
    const productSelect = document.getElementById('product');
    
    // Add options to the select element
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Track the review counter using localStorage
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('review-counter').textContent = `Reviews completed: ${reviewCount}`;
};

// Form submission logic to update the review counter and ensure checkbox validation
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting if no checkboxes are selected
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;

    // Check if at least one checkbox is checked
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    // If no checkboxes are checked, show an alert and prevent the form submission
    if (!isChecked) {
        alert('Please select at least one feature.');
        event.preventDefault(); // Prevent the form from submitting
    } else {
        // Get the current count from localStorage and increment it
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;

        // Store the updated count in localStorage
        localStorage.setItem('reviewCount', reviewCount);

        // Optionally, you can redirect the user to the confirmation page
        window.location.href = 'review.html'; // Redirect to review confirmation page
    }
});