const buscarPokemon = document.getElementById('buscarPokemon');

function buscaPoke(e) {
    e.preventDefault();
    const pokemonName = document.getElementById('pokemonName');
    const texto = pokemonName.value;

    const resultadoPokemon = document.getElementById('resultadoPokemon');

    if(!texto.length) {
        resultadoPokemon.innerHTML = 'Você precisa digitar o nome de um pokemon'
        return
    };

    const url = `https://pokeapi.co/api/v2/pokemon/${texto}`;
    fetch(url).then(r => r.json())
    .then(dado => {
        if(!dado || dado && !dado.sprites) return;
        
        const el = document.createElement('li');
        const frontShinyImage = dado.sprites.front_shiny;
        el.innerHTML = `
            <img src="${frontShinyImage}" alt="pokemon" />
        `;
        resultadoPokemon.innerHTML = '';
        resultadoPokemon.appendChild(el);
        console.log(dado)
    })
    .catch(e => {
        resultadoPokemon.innerHTML = 'Pokemon Não encontrado!'
    })
}

buscarPokemon.addEventListener('click', buscaPoke)

// fetch('https://pokeapi.co/api/v2/pokemon/charmander')
// .then(resposta => resposta.json())
// .then((dado) => {
//     console.log(dado)
//     // const frontShinyImage = dado.sprites.front_shiny;
//     // const image = document.createElement('img');
//     // image.src = frontShinyImage;
//     // document.body.appendChild(image)
// })