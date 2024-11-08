function toggleMenu() {
    document.getElementById("header").classList.toggle("active");
}
// Open modal function
function openModal(title, mediaSrc, description) {
    // Set modal title
    document.getElementById("modalTitle").textContent = title;

    // Set modal description
    document.getElementById("modalDescription").textContent = description;

    // Hide both image and video initially
    document.getElementById("modalImage").style.display = 'none';
    document.getElementById("modalVideo").style.display = 'none';

    // Check if media is image or video
    if (mediaSrc.endsWith('.mp4')) {
        // Display video
        document.getElementById("modalVideo").style.display = 'block';
        document.getElementById("modalVideoSource").src = mediaSrc;
        document.getElementById("modalVideo").load(); // Load the video
    } else if (mediaSrc.endsWith('.jpg') || mediaSrc.endsWith('.png') || mediaSrc.endsWith('.gif')) {
        // Display image
        document.getElementById("modalImage").style.display = 'block';
        document.getElementById("modalImage").src = mediaSrc;
    }

    // Show the modal
    document.getElementById("projectModal").style.display = "block";

    // Add event listener to close modal if clicked outside
    document.getElementById("projectModal").addEventListener('click', function(event) {
        if (event.target === document.getElementById("projectModal")) {
            closeModal();
        }
    });
}

// Close modal function
function closeModal() {
    // Hide the modal
    document.getElementById("projectModal").style.display = "none";
    
    // Pause video when closing the modal (if applicable)
    const videoElement = document.getElementById("modalVideo");
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; // Reset the video to the beginning
    }

    // Remove event listener to prevent multiple listeners from stacking
    document.getElementById("projectModal").removeEventListener('click', function(event) {
        if (event.target === document.getElementById("projectModal")) {
            closeModal();
        }
    });
}
