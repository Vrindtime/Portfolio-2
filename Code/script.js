// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Define the animations for the "See" section and footer
    var seeSectionAnimation = gsap.from('.see', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.see',
            start: 'top 60%', // Adjust the start position as needed
            srub: true,
        },
    });

    var exAnimation = gsap.from('.ex1, .ex2 ,.ex3 , .ex4', {
        opacity: 0,
        x: 50,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.see',
            start: 'top 80%',
            scrub: true, // Adjust the start position as needed
        },
    });

    var exAnimation = gsap.from('.skill, .timeline', {
        opacity: 0,
        x: -50,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.see',
            start: 'top 80%',
            scrub: true, // Adjust the start position as needed
        },
    });

    var footerAnimation = gsap.from('.footer, .icon', {
        opacity: 0,
        y: 100,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            scrub: true, // Adjust the start position as needed
        },
    });

    // ScrollTrigger refresh to update the scroll positions
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
});
