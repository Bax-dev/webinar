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
