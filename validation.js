const	form = document.querySelector("#form-contacto")
const	nombre = document.querySelector("#nombre")
const	nombreHelp = document.querySelector("#nombreHelp")
const	email = document.querySelector("#email")
const	emailHelp = document.querySelector("#emailHelp")
const	mensaje = document.querySelector("#mensaje")
const	mensajeHelp = document.querySelector("#mensajeHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (nombre.value === "" || email.value === "" || mensaje.value === "") {
		if (nombre.value === "") {
			nombreHelp.innerText = "¡Dale no seas tímido!"
		}
		if (email.value === "") {
			emailHelp.innerText = "Te juro que no te mando spam"
		}
		if (mensaje.value === "") {
			mensajeHelp.innerText = "Largalo todo!"
		}
		
	} else {
		console.log("funciona")
		form.submit();
	}
})