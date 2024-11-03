// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align the top of the target element with the top of the viewport
            });
            console.log(`Navigating to ${targetId}`);
        } else {
            console.error(`Target element ${targetId} not found.`);
        }
    });
});

// Track clicks on the Discord button and navigate to the Discord link
const discordButton = document.querySelector('.button[href*="discord"]'); // Ensure it's the Discord button

if (discordButton) {
    discordButton.addEventListener('click', (e) => {
        console.log('Join Our Discord button clicked!'); // Tracking code
        e.preventDefault(); // Prevent default link behavior
        const discordLink = discordButton.getAttribute('href');

        // Optional: Confirm navigation if needed
        const userConfirmed = confirm('You are about to leave the site. Do you want to continue?');
        if (userConfirmed) {
            window.location.href = discordLink; // Navigate to Discord link
        }
    });
} else {
    console.warn('Discord button not found.');
}
