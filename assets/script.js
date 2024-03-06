// const anoAtual = new Date();
// const meuAniversario = new Date("2007-09-16");
// const birth_date = new Date("2007-09-16").toISOString();


// const btn = document.querySelector('.toggle');
// const body = document.body;

// btn.addEventListener('click', () => {
//     document.body.style.background = "#a9a9a9"
// })


function lightmode() {
    if (document.body.style.background === ``) {
        document.body.style.background = 'green'
    } else {
        document.body.style.background = "#12112"
    }
}


const myObserver = new IntersectionObserver((animationhabilits) => {
    animationhabilits.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const habilitAnimation = document.querySelectorAll('.habilitcards')

habilitAnimation.forEach((element) => myObserver.observe(element))



const showTohide = new IntersectionObserver((projectanimations) => {
    projectanimations.forEach((yousee) => {
        if (yousee.isIntersecting === true) {
            yousee.target.classList.add('visible')
        } else {
            yousee.target.classList.remove('visible')
        }

    })
})

const projectscards = document.querySelectorAll('.everyprojects')

projectscards.forEach((element) => showTohide.observe(element))


const btnIrparaoSite = document.getElementById('btnsite')


function irprojecthonor(btnIrparaoSite) {
    window.location.href = "https://honorsmartwatch.surge.sh/"
}

const btnPepsiSite = document.getElementById('btnsitepepsi')


function irProjectPepsi(btnPepsiSite) {
    window.location.href = "https://honorsmartwatch.surge.sh/"
}

const btnMarkuppageSite = document.getElementById('btnsitemarkuppage')

function irProjectMarkuppage() {
    window.location.href = "https://honorsmartwatch.surge.sh/"
}