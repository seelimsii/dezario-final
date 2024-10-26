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
  threshold: 0.2 
});


text.forEach(text => {
    observer.observe(text);
  });


document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to each tab link
  document.querySelectorAll('.service-tab').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor action

      // Remove active styles from all tabs
      document.querySelectorAll('.service-tab').forEach(tab => {
        tab.classList.remove('text-purple-600', 'border-current');
        tab.classList.add('text-slate-900', 'border-transparent', 'hover:border-slate-300');
      });

      // Add active styles to the clicked tab
      this.classList.remove('text-slate-900', 'border-transparent', 'hover:border-slate-300');
      this.classList.add('text-purple-600', 'border-current');

      // Fetch the content file from the data-content attribute
      const contentFile = this.getAttribute('data-content');
      const contentArea = document.getElementById('content-area');

      // Fetch and load the new content
      fetch(contentFile)
        .then(response => response.text())
        .then(data => {
          contentArea.innerHTML = data; // Update content area with the fetched data
        })
        .catch(error => {
          contentArea.innerHTML = `<p>Error loading content. Please try again later.</p>`;
          console.error('Error loading content:', error);
        });
    });
  });

  // Automatically load the first tab's content on page load
  document.querySelector('.service-tab').click();
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
