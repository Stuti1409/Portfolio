/*let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


const typed=new Typed('.profession',{
    strings:['Python Developer', 'Frontend Developer'],
    typespeed:50,
    backspeed:100,
    backDelay:0,
    loop:true
});
*/

let portfolio_btn = document.querySelector("#portfolio")

portfolio_btn.addEventListener("click", () => {
    let portfolio_section = document.querySelector("#portfolio-div");
    console.log(portfolio_section);
    portfolio_section.scrollIntoView()
});



let allAnchorTag = document.querySelectorAll("a")

allAnchorTag.forEach((val) => {

    console.log(val.classList.add("achor_underline"));
})

const typed=new Typed('.profession',{
    strings:['Python developer','Frontend Developer','Blockchain Developer'],
    typeSpeed:50,
    backSpeed:100,
    backDelay:0,
    loop:true
});