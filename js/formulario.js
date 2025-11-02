  const form = document.querySelector(".forms");

  const name = form.querySelector('input[name="name"]').value;
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(name)) {
    e.preventDefault();
    alert("El nombre solo puede contener letras y espacios");
    return;
  }