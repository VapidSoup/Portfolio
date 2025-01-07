(function () {
    let photos = [
        "/images/011A8071.jpg",
        "/images/74491301918__F8B6BD83-F90F-4049-AD6E-4EB4712A9039.jpeg",
        "/images/IMG_2070.jpeg",
        "/images/IMG_2146.jpeg"
    ];
    let currentIndex = 0;
    let intervalId;
    let isPaused = false;
    let pauseTimeoutId; // To store the timeout ID for restarting

    const RESTART_DELAY = 5000; // Time in ms before restarting the slideshow after pausing
    const SLIDE_INTERVAL = 3000; // Time in ms for each slide

    function updateSlideshow(containerSelector, pickerId) {
        const container = document.querySelector(containerSelector);
        const picker = document.getElementById(pickerId);

        if (!container || !picker) return;

        container.style.backgroundImage = `url(${photos[currentIndex]})`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";

        picker.innerHTML = "";
        photos.forEach((photo, index) => {
            const button = document.createElement("button");
            button.className = "photoPickerButtons";
            button.onclick = () => {
                pauseSlideshow();
                currentIndex = index;
                updateSlideshow(containerSelector, pickerId);
                restartSlideshow(containerSelector, pickerId);
            };
            picker.appendChild(button);
        });
    }

    function startSlideshow(containerSelector, pickerId) {
        clearInterval(intervalId); // Ensure no duplicate intervals
        intervalId = setInterval(() => {
            if (!isPaused) {
                currentIndex = (currentIndex + 1) % photos.length;
                updateSlideshow(containerSelector, pickerId);
            }
        }, SLIDE_INTERVAL);
    }

    function pauseSlideshow() {
        isPaused = true;
        clearInterval(intervalId); // Stop the interval to prevent updates
        clearTimeout(pauseTimeoutId); // Clear any pending timeout
    }

    function restartSlideshow(containerSelector, pickerId) {
        pauseTimeoutId = setTimeout(() => {
            isPaused = false; // Resume the slideshow
            startSlideshow(containerSelector, pickerId);
        }, RESTART_DELAY);
    }

    window.initSlideshow = (containerSelector, pickerId) => {
        updateSlideshow(containerSelector, pickerId);
        startSlideshow(containerSelector, pickerId);
    };
})();
