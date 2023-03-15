$(document).ready(function () {

    var coll = document.querySelector(".collapsible");
    var content = document.getElementById("menu-content");


    coll.addEventListener("click", function () {
        this.classList.toggle("active");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
    var menuLinks = document.querySelectorAll("#menu-list li a");

    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", function (e) {
            e.preventDefault();
            if (content.style.display === "block") {
                content.style.display = "none";
            }
            var target = $(this.hash);
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        });
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("menu").style.top = "-5.0vh";
            document.getElementById("menu-content").style.top = "5.3vh";
        } else {
            document.getElementById("menu").style.top = "5.3vh";
            document.getElementById("menu-content").style.top = "-5.0vh";
        }
        prevScrollpos = currentScrollPos;
    }

});

menuBtn.addEventListener('click', () => {
    menuContent.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        menuContent.style.top = '-200px';
    } else {
        menuContent.style.top = '0';
    }
    lastScrollTop = st <= 0 ? 0 : st;
});


const links = document.querySelectorAll('article p a');

// loop through each link and add a click event listener
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent the default link behavior
        const href = link.getAttribute('href'); // get the value of the href attribute
        const targetId = href.substring(1); // remove the "#" character from the href value
        const target = document.getElementById(targetId); // find the corresponding <div> element
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' }); // scroll to the <div> element smoothly
        }
    });
});



new Vue({
    el: '#app',
    data() {
        return {
        }
    },
    computed: {},
    methods: {}
});

var vid = document.getElementById("myVideo");

function enableMute() {
    vid.muted = true;
}

window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

    if (document.querySelectorAll('video[autoplay]').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('video[autoplay]');

        for (var i = 0; i < videoEl.length; i++) {

            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;

            if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                thisVideoEl.play();
            } else {
                thisVideoEl.pause();
            }

        }
    }

}