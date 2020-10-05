/*
  Author: Heesoo Lim
  studentID: 301061152
  Date: October 05, 2020
  File Name: app.js
*/

// IIFE
(function(){

    function Start()
    {
        console.log("app started");
        formValidate();
    }
    
    function formValidate()
    {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    }

    window.addEventListener("load", Start);

})();