const image = document.getElementById('image');
const imageContainer = document.getElementById('image-container');


imageContainer.addEventListener('mouseenter', () => {
    image.src = "https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/refs/heads/main/assets/images/petthecathappy.png"; 
});


imageContainer.addEventListener('mouseleave', () => {
    image.src = "https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/refs/heads/main/assets/images/petthecatsad.png"; 
});