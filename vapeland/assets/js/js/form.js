const form = document.getElementById("form")
const button = document.getElementById("submitbutton")

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const edad = document.getElementById("edad")
const dirección = document.getElementById("dirección")
const numero = document.getElementById("numero")
const ciudad = document.getElementById("ciudad")
const cpostal = document.getElementById("cpostal")
const telefono = document.getElementById("telefono")
const fechadenacimiento = document.getElementById("fechadenacimiento")
const ingresesucorreoelectronico = document.getElementById("ingresesucorreoelectronico")
const gender = document.getElementById("gender")
/* const lang = document.getElementById("lang") */
const titulo = document.getElementById("titulo")
const comentarios = document.getElementById("comentarios")
const terms = document.getElementById("terms")

const formIsValid = {
    nombre: false,
    apellido: false,
    edad: false,
    dirección:false,
    numero: false,
    ciudad: false,
    cpostal: false,
    telefono: false,
    fechadenacimiento: false,
    ingresesucorreoelectronico: false,
    gender: false,
/*     lang: false, */
    titulo: false,
    comentarios:false,
    terms: false, 
}

form.addEventListener ("submit", (e) => {
    e.preventDefault()
    Validate()
})

nombre.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.nombre = true
})

apellido.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.apellido = true
})

edad.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.edad = true
})

dirección.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.dirección = true
})

numero.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.numero = true
})

ciudad.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.ciudad = true
})

cpostal.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.cpostal = true
})

telefono.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.telefono = true
})

fechadenacimiento.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.fechadenacimiento = true
})

ingresesucorreoelectronico.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.ingresesucorreoelectronico = true
})

gender.addEventListener("change", (e) => {
    if(e.target.checked == true) formIsValid.gender = true
})

/* lang.addEventListener("change", (e) => {
    if(e.target.checked == true) formIsValid.lang = true
})
 */
titulo.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.titulo = true 
})

comentarios.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.comentarios = true
})

terms.addEventListener("change", (e) => {
    formIsValid.terms = e.target.checked
    e.target.checked ? button.removeAttribute("disabled") :
    button.setAttribute("disabled", true)
})

const Validate = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert ("formulario invalido") 
    
}


