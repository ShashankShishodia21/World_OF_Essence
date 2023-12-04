let navMenu = document.getElementById('nav-menu');

const openNav = () => {
    navMenu.style.display = 'block';
}


const closeNav = () => {
    navMenu.style.display = 'none';
}

var crsr = document.querySelector(".cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

