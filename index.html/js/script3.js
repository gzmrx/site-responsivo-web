
function FontSize(operation) {
    var titulo = document.getElementById('p3');
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
    var titulo = document.getElementById('p3');
    var paragrafo = document.getElementById('h3');
  
    if (isEnglish) {
 
      titulo.textContent = 'MARAGOGI';
      titulo.nextElementSibling.textContent = 'ECONOMIA';
      paragrafo.innerHTML = '<br>A economia de Maragogi é impulsionada pelo turismo, ' +
        '<br>sendo o setor chave para o desenvolvimento local. Com ' +
        '<br>suas belas praias e piscinas naturais, a cidade atrai ' +
        '<br>visitantes de todo o mundo. Os serviços de hospedagem, ' +
        '<br>como hotéis e pousadas, são essenciais para receber os ' +
        '<br>turistas. Além disso, o comércio local e a pesca também ' +
        '<br>contribuem para a economia da região. A cidade continua ' +
        '<br>a crescer como um destino turístico próspero, proporcionando ' +
        '<br>oportunidades de emprego e desenvolvimento para a comunidade.';
      toggleLanguage.textContent = 'English/Portuguese';
      isEnglish = false;
    } else {

      titulo.textContent = 'MARAGOGI';
      titulo.nextElementSibling.textContent = 'ECONOMY';
      paragrafo.innerHTML = '<br>The economy of Maragogi is driven by tourism, ' +
        '<br>which is the key sector for local development. With ' +
        '<br>its beautiful beaches and natural pools, the city attracts ' +
        '<br>visitors from all over the world. Accommodation services, ' +
        '<br>such as hotels and inns, are essential to welcome ' +
        '<br>tourists. Additionally, local commerce and fishing ' +
        '<br>also contribute to the region\'s economy. The city ' +
        '<br>continues to grow as a prosperous tourist destination, providing ' +
        '<br>employment and development opportunities for the community.';
      toggleLanguage.textContent = 'Portuguese/English';
      isEnglish = true;
    }
  }
  