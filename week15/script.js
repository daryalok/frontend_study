const form = document.getElementById('registerForm');
const inputs = form.querySelectorAll('input, select');
const button = form.querySelector('button');

function validateField(field) {
    const errorElement = document.getElementById(field.id + 'Error');
    if (!field.checkValidity()) {
        errorElement.style.display = 'block';
        return false;
    } else {
        errorElement.style.display = 'none';
        return true;
    }
}

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateField(input);
        button.disabled = !form.checkValidity();
    });
    input.addEventListener('focus', () => input.style.borderColor = 'blue');
    input.addEventListener('blur', () => input.style.borderColor = '');
});

form.addEventListener('submit', event => {
    event.preventDefault();
    let valid = true;
    inputs.forEach(input => valid &= validateField(input));
    if (valid) {
        const formData = new FormData(form);
        console.log(Object.fromEntries(formData.entries()));
        form.reset();
        button.disabled = true;
    }
});


