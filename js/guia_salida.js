// Mostrar solo una vez por sesión
const SHOWN_KEY = "exit_shown_grano";
let exitShown = sessionStorage.getItem(SHOWN_KEY) === "1";

const overlay = document.getElementById("exit-overlay");
const btnClose = document.getElementById("btnClose");
const btnKeep = document.getElementById("btnKeep");
const btnSaveCart = document.getElementById("btnSaveCart");
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const formMsg = document.getElementById("formMsg");

let lastMove = Date.now();

// Detecta salida con mouse
document.addEventListener("mouseleave", e => {
    if (e.clientY <= 0 && !exitShown) {
        showExitPopup();
    }
});

// Inactividad en móvil
setInterval(() => {
    if (Date.now() - lastMove > 90000 && !exitShown) {
        showExitPopup();
    }
}, 30000);

document.addEventListener("mousemove", () => {
    lastMove = Date.now();
});

function showExitPopup() {
    overlay.style.display = "flex";
    exitShown = true;
    sessionStorage.setItem(SHOWN_KEY, "1");
}

function closePopup() {
    overlay.style.display = "none";
}

btnClose.onclick = closePopup;
btnKeep.onclick = closePopup;

// Guardar pedido simulado
btnSaveCart.onclick = () => {
    formMsg.textContent = "Pedido guardado correctamente.";
    formMsg.style.color = "green";
};

// Enviar cupón simulado
emailForm.onsubmit = e => {
    e.preventDefault();
    formMsg.textContent = "Cupón enviado a " + emailInput.value;
    formMsg.style.color = "green";
    setTimeout(closePopup, 1500);
};

// Cerrar con ESC
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closePopup();
});
