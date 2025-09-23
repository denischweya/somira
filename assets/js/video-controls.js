document.addEventListener('DOMContentLoaded', function() {
    // Find all expert video containers
    const expertVideos = document.querySelectorAll('.expert-video');
    
    expertVideos.forEach(function(container) {
        const video = container.querySelector('video');
        if (!video) return;
        
        // Remove default controls initially
        video.removeAttribute('controls');
        
        // Create custom play button
        const playButton = document.createElement('div');
        playButton.className = 'play-button';
        container.appendChild(playButton);
        
        // Play button click handler
        function handlePlayClick() {
            video.play();
            video.setAttribute('controls', 'true');
            video.classList.add('playing');
            container.classList.add('playing');
        }
        
        // Video click handler (when no controls are visible)
        function handleVideoClick() {
            if (!video.classList.contains('playing')) {
                handlePlayClick();
            }
        }
        
        // Video ended handler
        function handleVideoEnded() {
            video.removeAttribute('controls');
            video.classList.remove('playing');
            container.classList.remove('playing');
            video.currentTime = 0; // Reset to beginning
        }
        
        // Video pause handler
        function handleVideoPause() {
            // Only hide controls if video has ended or was manually paused from beginning
            if (video.currentTime === 0 || video.ended) {
                video.removeAttribute('controls');
                video.classList.remove('playing');
                container.classList.remove('playing');
            }
        }
        
        // Event listeners
        playButton.addEventListener('click', handlePlayClick);
        video.addEventListener('click', handleVideoClick);
        video.addEventListener('ended', handleVideoEnded);
        video.addEventListener('pause', handleVideoPause);
    });
});