/*
const headerBackgroundImages = [
    'assets/profile.jpg',
    'assets/profile-1.jpg',
    'assets/profile-2.jpg',
    'assets/profile-3.jpg',
    'assets/profile-4.jpg',
    'assets/profile-5.jpg',
    'assets/profile-6.jpg'
]
const headerElement = document.getElementsByTagName("header")[0];
let imgCounter = 0;
function carousel() {

    if (imgCounter === headerBackgroundImages.length) {
        imgCounter = 0;
    }
    const currentImg = headerBackgroundImages[imgCounter]
    headerElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${currentImg}')`;
    // headerElement.classList.add("animate__fadeIn");
    setTimeout(carousel, 3000);
    imgCounter+=1
}
carousel();*/

let switch_animation = true;
const target = Array.from(document.getElementsByClassName('timeline-content'))
target.forEach(element => {
    console.log(element)
    let animate
    if (switch_animation) {
        animate = "animate__fadeInRightBig";
        switch_animation = false
    }
    else {
        animate = "animate__fadeInLeftBig";
        switch_animation = true
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY >= element.getBoundingClientRect().top) {
            element.classList.add(animate);
        }
    })
})


// $.scrollify({
//     section: '.scroll-section',
//     sectionName: 'section-name',
//     easing: "easeOutExpo",
//     interstitialSection: "#nav-contact",
//     scrollSpeed: 500,
//     offset: 0,
//     scrollbars: true,
//     standardScrollElements: "",
//     setHeights: true,
//     overflowScroll: true,
//     updateHash: true,
//     touchScroll: true,
//     before: function () { },
//     after: function () { },
//     afterResize: function () { },
//     afterRender: function () { }
// });


const options = {
    strings: ['Sof^100tware En^100gineer', 'Amim^250al', 'Anim^250al Lover', 'Full^250stack ^500 Developer', 'Dance Enthu^250siast'],
    typeSpeed: 80,
    backSpeed: 50,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true
};

const typed = new Typed('.typed', options);
console.log('Here')
