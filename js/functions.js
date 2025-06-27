console.log("dentro");

const btn = document.getElementById("btn");
const email = document.getElementById("email");
function sendPresets() {
  Swal.fire({
    title: "Presets enviados con éxito",
    icon: "success",
    customClass: {
      confirmButton: "emailSection__btnmodal",
    },
  });
  email.value = "";
}

btn.addEventListener("click", () => {
  if (email.value === "") {
    Swal.fire({
      title: "Ingresa un correo",
      icon: "warning",
      customClass: {
        confirmButton: "emailSection__btnmodal",
      },
    });
  } else {
    sendPresets();
  }
});
