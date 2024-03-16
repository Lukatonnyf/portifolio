


const btn = document.querySelector('.toggle');
const body = document.body;
body.style.background = 'rgb(18, 18, 18)'




function lightmode() {
    if (body.style.background === 'rgb(18, 18, 18)') {
        document.body.style.background = "#a9a9a9"
        document.body.style.color = "#000"
    }
    else {
        document.body.style.background = "#121212"
        document.body.style.color = "#a9a9a9"
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

const btnMarkuppageSite = document.getElementById('btnsitemarkuppage')

function irProjectMarkuppage() {
    window.location.href = "https://markuppage.surge.sh/"
}

const btnPepsiSite = document.getElementById('btnsitepepsi')


function irProjectPepsi(btnPepsiSite) {
    window.location.href = "https://honorsmartwatch.surge.sh/"
}

