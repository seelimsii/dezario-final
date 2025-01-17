const hamburger = document.getElementById('hamburger');
const sidemenu = document.getElementById('sidemenu');
const closeMenu = document.getElementById('closeMenu');

// Open menu
hamburger.addEventListener('click', () => {
    sidemenu.style.transform = 'translateX(0)';
});

// Close menu
closeMenu.addEventListener('click', () => {
    sidemenu.style.transform = 'translateX(-100%)';
});


document.addEventListener('scroll', function() {
    const parallaxBg = document.getElementById('parallax-bg');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Adjust the background position based on scroll position
    parallaxBg.style.transform = `translateY(${scrollTop * 0.6}px)`;
});


// Select all cards
const form = document.querySelectorAll('.form');
const text = document.querySelectorAll('.text')

// Create Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-40');  // Show card
      entry.target.classList.add('opacity-100', 'translate-y-0');   // Trigger the animation
      observer.unobserve(entry.target);  // Stop observing after the animation is triggered
    }
  });
}, {
  threshold: 0.2  // Trigger when 20% of the card is visible
});

// Observe each card
form.forEach(form => {
  observer.observe(form);
});

text.forEach(text => {
    observer.observe(text);
  });

//for scrolling of client section
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,       // Number of logos visible at once
    spaceBetween: 30,       // Space between logos
    loop: true,             // Infinite loop
    autoplay: {
      delay: 2000,          // Delay between transitions (in ms)
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  var templateParams = {
      name: document.getElementById('name').value,
      tel: document.getElementById('tel').value,
      email: document.getElementById('email').value,
      identity: document.getElementById('identity').value,
      message: document.getElementById('message').value
  };

  emailjs.sendForm('service_emotional', 'template_4a7y0u9', this)
      .then(function() {
          alert('Email sent successfully!');
      }, function(error) {
          alert('Failed to send email. Error: ' + JSON.stringify(error));
      });
});
