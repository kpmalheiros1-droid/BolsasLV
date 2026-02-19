// Define o intervalo
const min_value = 400;
const max_value = 600;

// FunÃ§Ã£o para gerar um nÃºmero aleatÃ³rio dentro do intervalo especificado
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define o nÃºmero inicial de pessoas online
let numero_pessoas = getRandomInt(min_value, max_value);

// Loop infinito
setInterval(() => {
  // Incrementa ou decrementa o nÃºmero de pessoas online por um valor aleatÃ³rio entre -10 e 10
  numero_pessoas += getRandomInt(-10, 10);
  
  // Garante que o nÃºmero de pessoas online permaneÃ§a dentro do intervalo
  numero_pessoas = Math.min(Math.max(numero_pessoas, min_value), max_value);
  
  // Exibe o nÃºmero de pessoas online
  console.log("Pessoas online:", numero_pessoas);
  document.getElementById("pessoaqui").innerHTML = numero_pessoas;
}, 1000); // Executa a cada segundo (1000 milissegundos)