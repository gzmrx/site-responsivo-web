
function FontSize(operation) {
    var titulo = document.getElementById('p2');
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
  
  
 // script2.js

var isEnglish = false; // Variável para controlar o estado do idioma

// Função para alternar entre os idiomas
function toggleLanguage() {
  var titulo = document.getElementById('p2');
  var paragrafo = document.getElementById('h2');

  if (isEnglish) {
    // Altera para o idioma original (português)
    titulo.textContent = 'MARAGOGI';
    titulo.nextElementSibling.textContent = 'CULTURA';
    paragrafo.innerHTML = '<br>A cultura de Maragogi é rica e diversa, influenciada pela herança indígena, ' +
      '<br>africana e portuguesa. A música tradicional, como o coco de roda e o forró, ' +
      '<br>anima festas e celebrações. A culinária destaca-se pelos pratos deliciosos ' +
      '<br>à base de frutos do mar frescos. Festas como o São João e a Festa de ' +
      '<br>Nossa Senhora da Conceição são momentos de alegria e devoção. A cultura artesanal ' +
      '<br>ém é valorizada na cidade. Em resumo, Maragogi é um lugar onde a cultura é viva ' +
      '<br>e presente em todos os aspectos da vida local.';
    isEnglish = false;
  } else {
    // Altera para o idioma inglês
    titulo.textContent = 'MARAGOGI';
    titulo.nextElementSibling.textContent = 'CULTURE';
    paragrafo.innerHTML = '<br>The culture of Maragogi is rich and diverse, influenced by indigenous, ' +
      '<br>African, and Portuguese heritage. Traditional music, such as coco de roda and forró, ' +
      '<br>enlivens parties and celebrations. The cuisine stands out with delicious dishes ' +
      '<br>made with fresh seafood. Festivals like São João and the Festival of ' +
      '<br>Nossa Senhora da Conceição are moments of joy and devotion. Artisanal culture ' +
      '<br>is also valued in the city. In summary, Maragogi is a place where culture is vibrant ' +
      '<br>and present in all aspects of local life.';
    isEnglish = true;
  }
}
