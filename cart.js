document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from local storage
    const cartItemsList = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count'); // The element for showing cart count

    // Update Cart UI
    function updateCartUI() {
        cartItemsList.innerHTML = '';  // Clear previous items
        cart.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - Rs ${item.price}`;
            cartItemsList.appendChild(listItem);
        });
        updateCartCount();  // Update cart count on the notification
    }

    // Update the cart count notification
    function updateCartCount() {
        cartCountElement.textContent = `(${cart.length})`;  // Show the number of items in the cart
    }

    function clearCart() {
        localStorage.removeItem("cart"); // Remove items from localStorage
        cart.length = 0;  // Clear the cart array
        updateCartUI();  // Update the UI
    }
    
    // Event listeners
    document.getElementById("checkout").addEventListener("click", function() {
        alert("Proceeding to checkout...");
        // Add your checkout logic here
    });
    
    // Bind the clear cart button event listener
    document.getElementById("clear-cart").addEventListener("click", clearCart);
    
    // Call updateCartUI to display items and update count on page load
    updateCartUI();
});
