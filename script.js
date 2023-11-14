function calcular() {
    var tipo = document.getElementById('tipo').value;
    var n = parseInt(document.getElementById('n').value);
    var r = parseInt(document.getElementById('r').value);

    switch (tipo) {
      case 'permutacaoSemRepeticao':
        calcularPermutacaoSemRepeticao(n, r);
        break;
      case 'arranjoSemRepeticao':
        calcularArranjoSemRepeticao(n, r);
        break;
      case 'combinacaoSemRepeticao':
        calcularCombinacaoSemRepeticao(n, r);
        break;
      case 'permutacaoComRepeticao':
        calcularPermutacaoComRepeticao(n, r);
        break;
      case 'arranjoComRepeticao':
        calcularArranjoComRepeticao(n, r);
        break;
      case 'combinacaoComRepeticao':
        calcularCombinacaoComRepeticao(n, r);
        break;
      default:
        alert('Escolha um tipo válido.');
    }
  }

  function calcularPermutacaoSemRepeticao(n, r) {
    var resultado = 1;
    for (var i = n; i > n - r; i--) {
      resultado *= i;
    }
    exibirResultado(resultado);
  }

  function calcularArranjoSemRepeticao(n, r) {
    var resultado = 1;
    for (var i = n; i > n - r; i--) {
      resultado *= i;
    }
    exibirResultado(resultado / fatorial(r));
  }

  function calcularCombinacaoSemRepeticao(n, r) {
    var resultado = fatorial(n) / (fatorial(r) * fatorial(n - r));
    exibirResultado(resultado);
  }

  function calcularPermutacaoComRepeticao(n, r) {
    var resultado = Math.pow(n, r);
    exibirResultado(resultado);
  }

  function calcularArranjoComRepeticao(n, r) {
    var resultado = Math.pow(n, r);
    exibirResultado(resultado);
  }

  function calcularCombinacaoComRepeticao(n, r) {
    var resultado = fatorial(n + r - 1) / (fatorial(r) * fatorial(n - 1));
    exibirResultado(resultado);
  }

  function fatorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  function exibirResultado(resultado) {
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
  }