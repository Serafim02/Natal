const dataNatal = new Date('2023-12-25T00:00:00');

function atualizarContagemRegressiva() {
  // Obtém a data e hora atuais
  const agora = new Date();

  // Calcula a diferença em milissegundos entre as datas
  const diferenca = dataNatal - agora;

  // Calcula dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza o elemento HTML com a contagem regressiva
  document.getElementById('countdown').innerHTML = `
    <p>${dias} dias</p>
    <p>${horas} horas</p>
    <p>${minutos} minutos</p>
    <p>${segundos} segundos</p>
  `;

  // Atualiza a largura da barra de progresso com base na porcentagem de tempo restante
  const progresso = (1 - diferenca / (1000 * 60 * 60 * 24 * 60)) * 100;
  document.getElementById('progress-bar').style.width = progresso + "%";
}

// Atualiza a contagem regressiva e a barra de progresso a cada segundo
setInterval(atualizarContagemRegressiva, 1000);

// Inicializa a contagem regressiva e a barra de progresso ao carregar a página
atualizarContagemRegressiva();