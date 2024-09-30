const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login successful:', data);
      window.location.href = 'listadoProductos.html';
    } else {
        console.error('Login failed:', response.status);
        const errorDiv = document.createElement('p');
        errorDiv.textContent = 'Usuario o contraseña incorrecta.';
        errorDiv.style.color = 'red';
        loginForm.appendChild(errorDiv);
        setTimeout(() => {
        loginForm.removeChild(errorDiv);
      }, 3000);
    }
  } catch (error) {
    console.error('Error: usuario o contraseña incorrecta.', error);
  }
});
