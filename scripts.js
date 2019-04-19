let inputs = document.querySelectorAll(".valor");

inputs.forEach((input) => {
  input.value = input.dataset.cambio;
});

function valorCambiado(input) {
  let factor = input.value / input.dataset.cambio;
  inputs.forEach((campo) => {
    campo.value = (campo.dataset.cambio * factor).toFixed(2);
  })
}
