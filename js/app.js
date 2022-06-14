//navbar button --NOT WORKING YET
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  
  });

  //Projects slideshow -- Non-automatic
 

  //Projects slideshow - Automatic
  document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // for(slide of slides)
  // {
  //   console.log(slide);
  // }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  });

  //Nav blur upon scrolling
  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const brand = document.querySelector('.nav-brand');
    const nav_list = document.querySelector('.nav-list');
    const nav_left = document.querySelector('.navbar-start');
    const nav_right = document.querySelector('.navbar-end');
    let lastScrollPos = 0;
    window.addEventListener('scroll', function() {
        lastScrollPos = window.scrollY;
       // console.log(lastScrollPos);
        if(lastScrollPos > 600){
            nav.style.backgroundColor = 'rgba(101, 123, 131, 0.7)';
            nav.style.transition = 'background-color 1s ease';
            nav.style.outline = 'none';
            nav_left.style.display = 'none';
            nav_right.style.display = 'none';
        }
        else {
            nav.style.backgroundColor = 'rgb(101, 123, 131)';
            nav_left.style.display = 'flex';
            nav_right.style.display = 'flex';
        }
    })
});


  //Contacts copy text to clipboard
document.addEventListener('DOMContentLoaded', () => {
  const github = document.querySelector('#github');
  const linkedin = document.querySelector('#linkedin');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.style.display = 'none';
    });
  });

  function openSlide(x) {
    x.style.display = 'flex';
  }

  function copyText(x){
    navigator.clipboard.writeText(x);
  }

  $('.contact-slide').click(function (event) {
    let id = $(this).attr('id');
    if(id === 'github-contact') { openSlide(github); }
    if(id === 'linkedin-contact') { openSlide(linkedin); }
    if(id === 'email-contact') { openSlide(email); }
    if(id === 'phone-contact') { openSlide(phone); }
  })

  // (document).querySelector('#github-contact').addEventListener('click', () =>{
  //   openSlide(github);
  //   copyText('https://github.com/joevarghesecoding');
  // }); 
  // (document).querySelector('#linkedin-contact').addEventListener('click', () =>{
  //   openSlide(linkedin);
  //   copyText('https://linkedin.com/jyothish-joe-varghese');
  // });
  // (document).querySelector('#phone-contact').addEventListener('click', () =>{
  //   openSlide(phone);
  //   copyText('484-632-4860');
  // }); 
  // (document).querySelector('#email-contact').addEventListener('click', () =>{
  //   openSlide(email);
  //   copyText('jyothish.j.varghese@gmail.com');
  // });
  // contact_slide.addEventListener('mouseover', showCopy());

});