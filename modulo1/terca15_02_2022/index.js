const palavrasChave = [
  'STREAM OBS',
  'stream obs delay',
  'stream',
  'obs',
  'delay',
  'pia area de serviço',
  'pia',
  'meu nome',
  'nome',
];

const inputBusca = document.querySelector('#inputBusca');

/**
 * @description mostrar resultados da busca
 *
 * @param {Event} e evento do elemento
 **/
function showBarraDeBusca(e) {
  const barraDeBusca = document.querySelector('#busca');
  if (!barraDeBusca) return;

  const { value: texto } = e.target;

  // Se tiver acima de 1 caracter ele poe classe, se não remove
  if (texto.length == 0) {
    barraDeBusca.classList.remove('visivel');
    return;
  }

  const palavrasAchadas = palavrasChave
    .map((palavra) => {
      const formatPalavra = palavra.toLowerCase();
      const formatTexto = texto.toLowerCase();
      if (!formatPalavra.includes(formatTexto)) return;
      return `<li>${palavra}</li>`;
    })
    .filter((_) => _)
    .join('');

  if (!palavrasAchadas) {
    barraDeBusca.innerHTML =
      'Não foram encontradas palavras para este resultado';
    return;
  }

  barraDeBusca.classList.add('visivel');

  barraDeBusca.innerHTML = palavrasAchadas;
}

inputBusca && inputBusca.addEventListener('input', showBarraDeBusca);
