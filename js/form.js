document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('floatingFormContainer');
    const registerButton = document.querySelector('.sticky-register-btn');

    registerButton.addEventListener('click', function () {
        formContainer.classList.toggle('expanded');

        if (formContainer.classList.contains('expanded')) {
            registerButton.textContent = 'Close Form';
        } else {
            registerButton.textContent = 'Register';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bookSeatButton1 = document.getElementById('bookSeatButton');
    const bookSeatButton2 = document.getElementById('bookSeatButton2');
    const floatingFormContainer = document.getElementById('floatingFormContainer');

    function toggleForm() {
        floatingFormContainer.classList.toggle('expanded');
    }

    bookSeatButton1.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        toggleForm();
    });

    bookSeatButton2.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        toggleForm();
    });
});

