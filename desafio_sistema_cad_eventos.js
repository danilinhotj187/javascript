
// Menu de opções
console.log("Escolha o tipo de evento:");
console.log("1. Workshop");
console.log("2. Palestra");
console.log("3. Hackathon");

const opcao = 1; // Altere para testar (exemplo: escolha 1 para Workshop)

// Variáveis para armazenar os dados
let tipoEvento = "";
let custoTotal = 0;

switch (opcao) {
  case 1: // Workshop
    tipoEvento = "Workshop";
    const participantes = 20; // Altere para testar (exemplo: 20 participantes)
    custoTotal = participantes * 50;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Número de participantes: ${participantes}`);
    break;

  case 2: // Palestra
    tipoEvento = "Palestra";
    const duracao = 3; // Altere para testar (exemplo: 3 horas)
    custoTotal = duracao * 100;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Duração: ${duracao} horas`);
    break;

  case 3: // Hackathon
    tipoEvento = "Hackathon";
    const dias = 2; // Altere para testar (exemplo: 2 dias)
    const equipes = 5; // Altere para testar (exemplo: 5 equipes)
    custoTotal = dias * equipes * 500;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Número de dias: ${dias}`);
    console.log(`Número de equipes: ${equipes}`);
    break;

  default: // Opção inválida
    console.log("Opção inválida");
    break;
}

// Exibir o custo total, caso seja válido
if (custoTotal > 0) {
  console.log(`Custo total: R$ ${custoTotal}`);
}

