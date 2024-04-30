
// -------------------- VARIABLES

const intro = "Es el año 2089, estas en una nave espacial y acabas de despertar de un desmayo, parece que todo se está derrumbando y escuchas un altavoz que dice: ATENCIÓN LA NAVE SE AUTODESTRUIRÁ EN 10 MINUTOS, POR FAVOR DIRÍJASE A LAS CAPSULAS DE ESCAPE. Debes salir de ahí cuanto antes."

const muerte = "¡ESTAS MUERTO!"

let toma1

const toma2 = "Vas a medio camino por el ducto de ventilación, pareciera que ya vas a llegar, pero un estruendo sacude todo el ducto y caes al pasillo, ¡Es un alíen que te ha detectado!, pero algunos escombros han caído sobre él y lo han atontado, lo que te da una oportunidad..."

let toma3

const toma4 = "¡Oh no!, la puerta está cerrada y para abrirla necesitas un código numérico de 4 dígitos, date prisa solo tienes 3 intentos."

let toma5

const contraseña = 2089

let intentos

const salvacion = "Felicidades has logrado escapar y estas a salvo, por ahora..."

// -------------------- FUNCIONES

function eleccion (ele1,ele2) {
    return prompt ("¿Qué quieres hacer? " + ele1 + " - " + ele2) .toLowerCase ()
}

let correccion = (ele1,ele2) => alert ("Por favor utiliza las opciones: " + ele1 + " - " + ele2)


// -------------------- JUEGO

do {

    intentos = 1

    alert (intro)

    do {
        toma1 = eleccion ("PUERTA", "DUCTO DE VENTILACION")
    
        if (toma1 == "puerta") {
            alert ("Has salido corriendo por la puerta como si no pasara nada, eres demasiado confiado para no saber que está pasando en la nave, pero lo pagaras caro... A mitad de camino un alíen aparece de la nada y te corta por la mitad.")
    
            alert (muerte)
    
        }else if (toma1 == "ducto" || toma1 == "ducto de ventilacion") {
            alert ("La puerta parece una salida muy fácil y la sala de capsulas esta justo al frente, por lo que los ductos parecen ser una buena opción, además que evitaras tener que usar el código para entrar a la sala de capsulas, vamos por el ducto entonces.")

            alert (toma2)

            do {
                toma3 = eleccion ("DISPARAR", "ESCAPAR")

                if (toma3 == "disparar" || toma3 == "disparo") {
                    alert ("El disparo no causa daño al alíen y además lo ha despertado, se ríe de ti y de un solo salto te agarra y te come.")

                    alert (muerte)

                }else if (toma3 == "escapar") {
                    alert ("Al aprovechar el tiempo en el que el alíen esta atontado has logrado escapar hasta la puerta de la sala de capsulas.")

                    alert (toma4)

                    do {

                        toma5 = prompt ("Ingrese un código numérico de 4 dígitos - INTENTO" + " " + intentos)

                        if (toma5 == null) {
                            break
                        }

                        else if (toma5 == contraseña && intentos <=3) {
                        alert (salvacion)
                        break

                        }else {
                            intentos++
                            if (intentos >3) {
                                alert (muerte)
                                break
                            }
                        }
                    }while (toma5 !== contraseña)

                }else {
                    correccion ("DISPARAR", "ESCAPAR")
                }
            } while (toma3 !== "disparar" && toma3 !== "disparo" && toma3 !== "escapar")
    
        }else {
            correccion ("PUERTA", "DUCTO")
        }
    } while (toma1 !== "puerta" && toma1 !== "ducto" && toma1 !== "ducto de ventilacion")

}while (confirm("¿Quieres volver a jugar?"))