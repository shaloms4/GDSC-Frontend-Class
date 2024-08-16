document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('input[name="color"]');

    colorButtons.forEach(button => {
        button.addEventListener('change', (event) => {
            document.body.style.backgroundColor = event.target.value;
        });
    });

    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const countDisplay = document.getElementById('count');
    let count = 0;

    incrementButton.addEventListener('click', () => {
        if (count < 20) {
            count++;
            countDisplay.textContent = count;
        }
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            countDisplay.textContent = count;
        }
    });

    const form = document.getElementById('form');
    const fullnameInput = document.getElementById('fullname');
    const passwordInput = document.getElementById('password');
    const message = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let valid = true;

        if (!fullnameInput.value.trim()) {
            fullnameInput.style.backgroundColor = 'pink';
            valid = false;
        } else {
            fullnameInput.style.backgroundColor = '';
        }

        if (!passwordInput.value.trim()) {
            passwordInput.style.backgroundColor = 'pink';
            valid = false;
        } else {
            passwordInput.style.backgroundColor = '';
        }

        if (valid) {
            message.style.display = 'block';
            form.style.display = 'none';
        }
    });
});
