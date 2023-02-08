const clcFatorial = (num) => {
  if (num < 0)
    return -1;
  else if (num == 0)
    return 1;
  else {
    return (num * clcFatorial(num - 1));
  }
}

const subtracao = (num1, num2) => {
  return num1 - num2;
}

const divisao = (dividendo, divisor) => {
  if (divisor === 0) {
    return '0 não pode ser um divisor';
  }
  return (dividendo / divisor).toFixed(2);
}

const potencia = (base, expoente) => {
  return base ** expoente;
}

const raiz = (num) => {
  return (Math.sqrt(num)).toFixed(2);
}

const porcentagem = (num1, num2) => {
  if (num2 === 0) {
    return '0 não pode ser um divisor';
  }
  return Math.round((num1 * 100) / num2, 1);
}

const calcular = (a, b) => {
  const soma = document.getElementById('soma');
  soma.innerHTML = a + b;
  const subtracaoAB = document.getElementById('subtracaoAB');
  subtracaoAB.innerHTML = subtracao(a, b);
  const subtracaoBA = document.getElementById('subtracaoBA');
  subtracaoBA.innerHTML = subtracao(b, a);
  const multiplicacao = document.getElementById('multiplicacao');
  multiplicacao.innerHTML = a * b;
  const divisaoAB = document.getElementById('divisaoAB');
  divisaoAB.innerHTML = divisao(a, b);
  const divisaoBA = document.getElementById('divisaoBA');
  divisaoBA.innerHTML = divisao(b, a);
  const potenciaAemB = document.getElementById('potenciaAemB');
  potenciaAemB.innerHTML = potencia(a, b);
  const potenciaBemA = document.getElementById('potenciaBemA');
  potenciaBemA.innerHTML = potencia(b, a);
  const raizDeA = document.getElementById('raizDeA');
  raizDeA.innerHTML = raiz(a);
  const raizDeB = document.getElementById('raizDeB');
  raizDeB.innerHTML = raiz(b);
  const fatorialDeA = document.getElementById('fatorialDeA');
  fatorialDeA.innerHTML = clcFatorial(a);
  const fatorialDeB = document.getElementById('fatorialDeB');
  fatorialDeB.innerHTML = clcFatorial(b);
  const porcentagemAB = document.getElementById('porcentagemAB');
  porcentagemAB.innerHTML = porcentagem(b, a);
  const porcentagemBA = document.getElementById('porcentagemBA');
  porcentagemBA.innerHTML = porcentagem(a, b);
  const media = document.getElementById('media');
  media.innerHTML = (a + b) / 2;
};

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', () => {
  const numeroA = document.getElementById('numeroA');
  const numeroB = document.getElementById('numeroB');
  calcular(Number(numeroA.value), Number(numeroB.value));
})