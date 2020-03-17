const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    const login = {
        username,
        password

    };

    console.log(login);

})