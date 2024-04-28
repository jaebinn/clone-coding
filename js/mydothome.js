document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.querySelector('.main_image');
    const secondaryImages = document.querySelectorAll('.intro_imgs img');
    const ide = document.querySelector('.first .ide_title');
    const btn1 = document.querySelector('.intro_imgs button:first-child');
    const btn2 = document.querySelector('.intro_imgs button:last-child');
    const card = document.querySelector('.card');

    mainImage.addEventListener('click', function () {
        btn1.classList.toggle('show');
        btn2.classList.toggle('show');
        ide.classList.toggle('show');
        card.classList.toggle('show');
        secondaryImages.forEach(image => {
            image.classList.toggle('show');
        });
    });
    
});