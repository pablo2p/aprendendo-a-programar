const findLista = document.querySelector('#listaRepositories');

(async function findRepositories(user) {
    // fetch(`https://api.github.com/users/${user}/repos`)
    // .then(result => result.json())
    // .then(repositories => {
    //     const listaRepos = repositories.map(repositorie => {
    //         const name = repositorie['name'];
    //         return `
    //             <li>${name}</li>
    //         `;
    //     }).join('');
    //     findLista.innerHTML = listaRepos;
    // })
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const repositories = await response.json();

    const listaRepos = repositories.map(repositorie => {
        const name = repositorie['name'];
        return `
            <li>${name}</li>
        `;
    }).join('');
    findLista.innerHTML = listaRepos;
})('bchiang7');