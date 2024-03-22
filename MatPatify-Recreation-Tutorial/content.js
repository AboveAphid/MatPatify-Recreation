// This script runs ON the website NOT AS the chrome extension


// Fake thumbnails that we will be using. (Check description)
urls = Array(
    "https://raw.githubusercontent.com/AboveAphid/MatPatify-Recreation/main/matpat-thumbnails/1.png",
    "https://raw.githubusercontent.com/AboveAphid/MatPatify-Recreation/main/matpat-thumbnails/2.png",
    "https://raw.githubusercontent.com/AboveAphid/MatPatify-Recreation/main/matpat-thumbnails/3.png",
    "https://raw.githubusercontent.com/AboveAphid/MatPatify-Recreation/main/matpat-thumbnails/4.png",
    "https://raw.githubusercontent.com/AboveAphid/MatPatify-Recreation/main/matpat-thumbnails/5.png",
    "https://raw.githubusercontent.com/AboveAphid/MatPatify-Recreation/main/matpat-thumbnails/6.png",
)

// Function to apply thumbnails as overlay
function applyOverlay(listOfElements) {
    for (let i = 0; i < listOfElements.length; i++) {
        var el = listOfElements[i] // default yt thumbnail element

        var overlayImg = document.createElement("img")
        overlayImg.src = urls[Math.floor(Math.random()*urls.length)] // Pick one of the fake thumbnail overlays

        // Now we add proper styling
        overlayImg.style = `
        position: absolute;
        width: 100%;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        `

        // Add overlay img above already existing thumbnail.
        el.parentElement.insertBefore(overlayImg, el.nextSibling);

        // Filter out already overlayed thumbnails
        // el.setAttribute("overlayedAlready", "1;")

    }
}

// Lets add overlay
function addOverlayToAll() {

    if (window.location.hostname.includes("youtube")) {
        // Retrieve all thumbnails from yt website
        var allThumbnails = document.querySelectorAll("ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element)");
        var allNotificationThumbnails = document.querySelectorAll('img.style-scope.yt-img-shadow[width="86"]');

        // Apply the overlay
        applyOverlay(allThumbnails);
        applyOverlay(allNotificationThumbnails);

        console.log('Applied to all.')
    }
}

addOverlayToAll() // When websites first opened.

window.onscroll = addOverlayToAll // Janky way of updating when new thumbnails load in
