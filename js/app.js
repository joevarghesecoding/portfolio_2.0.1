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
  document.addEventListener('DOMContentLoaded', () => {
   
    let current = 0;
    let end = 3;
    let slides = document.getElementsByClassName('mySlides');
    const next = document.querySelector('.pagination-next');
    const previous = document.querySelector('.pagination-previous');
    const one = document.querySelector('#project-1');
    const two = document.querySelector('#project-2');
    const three = document.querySelector('#project-3');
    const four = document.querySelector('#project-4');
    let pause = false;


    if(!pause) {
      showSlides();
    }
    else{
      noSlideShow();
    }

    next.addEventListener('click', () => {
      if(current < end){
        current++;
      }
      else{
        current = 0;
      }
    })

    previous.addEventListener('click', ()=> {
      if(current <= end && current > 0){
        current--;
      }
      else{
        current = 3;
      }
    })


    one.addEventListener('click', ()=> {
      current = 0;
    }
    );
    two.addEventListener('click', ()=> {
      current = 1;
    }
    );
    three.addEventListener('click', ()=> {
      current = 2;
    }
    );
    four.addEventListener('click', ()=> {
      current = 3;
    }
    );

    function showSlides() {
         
      for(i = 0; i< slides.length; i++){
        slides[i].style.display = 'none';
      }
      slides[current].style.display = 'block';
      setTimeout(showSlides, 2000);
      // current++ //if you want auto slide show but it doesnt work
    }
    
    function noSlideShow() {

    }

  })

 

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

  function contact_slide(x) {
    let id = x.target.innerHTML;
    if(id === 'GitHub') { openSlide(github); }
    if(id === 'LinkedIn') { openSlide(linkedin); }
    if(id === 'Email') { openSlide(email); }
    if(id === 'Phone') { openSlide(phone); }
  }

  $('.contact-slide').click(function (event) {
    contact_slide(event);
  })

  $('.contact-slide').hover(function (event) {
    contact_slide(event);
  })

  $('.contact-copy-button').click(function(event) {
    let id = event.target.id;
    if(id === 'github-copy') 
    { 
      copyText('https://github.com/joevarghesecoding');
      event.target.innerHTML = 'Copied!';
      $('#github-copy').addClass('is-success');
      setTimeout(() => {
        event.target.innerHTML = 'Copy';
        $('#github-copy').removeClass('is-success');
      }, 2000);
    }

    if(id === 'linkedin-copy') { 
      copyText('https://linkedin.com/jyothish-joe-varghese'); 
      event.target.innerHTML = 'Copied!';
      $('#linkedin-copy').addClass('is-success');
      setTimeout(() => {
        event.target.innerHTML = 'Copy';
        $('#linkedin-copy').removeClass('is-success');
      }, 2000);
    }
    if(id === 'email-copy') { 
      copyText('jyothish.j.varghese@gmail.com'); 
      event.target.innerHTML = 'Copied!';
      $('#email-copy').addClass('is-success');
      setTimeout(() => {
        event.target.innerHTML = 'Copy';
        $('#email-copy').removeClass('is-success');
      }, 2000);
    }
    if(id === 'phone-copy') { 
      copyText('484-632-4860'); 
      event.target.innerHTML = 'Copied!';
      $('#phone-copy').addClass('is-success');
      setTimeout(() => {
        event.target.innerHTML = 'Copy';
        $('#phone-copy').removeClass('is-success');
      }, 2000);
    }
  })


});