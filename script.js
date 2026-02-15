let quantity = 1;
    const quantityDisplay = document.getElementById('quantity');

    function increment() {
      quantity++;
      quantityDisplay.textContent = quantity;
    }

    function decrement() {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    }


const openCart = document.getElementById('openCart');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const backToMenu = document.getElementById('backToMenu');

  openCart.addEventListener('click', () => {
    cartModal.style.display = 'block';
  });

  closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  backToMenu.addEventListener('click', () => {
    window.location.href = 'index.html'; 
  });


  window.onclick = function(event) {
    if (event.target === cartModal) {
      cartModal.style.display = 'none';
    }
  }


const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

const scrollAmount = 260; 
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});





setInterval(() => {
  carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
}, 5000);


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thanks for your message! We'll get back to you soon.");
  contactForm.reset();
});
const scrollBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


 const requestModal = document.getElementById('requestModal');
  const openRequest = document.getElementById('openRequest');
  const closeRequest = document.getElementById('closeRequest');
  const cancelRequest = document.getElementById('cancelRequest');
  const requestForm = document.getElementById('requestForm');

  openRequest.addEventListener('click', () => {
    requestModal.classList.remove('hidden');
  });

  closeRequest.addEventListener('click', () => {
    requestModal.classList.add('hidden');
  });

  cancelRequest.addEventListener('click', () => {
    requestModal.classList.add('hidden');
  });

  requestForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    requestModal.classList.add('hidden');
    alert('Your request has been submitted!');
  });



openRequest.addEventListener('click', () => {
  requestModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; 
});


[closeRequest, cancelRequest].forEach(btn => {
  btn.addEventListener('click', () => {
    requestModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
});

requestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Your request has been submitted!');
  requestModal.classList.add('hidden');
  document.body.style.overflow = 'auto'; 
});



  [closeRequest, cancelRequest, submitRequest].forEach(btn => {
    btn.addEventListener("click", () => {
      requestModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  });
  const video = document.getElementById('video');
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return re.test(email.toLowerCase());
}



