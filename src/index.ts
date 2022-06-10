let vuelta1 = document.getElementById("vuelta1");
let vuelta2 = document.getElementById("vuelta2");
let vuelta3 = document.getElementById("vuelta3");
let vuelta4 = document.getElementById("vuelta4");
let btnSend = document.getElementById("send");

btnSend?.addEventListener("click", () => {
  let vueltas1: number = vuelta1.value;
  let vueltas2: number = vuelta2.value;
  let vueltas3: number = vuelta3.value;
  let vueltas4: number = vuelta4.value;

  let tiempoTotal: number = vueltas1 + vueltas2 + vueltas3 + vueltas4;

  console.log("Tiempo Total:", tiempoTotal);
  console.log("Promedio de vuelta:", tiempoTotal / 4);
});
