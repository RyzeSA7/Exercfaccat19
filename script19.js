let nome = prompt("Digite o seu nome:");
let altura = parseFloat(prompt("Digite sua altura em metros:"))
let sexo = prompt("Digite seu sexo (M ou F):").toUpperCase() // Para garantir que seja em maiúsculas

// Calcular o peso ideal
let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58
} else if (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7
} else {
    console.log("Sexo inválido. Por favor, digite 'M' ou 'F'.")
}

// Exibir o peso ideal, se válido
if (pesoIdeal !== undefined) 
    console.log(`O peso ideal de ${nome} é: ${pesoIdeal.toFixed(2)} kg.`)