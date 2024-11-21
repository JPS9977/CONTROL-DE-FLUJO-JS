//let edad = prompt("Ingrese su edad")

//console.log(Number(edad))
//cls.edad = (parseInt(edad))

//let comprobarEdad = Number(edad) > 18

//console.log(comprobarEdad)


//SWITCH

//let dia = 15

// switch (key) {
//     case `lunes`:
//         console.log(`Es Lunes`)
//         break;
//     case `martes`:
//         console.log(`Es martes`)
//         break;
//     case `miercoles`:
//         console.log(`Es miercoles`)
//         break;
//     case `jueves`:
//         console.log(`Es jueves`)
//         break;
//     case `viernes`:
//         console.log(`Es viernes`)
//         break;

//     default:
//         console.log(`Es fin de semana`)
//         break;
// }

//FOR

// let iterador = 10 

// for (let i = 0; i < iterador ; i++){
//     console.log(i)
// }

//FOR OF

// let lista = [`manzana`, `pera`, `banana`]

// for (fruta of lista){
//     console.log(fruta)
// }


//FOR IN

const persona ={
    edad: 15,
    nombre: `Loan`,
    apellido:`Urribarri`,
    mayorEdad: false,
}

for(clave in persona){
    console.log(`${clave} => ${persona[clave]}`)
}