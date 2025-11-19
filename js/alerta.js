document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();
    const alerta = document.getElementById("alerta");
    alerta.classList.remove("d-none");
    this.reset();
    setTimeout(() => {
        alerta.classList.add("d-none");
    }, 4000);
});