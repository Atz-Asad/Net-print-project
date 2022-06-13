
$(document).ready(function(){
      $(".printed-carousel").owlCarousel({
            loop:true,
            nav:true,
            margin:25,
            dots:false,
            autoplay:true,
            Transition:.500,
            animateIn:true,
            navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
            responsive:{
                  0:{
                        items:1
                  },
                  480:{
                        items:2
                  },
                  768:{
                        items:3
                  },
                  1000:{
                        items:5
                  }
            }
      });
      
      
  
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
      'use strict';
      window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
      }, false);
      });
      }, false);
})();