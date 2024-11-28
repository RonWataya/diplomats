(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Car Categories
    $(".categories-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

document.querySelector('.chatbot').addEventListener('click', () => {
    document.getElementById('chatbotModal').style.display = 'flex';
});

document.querySelector('.close-chatbot').addEventListener('click', () => {
    document.getElementById('chatbotModal').style.display = 'none';
});

document.getElementById('chatbotForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (fullname && email && phone) {
        document.querySelector('.chatbot-body').style.display = 'none';
        document.querySelector('.chatbot-response').style.display = 'block';
    }
});


function sendBookingToWhatsApp() {
    const carType = document.getElementById('carType').value;
    const pickupLocation = document.getElementById('pickupLocation').value;
    const dropoffLocation = document.getElementById('dropoffLocation').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const pickupTime = document.getElementById('pickupTime').value;
    const dropoffDate = document.getElementById('dropoffDate').value;
    const dropoffTime = document.getElementById('dropoffTime').value;

    if (!carType || carType === "Select Your Car type" || !pickupLocation || !dropoffLocation || !pickupDate || !dropoffDate) {
        alert('Please fill all fields correctly.');
        return;
    }

    const message = `Hello Diplomats Car Hire,
I would like to book a car with the following details:
- Car Type: ${carType}
- Pickup Location: ${pickupLocation}
- Dropoff Location: ${dropoffLocation}
- Pickup Date & Time: ${pickupDate} at ${pickupTime}
- Dropoff Date & Time: ${dropoffDate} at ${dropoffTime}

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '265888822061';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

// Select all navigation links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});
