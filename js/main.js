function Submit() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("correo").value;
  alert(
    `El nombre es ${nombre}\n el apellido: ${apellido}\n y el correo: ${correo}`
  );
}

document.getElementById("enviar").onclick = Submit;
