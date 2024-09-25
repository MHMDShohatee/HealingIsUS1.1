document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.imgthumb');
    const allImages = document.querySelectorAll('.mainimg img'); // All images in mainimg
    const buyNowBtn = document.getElementById('buyNowBtn');
    const priceDisplay = document.getElementById('priceDisplay');

    // Activate default state
    buyNowBtn.style.opacity = 0.5; // Grey out button
    buyNowBtn.style.pointerEvents = 'none'; // Disable button

    // Set initial dropdown value to "Select One"
    document.getElementById('discitem').value = '';

    // Handle thumbnail clicks
    thumbnails.forEach(image => {
        image.addEventListener('click', function() {
            // Remove 'active' class from all thumbnails
            thumbnails.forEach(img => img.classList.remove('active'));

            // Add 'active' class to the clicked thumbnail
            this.classList.add('active');

            // Hide all images and show the clicked thumbnail's image
            allImages.forEach(img => img.style.display = 'none');
            document.querySelector('.mainimg img').src = this.src; // Set main image src
            document.querySelector('.mainimg img').style.display = 'block'; // Show the main image
        });
    });

    document.getElementById('discitem').addEventListener('change', function() {
        const selectedValue = this.value;
        let newSrc;
        let price;

        // Enable button only when a valid option is selected
        if (selectedValue) {
            buyNowBtn.style.opacity = 1; // Enable button
            buyNowBtn.style.pointerEvents = 'auto'; // Allow click
        } else {
            buyNowBtn.style.opacity = 0.5; // Grey out button
            buyNowBtn.style.pointerEvents = 'none'; // Disable button
        }

        switch (selectedValue) {
            case 'cd1':
                newSrc = '/images/cdimg1.jpg';
                price = '$79.00';
                break;
            case 'cd2':
                newSrc = '/images/cdimg2.jpg';
                price = '$89.00';
                break;
            case 'cd3':
                newSrc = '/images/cdimg3.jpg';
                price = '$59.00';
                break;
            case 'cd4':
                newSrc = '/images/cdimg4.jpg';
                price = '$49.00';
                break;
            case 'cd5':
                newSrc = '/images/cdimg5.jpg';
                price = '$59.00';
                break;
            case 'buyall':
                // Show all images when "BUY ALL" is selected
                allImages.forEach(img => img.style.display = 'block');
                
                // Highlight all thumbnails
                thumbnails.forEach(img => img.classList.add('active'));
                
                // Set price for "Buy All"
                price = '$229.00';
                break;
            default:
                return; // Do nothing if no valid option is selected
        }

        // Update the main image src
        if (selectedValue !== 'buyall') {
            document.querySelector('.mainimg img').src = newSrc;
            
            // Hide all images except the selected one
            allImages.forEach(img => img.style.display = 'none');
            document.querySelector('.mainimg img').style.display = 'block';
        }

        // Update the price display
        priceDisplay.innerHTML = `<b>${price}</b>`;
        
        // Remove 'active' class from all thumbnails and highlight the selected one
        thumbnails.forEach(img => img.classList.remove('active'));
        if (selectedValue !== 'buyall') {
            const selectedThumbnail = Array.from(thumbnails).find(img => img.src.includes(newSrc));
            if (selectedThumbnail) {
                selectedThumbnail.classList.add('active');
            }
        }
    });
});
