// gsap.from('.navbar', { duration: 1 , x: '-100%', ease: 'power3'})
// gsap.from('.links', { duration: 2 ,opacity: 0, delay: .5, stagger: 1})

const timeline = gsap.timeline({ defaults : { duration: 1}})
timeline
    .from('.navbar', { x: '-100%', ease: 'power3'})
    .from('.links', {opacity: 0, stagger: 1})

const button = document.querySelector('.nav-toggle')
    button.addEventListener('click', () => {
        timeline.timeScale(2)
    })

const exit = document.querySelector('.close')
    exit.addEventListener('click', () => {
        timeline.reverse(2)
    })