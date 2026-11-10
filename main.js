
const carros = [
    { modelo: "Gol",     marca: "Volkswagen", ano: 1980, categoria: "Hatch",  motor: "1.0",       preco: 18000.00 },
    { modelo: "Uno",     marca: "Fiat",       ano: 1984, categoria: "Hatch",  motor: "1.0",       preco: 16000.00 },
    { modelo: "Corsa",   marca: "Chevrolet",  ano: 1994, categoria: "Hatch",  motor: "1.0",       preco: 17000.00 },
    { modelo: "Celta",   marca: "Chevrolet",  ano: 2000, categoria: "Hatch",  motor: "1.0 VHC",   preco: 20000.00 },
    { modelo: "Palio",   marca: "Fiat",       ano: 1996, categoria: "Hatch",  motor: "1.0 Fire",  preco: 19000.00 },
    { modelo: "Fusca",   marca: "Volkswagen", ano: 1959, categoria: "Sedan",  motor: "1.3 boxer", preco: 45000.00 },
    { modelo: "Kombi",   marca: "Volkswagen", ano: 1957, categoria: "Utilitário", motor: "1.4 boxer", preco: 70000.00 },
    { modelo: "Chevette", marca: "Chevrolet", ano: 1973, categoria: "Hatch",  motor: "1.6",       preco: 30000.00 },
    { modelo: "Monza",   marca: "Chevrolet",  ano: 1982, categoria: "Sedan",  motor: "1.8",       preco: 28000.00 },
    { modelo: "Santana", marca: "Volkswagen", ano: 1984, categoria: "Sedan",  motor: "1.8",       preco: 32000.00 },
    { modelo: "Escort",  marca: "Ford",       ano: 1983, categoria: "Hatch",  motor: "1.6",       preco: 25000.00 },
    { modelo: "Opala",   marca: "Chevrolet",  ano: 1968, categoria: "Sedan",  motor: "4.1 L6",    preco: 90000.00 }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let carro of carros) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${carro.modelo}</td>
        <td>${carro.marca}</td>
        <td>${carro.ano}</td>
        <td>${carro.categoria}</td>
        <td>${carro.motor}</td>
        <td class="preco">${carro.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</td>
    `;

    corpoTabela.appendChild(linha);
}
