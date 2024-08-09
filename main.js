//console.log('Hello World!');
function scrollToSection(sectionId) {
            var element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Element with id '" + sectionId + "' not found.");
            }
}




//console.log('Hello World!');
let toastShown = false;  // Flag to track if toast has been shown

function showToast(messages) {
    if (!Array.isArray(messages)) {
        messages = [messages];
    }

    let currentIndex = 0;

    function displayNextToast() {
        if (currentIndex >= messages.length) return;

        const message = messages[currentIndex];
        
        // Create toast container
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';  // Position at the bottom
        toast.style.left = '50%';  // Center horizontally
        toast.style.transform = 'translateX(-50%)';  // Adjust for true center
        toast.style.backgroundColor = '#f4f4f4';  // Light background color
        toast.style.color = '#333';  // Darker text color for contrast
        toast.style.padding = '8px 12px';  // Light padding for better balance
        toast.style.borderRadius = '4px';  // Slightly rounded corners
        toast.style.zIndex = '9999';
        toast.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';  // Lighter shadow for a soft look
        toast.style.fontSize = '16px';
        toast.style.opacity = '1';
        toast.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        toast.style.pointerEvents = 'none';  // Prevent interaction with the toast

        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.style.height = '3px';
        progressBar.style.width = '100%';
        progressBar.style.backgroundColor = '#76c7c0';  // Light teal progress bar
        progressBar.style.transition = 'width 3s linear';
        progressBar.style.borderRadius = '0 0 4px 4px';  // Smooth rounding at the bottom corners

        // Append progress bar to toast
        toast.appendChild(progressBar);

        // Append toast to body
        document.body.appendChild(toast);

        // Start the countdown
        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(0)';
            progressBar.style.width = '0%';
        }, 10);

        // Fade out and remove toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => {
                document.body.removeChild(toast);
                currentIndex++;
                displayNextToast();  // Show the next toast
            }, 500);
        }, 3000);
    }

    displayNextToast();
}

// Function to detect scroll end
function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (!toastShown) {
            showToast("আর নেই!");
            toastShown = true; // Set flag to prevent multiple toasts
        }
    } else {
        toastShown = false; // Reset flag when not at the bottom
    }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
