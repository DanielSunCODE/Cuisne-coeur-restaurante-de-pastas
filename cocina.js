const titles = document.querySelectorAll('.title'),
      fadeInElements = document.querySelectorAll('.fade-in'),
      heroTitle = document.querySelector('.hero__title'),
      heroBottomContent = document.querySelector('.hero-bottom-content'),
      navBars = document.querySelector('.nav-bars'),
      navLinks = document.querySelector('.nav-links'),
      navLink = document.querySelectorAll('.nav__link'),
      upBtn = document.querySelector('.up-btn'),
      loader = document.querySelector('.loader');

if(window.innerWidth > 760){
    var options = {
        root: null,
        threshold: .5,
        rootMargin: '-200px 0px 0px 0px',
    };
}else if (window.innerWidth < 760){
    var options = {
        root: null,
        threshold: .2,
        rootMargin: '-200px 0px 0px 0px',
    };
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting === true){
            entry.target.classList.add('observed');
            observer.unobserve(entry.target);
        }else if(entry.isIntersecting === false){
            entry.target.classList.remove('observed');
        }
    });
}, options);

window.addEventListener('load', ()=>{
    loader.classList.add('disappear');

    observer.observe(heroTitle);

    observer.observe(heroBottomContent);
   
    titles.forEach(title =>{
        observer.observe(title);
    });

    fadeInElements.forEach(fadeInElement =>{
        observer.observe(fadeInElement);
    });

    if(window.innerWidth < 760){
        navBars.addEventListener('click', ()=>{
            navLinks.classList.toggle('show');
        })
    
        navLink.forEach(link =>{
            link.addEventListener('click', ()=>{
                navLinks.classList.toggle('show');
            })
        })
    }
})

window.onscroll =()=>{
    if(window.scrollY > 160){
        upBtn.style = 'opacity: 1;';
    }else{
        upBtn.style = 'opacity: 0;';
    }
}