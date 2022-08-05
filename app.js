function handler(event) {

    // console.log(event);
    // console.log("offsetX: ", event.offsetX);
    // console.log("clientWidth: ", event.target.clientWidth);

    let clickX = event.offsetX;
    let imageCurrentRenderWidth = event.target.clientWidth;
    let clickXPercentage = Math.floor((clickX * 100) / imageCurrentRenderWidth);

    console.log("clickXPercentage: ", clickXPercentage, "%");

    let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

    let currentImageUrl = document.querySelector("#slider").src;
    currentImageUrl = currentImageUrl.split("/img/")[1];

    if (clickXPercentage > 25) {

        let nextImageIndex = (images.indexOf(currentImageUrl) + 1);
        console.log(currentImageUrl);
        console.log(nextImageIndex);

        if (nextImageIndex > images.length - 1) {
            nextImageIndex = 0;
        }
        document.querySelector("#slider").src = `./img/${images[nextImageIndex]}`

    } else {

        let nextImageIndex = (images.indexOf(currentImageUrl) - 1);
        console.log(currentImageUrl);
        console.log(nextImageIndex);

        if (nextImageIndex < 0) {
            nextImageIndex = images.length - 1;
        }
        document.querySelector("#slider").src = `./img/${images[nextImageIndex]}`
    }
}