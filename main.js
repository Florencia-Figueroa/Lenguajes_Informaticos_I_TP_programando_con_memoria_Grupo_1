document.addEventListener("DOMContentLoaded", () => {
    
    // Contador 
    const contadorElemento = document.getElementById("contador-anios");
    if (contadorElemento) {
        const anioActual = new Date().getFullYear();
        const aniosMemoria = anioActual - 1976;
        contadorElemento.textContent = `Van ${aniosMemoria} años de Memoria, Verdad y Justicia.`;
    }

    // Buscador en tiempo
    const buscador = document.getElementById("buscador-testimonios");
    if (buscador) {
        buscador.addEventListener("input", (e) => {
            const textoBusqueda = e.target.value.toLowerCase();
            const tarjetasTestimonios = document.querySelectorAll("#contenedor-testimonios .card");

            tarjetasTestimonios.forEach((tarjeta) => {
                const contenido = tarjeta.textContent.toLowerCase();
                if (contenido.includes(textoBusqueda)) {
                    tarjeta.parentElement.style.display = "block"; 
                } else {
                    tarjeta.parentElement.style.display = "none";
                }
            });
        });
    }

    // Tarjeta conmemorativa
    const btnGenerar = document.getElementById("btn-generar-tarjeta");
    const contenedorVistaPrevia = document.getElementById("vista-previa-tarjeta");

    if (btnGenerar && contenedorVistaPrevia) {
        btnGenerar.addEventListener("click", () => {
            const nombre = document.getElementById("nombre-tarjeta").value.trim();
            const reflexion = document.getElementById("reflexion-tarjeta").value.trim();

            if (nombre === "" || reflexion === "") {
                contenedorVistaPrevia.innerHTML = `<div class="alert alert-warning mb-0">Por favor, completá ambos campos.</div>`;
                return;
            }

            contenedorVistaPrevia.innerHTML = `
                <div class="card border-dark text-white bg-dark p-3 my-2 shadow">
                    <div class="card-body">
                        <h4 class="card-title text-warning">🕊️ 50 años — Memoria Activa</h4>
                        <p class="card-text fs-5">"${reflexion}"</p>
                        <hr class="border-secondary">
                        <p class="card-text text-end fst-italic">— Adhiere: ${nombre}</p>
                    </div>
                </div>
            `;
        });
    }

    // Validacion de formulario de adhesion
    const formAdhesion = document.getElementById("form-adhesion");
    const mensajeFeedback = document.getElementById("mensaje-feedback");

    if (formAdhesion && mensajeFeedback) {
        formAdhesion.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre-adhesion").value.trim();
            const email = document.getElementById("email-adhesion").value.trim();
            const check = document.getElementById("check-adhesion").checked;

            // Validaciones
            if (nombre.length < 3) {
                mensajeFeedback.innerHTML = `<div class="alert alert-danger mb-0">Por favor, ingresá un nombre válido (al menos 3 letras).</div>`;
                return;
            }

            if (!email.includes("@") || email.length < 5) {
                mensajeFeedback.innerHTML = `<div class="alert alert-danger mb-0">Por favor, ingresá un correo electrónico válido.</div>`;
                return;
            }

            if (!check) {
                mensajeFeedback.innerHTML = `<div class="alert alert-danger mb-0">Debés marcar la casilla de adhesión.</div>`;
                return;
            }

            // Si se completo correctamente
            mensajeFeedback.innerHTML = `<div class="alert alert-success mb-0">¡Gracias ${nombre}! Tu adhesión fue registrada correctamente.</div>`;
            formAdhesion.reset();
        });
    }
});