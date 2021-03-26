//script pour changer les images.

window.onload = () => {
    changeBackground = () => {
        const headerSelect  = document.querySelector('header');

        const BackgroundImages = [
            'url("img/chrono1.jpg")', 
            'url("img/chrono2.jpg")', 
            'url("img/dot.jpg")', 
            'url("img/dq3.jpg")', 
            'url("img/dq8.jpg")', 
            'url("img/ff7.jpg")', 
            'url("img/ff15.jpg")', 
            'url("img/mass.jpg")', 
            'url("img/mog.jpeg")', 
            'url("img/moggle.jpg")', 
            'url("img/raidou.jpg")', 
            'url("img/skyrim.jpg")',
            'url("img/sw.jpg")', 
            'url("img/dq4.jpg")', 


 




        ]
        console.log(BackgroundImages.length);

        let bg = BackgroundImages[Math.floor(Math.random()*BackgroundImages.length)];
        console.log(bg);
        headerSelect.style.backgroundImage = bg;
        headerSelect.style.transitionTimingFunction ='ease-in';

    }
    setInterval(changeBackground,5000)
}

