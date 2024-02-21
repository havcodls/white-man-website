const btn = document.querySelector('.scroll-btn');

btn.addEventListener('click', () => {

    window.scrollTo({
      top: window.innerHeight,      
      behavior: "smooth"
    })
})