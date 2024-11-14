const API_URL_REGISTER = 'http://testeos.me:3000/api/auth/register';
const API_URL_LOGIN = 'http://testeos.me:3000/api/auth/login';

async function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    try {
        const response = await fetch(API_URL_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Usuario registrado exitosamente. Por favor verifica tu correo electrónico.');
            window.location.href = 'login.html';
        } else {
            alert(`Error en el registro: ${data.message || 'Algo salió mal.'}`);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la red. Intenta nuevamente.');
    }
}

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(API_URL_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Inicio de sesión exitoso.');
            console.log('Token recibido:', data.token);
            window.location.href = 'dashboard.html';
        } else {
            alert(`Error en el inicio de sesión: ${data.message || 'Correo o contraseña incorrectos.'}`);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la red. Intenta nuevamente.');
    }
}
