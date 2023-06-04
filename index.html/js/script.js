
function FontSize(operation) {
  var titulo = document.getElementById('p1');
  var paragrafos = document.getElementsByTagName('p');

  var incremento;
  if (operation === 'A+') {
    incremento = 2; 
  } else if (operation === 'A-') {
    incremento = -2; 
  } else {
    return; 
  }

  aumentarTamanhoFonte(titulo, incremento);
  for (var i = 0; i < paragrafos.length; i++) {
    aumentarTamanhoFonte(paragrafos[i], incremento);
  }
}


function aumentarTamanhoFonte(elemento, incremento) {
  var tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize);
  var novoTamanho = tamanhoAtual + incremento + 'px';
  elemento.style.fontSize = novoTamanho;
}


var isEnglish = false; 


function toggleLanguage() {
  var titulo = document.getElementById('p1');
  var paragrafo = document.getElementById('h4');

  if (isEnglish) {

    titulo.textContent = 'MARAGOGI';
    paragrafo.innerHTML = 'Maragogi, um paraíso tropical no nordeste do Brasil, <br>' +
      'é um destino de tirar o fôlego. Localizada no estado <br>' +
      'de Alagoas, essa pequena cidade costeira encanta os <br>' +
      'visitantes com suas praias de águas cristalinas e <br>' +
      'areias brancas.';
    isEnglish = false;
  } else {

    titulo.textContent = 'MARAGOGI';
    paragrafo.innerHTML = 'Maragogi, a tropical paradise in northeastern Brazil, <br>' +
      'is a breathtaking destination. Located in the state <br>' +
      'of Alagoas, this small coastal town enchants visitors <br>' +
      'with its crystal-clear waters and white sands.';
    isEnglish = true;
  }
}
