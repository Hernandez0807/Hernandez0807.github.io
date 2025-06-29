document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        // Guardar en localStorage
        let enviados = JSON.parse(localStorage.getItem('formulariosEnviados') || '[]');
        enviados.push(result);
        localStorage.setItem('formulariosEnviados', JSON.stringify(enviados));
        alert('¡Formulario enviado! Respuesta: ' + JSON.stringify(result));
      } catch (error) {
        alert('Error al enviar el formulario: ' + error);
      }
    });
  }
});
