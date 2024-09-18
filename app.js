let chooseImage = document.getElementById('img-choose');
let imgArray = Array.from(chooseImage.querySelectorAll('img'));
let imageZoom2 = document.getElementById('imageZoom');

console.log(chooseImage);
console.log(imgArray);

imgArray.forEach(img => {
    img.addEventListener('click', (event) => {
        // Log the clicked image's src
        console.log(img.src);
        
        // Update the --bg-url custom property with the clicked image's src
        imageZoom2.style.setProperty('--bg-url', `url(${img.src})`);
        console.log(imageZoom2.style.getPropertyValue('--bg-url'));
        
    });
});
