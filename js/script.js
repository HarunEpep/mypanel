// Modal functionality
let currentPackage = '';

document.addEventListener('DOMContentLoaded', function() {
    // Renew modal functionality
    function openRenewModal() {
        alert('Renew modal belum diimplementasi. Fitur ini akan segera hadir!');
    }

    // Make openRenewModal global
    window.openRenewModal = openRenewModal;

    const modal = document.getElementById('modal');
    const closeBtnModal = document.querySelector('#modal .close');
    const buyButtons = document.querySelectorAll('.buy-btn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const telegramBtn = document.getElementById('telegramBtn');

    // Open modal when buy button is clicked
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentPackage = this.getAttribute('data-package');
            // show modal by adding class (CSS controls centering)
            modal.classList.add('show');
        });
    });

    // Close modal
    closeBtnModal.addEventListener('click', function() {
        modal.classList.remove('show');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Handle WhatsApp button
    whatsappBtn.addEventListener('click', function() {
        const server = document.querySelector('input[name="server"]:checked').value;
        const message = `.buy${currentPackage}-${server}`;
        const whatsappUrl = `https://wa.me/628xxxxxxxxx?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        modal.classList.remove('show');
    });

    // Handle Telegram button
    telegramBtn.addEventListener('click', function() {
        const server = document.querySelector('input[name="server"]:checked').value;
        const message = `.buy${currentPackage}-${server}`;
        const telegramUrl = `https://t.me/runzyassist_bot`;
        window.open(telegramUrl, '_blank');
        modal.classList.remove('show');
    });

    // Testimonials slider
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonials = document.querySelectorAll('.testimonial');

    let currentIndex = 0;

    function updateSlider() {
        const testimonialWidth = testimonials[0].offsetWidth + 32; // 32 is gap
        testimonialsContainer.scrollLeft = currentIndex * testimonialWidth;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Touch/swipe support
    let startX = 0;
    let scrollLeft = 0;

    testimonialsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - testimonialsContainer.offsetLeft;
        scrollLeft = testimonialsContainer.scrollLeft;
    });

    testimonialsContainer.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - testimonialsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        testimonialsContainer.scrollLeft = scrollLeft - walk;
    });

    testimonialsContainer.addEventListener('touchend', () => {
        startX = 0;
    });

    // server logo sits in navbar; no cursor-follow behavior needed
});
