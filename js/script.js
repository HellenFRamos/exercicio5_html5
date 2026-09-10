const canvas = document.getElementById("graficoTreino");
const ctx = canvas.getContext("2d");

ctx.font = "20px Arial";
ctx.fillStyle = "#1E2A22";
ctx.fillText("Treinos realizados na semana", 150, 30);

// Eixo horizontal
ctx.beginPath();
ctx.strokeStyle = "#1E2A22";
ctx.moveTo(60, 240);
ctx.lineTo(550, 240);
ctx.stroke();

const treinos = [
    { nome: "Seg", altura: 90 },
    { nome: "Ter", altura: 130 },
    { nome: "Qua", altura: 70 },
    { nome: "Qui", altura: 150 },
    { nome: "Sex", altura: 110 }
];

treinos.forEach((treino, index) => {
    const x = 90 + index * 90;
    const y = 240 - treino.altura;

    ctx.fillStyle = "#2E6B57";
    ctx.fillRect(x, y, 45, treino.altura);

    ctx.fillStyle = "#1E2A22";
    ctx.font = "14px Arial";
    ctx.fillText(treino.nome, x + 10, 260);

    ctx.fillStyle = "#E0662E";
    ctx.font = "bold 14px Arial";
    ctx.fillText(String(Math.round(treino.altura / 30)), x + 15, y - 8);
});
