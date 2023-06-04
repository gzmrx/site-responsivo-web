
function FontSize(operation) {
    var titulo = document.getElementById('p5');
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
    var titulo = document.getElementById('p5');
    var paragrafo = document.getElementById('h5');
    var toggleLanguage = document.getElementById('toggleLanguage');
  
    if (isEnglish) {
 
      titulo.textContent = 'MARAGOGI';
      titulo.nextElementSibling.textContent = 'TURISMO';
      paragrafo.innerHTML = '<br>Maragogi encanta turistas com suas praias ' +
        '<br>paradisíacas e águas cristalinas. As Galés, ' +
        '<br>piscinas naturais formadas por corais, são a ' +
        '<br>atração principal. Além disso, as praias como ' +
        '<br>Antunes e Barra Grande encantam com sua beleza. ' +
        '<br>A gastronomia com frutos do mar frescos é um deleite. ' +
        '<br>Maragogi é um destino turístico encantador para relaxar ' +
        '<br>e desfrutar da natureza exuberante.';
      toggleLanguage.textContent = 'English/Portuguese';
      isEnglish = false;
    } else {

      titulo.textContent = 'MARAGOGI';
      titulo.nextElementSibling.textContent = 'TOURISM';
      paragrafo.innerHTML = '<br>Maragogi enchants tourists with its ' +
        '<br>paradisiacal beaches and crystal-clear waters. The ' +
        '<br>Gales, natural pools formed by coral reefs, are the ' +
        '<br>main attraction. Additionally, beaches like Antunes ' +
        '<br>and Barra Grande captivate with their beauty. The ' +
        '<br>gastronomy with fresh seafood is a delight. Maragogi ' +
        '<br>is a charming tourist destination to relax and enjoy ' +
        '<br>the breathtaking nature.';
      toggleLanguage.textContent = 'Portuguese/English';
      isEnglish = true;
    }
  }