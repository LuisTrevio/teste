let LastScrollY = 0
window.addEventListener("scroll", () => {
    if(LastScrollY < window.scrollY) {
        document.querySelectorAll('.scroll').forEach((result) => { result.classList.add('active'); })
        document.querySelectorAll('.b-scroll').forEach((result) => { result.classList.add('sub-link-bg');})
    } 
    else { 
        document.querySelectorAll('.scroll').forEach((result) => { result.classList.remove('active');})
        document.querySelectorAll('.b-scroll').forEach((result) => { result.classList.remove('sub-link-bg');})
    }
})

function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => {result.classList.toggle('bar1-on');})
    /*document.querySelectorAll('.br-2').forEach((result) => {result.classList.toggle('bar2-on');})*/
    document.querySelectorAll('.br-3').forEach((result) => {result.classList.toggle('bar3-on');})

    document.querySelectorAll('.menu-on').forEach((result) => {result.classList.toggle('menu-full-on');})
    document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})
    document.querySelectorAll('.smooth').forEach((result) => {result.classList.toggle('nav-smooth');})

    document.querySelectorAll('.Nosotros-up').forEach((result) => {result.classList.remove('box-grid-Nosotros-Up');})
    document.querySelectorAll('.nav-select-Nosotros').forEach((result) => {result.classList.remove('nav-select-Nosotros-Up');})
    document.querySelectorAll('.Servicios-up').forEach((result) => {result.classList.remove('box-grid-Servicios-Up');})
    document.querySelectorAll('.nav-select-Servicios').forEach((result) => {result.classList.remove('nav-select-Servicios-Up');})
}

function ExpNosotros() {
    document.querySelectorAll('.Nosotros-up').forEach((result) => {result.classList.toggle('box-grid-Nosotros-Up');})
    document.querySelectorAll('.nav-select-Nosotros').forEach((result) => {result.classList.toggle('nav-select-Nosotros-Up');})

    document.querySelectorAll('.Servicios-up').forEach((result) => {result.classList.remove('box-grid-Servicios-Up');})
    document.querySelectorAll('.nav-select-Servicios').forEach((result) => {result.classList.remove('nav-select-Servicios-Up');})
}

function ExpServicios() {
    document.querySelectorAll('.Servicios-up').forEach((result) => {result.classList.toggle('box-grid-Servicios-Up');})
    document.querySelectorAll('.nav-select-Servicios').forEach((result) => {result.classList.toggle('nav-select-Servicios-Up');})

    document.querySelectorAll('.Nosotros-up').forEach((result) => {result.classList.remove('box-grid-Nosotros-Up');})
    document.querySelectorAll('.nav-select-Nosotros').forEach((result) => {result.classList.remove('nav-select-Nosotros-Up');})
}

function RecCat() {
    localStorage.setItem('Catalizador', 'true');
    document.querySelectorAll('.disable-b').forEach((result) => {result.classList.add('disable-blue');}) 
    document.querySelectorAll('.disable-r').forEach((result) => {result.classList.remove('disable-red');})

    document.querySelectorAll('.hover-b').forEach((result) => {result.classList.add('hover-blue');})
    document.querySelectorAll('.hover-r').forEach((result) => {result.classList.remove('hover-red');})
}

function RecElec() {
    localStorage.setItem('Catalizador', 'false');
    document.querySelectorAll('.disable-b').forEach((result) => {result.classList.remove('disable-blue');}) 
    document.querySelectorAll('.disable-r').forEach((result) => {result.classList.add('disable-red');})

    document.querySelectorAll('.hover-b').forEach((result) => {result.classList.remove('hover-blue');})
    document.querySelectorAll('.hover-r').forEach((result) => {result.classList.add('hover-red');})
}

if (localStorage.getItem('Catalizador') === 'true' ) {
    document.querySelectorAll('.disable-b').forEach((result) => {result.classList.add('disable-blue');}) 
    document.querySelectorAll('.disable-r').forEach((result) => {result.classList.remove('disable-red');})

    document.querySelectorAll('.hover-b').forEach((result) => {result.classList.add('hover-blue');})
    document.querySelectorAll('.hover-r').forEach((result) => {result.classList.remove('hover-red');})
}
else {
    document.querySelectorAll('.disable-b').forEach((result) => {result.classList.remove('disable-blue');}) 
    document.querySelectorAll('.disable-r').forEach((result) => {result.classList.add('disable-red');})

    document.querySelectorAll('.hover-b').forEach((result) => {result.classList.remove('hover-blue');})
    document.querySelectorAll('.hover-r').forEach((result) => {result.classList.add('hover-red');})
}

function Pop() {
    document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})
    document.querySelectorAll('.P-On').forEach((result) => {result.classList.toggle('Pop-On');})
    document.querySelectorAll('.Pop-Video-O').forEach((result) => {result.classList.remove('Pop-Video-Out')})

    document.getElementById('llr').pause();
    document.getElementById('llx').play();
}

function PopVideo() {document.querySelectorAll('.Pop-Video-O').forEach((result) => {result.classList.add('Pop-Video-Out')});  document.getElementById('llr').play(); document.getElementById('llx').pause();}