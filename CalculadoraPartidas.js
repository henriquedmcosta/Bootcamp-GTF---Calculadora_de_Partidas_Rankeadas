function num_vitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

const vitorias = 600;
const derrotas = 100;
const saldo_vitorias = num_vitorias(vitorias, derrotas)

if (vitorias <= 10) {
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendario";
} else {
    nivel = "Imortal";
}

console.log("O Herói tem de saldo de " + saldo_vitorias +  " vitorias está no nível de " + nivel)