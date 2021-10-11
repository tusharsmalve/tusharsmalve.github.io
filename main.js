
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.logo, .right-content`,{
    origin: 'top',
    interval: 60,
})

sr.reveal(`.left-content`,{
    origin: 'left',
})

sr.reveal(`.logo`,{
    origin: 'right',
    interval: 60,
})