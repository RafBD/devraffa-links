const bodyContainer = document.getElementsByTagName('body')[0];
const main = document.createElement('main');
const divContainer = document.createElement('div')

const createMain = () => {
    bodyContainer.appendChild(main);
    main.classList.add('main');
}

const profile = () => {
    const sectionProfile = document.createElement('section');
    const h1 = document.createElement('h1');
    const imgYo = document.createElement('img');
    main.appendChild(divContainer);
    divContainer.appendChild(sectionProfile);
    divContainer.classList.add('container');
    sectionProfile.id = 'profile';
    sectionProfile.appendChild(h1);
    h1.innerHTML = 'DevRaffa'
    h1.classList.add('nombre')
    sectionProfile.appendChild(imgYo);
    imgYo.src = 'img/Yo.jpeg'
    imgYo.alt = 'DevRaffa'
    imgYo.classList.add('imgDevRaffa')
    imgYo.title = 'DevRaffa'
}

const socialNetworks = () => {
    const sectionSocialNetworks = document.createElement('section');
    divContainer.appendChild(sectionSocialNetworks);
    sectionSocialNetworks.id = 'socialNetworks'
    
    const enlaces = [
        {href: 'https://www.linkedin.com/in/devraffa/', imgSrc: 'img/icons/linkedin.svg'},
        {href: 'https://www.tiktok.com/@devraffa', imgSrc: 'img/icons/tiktok.svg'},
        {href: 'https://twitter.com/DevRaffa', imgSrc: 'img/icons/twitter.svg'},
        {href: 'https://www.instagram.com/raffabd_/', imgSrc: 'img/icons/instagram.svg'}
    ]

    enlaces.forEach((enlace) => {
        const a = document.createElement('a');
        a.setAttribute('href', enlace.href);
        a.target = '_blank';
        const img = document.createElement('img');
        img.setAttribute('src', enlace.imgSrc);
        a.appendChild(img);
        sectionSocialNetworks.appendChild(a);
      });
}

const createFooter = () => {
    const footer = document.createElement('footer');
    const pFooter = document.createElement('p');
    divContainer.appendChild(footer);
    footer.appendChild(pFooter);
    pFooter.classList.add('footerP')
    pFooter.innerHTML = 'Copyright © 2022 DevRaffa <br> Todos los Derechos Reservados';
}

window.addEventListener('load', () => {
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = Math.random() * (window.innerWidth - 80) + 50 + 'px';
      bubble.style.animationDelay = Math.random() * 5 + 's';
      document.body.appendChild(bubble);
  
      // Iniciar la animación de la burbuja
      setTimeout(() => {
        bubble.style.animationPlayState = 'running';
      }, 100);
    }
  });

createMain();
profile();
socialNetworks();
createFooter();