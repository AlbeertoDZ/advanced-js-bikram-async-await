//DESARROLLA AQUI TUS SOLUCIONES


//      ### Ejercicios Pokémon ###

// Ejercicio 1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.
async function getRandomPokemon() {
    const pokAleatorio = 1 + Math.floor(Math.random() * 100);
    console.log(pokAleatorio);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokAleatorio}`);

        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Hubo un problema con la solicitud',error.message);
    }
} 
getRandomPokemon().then((data) => console.log(data))

// async function getRandomPokemon() {
//     const pokAleatorio = Math.floor(Math.random() * 1302);
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokAleatorio}`)
//     const data = await response.json();
//     return data;
// }


// Ejercicio 2.- Declara una funcion **getImageAndName** que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
async function getImageAndName(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        let name = data.name;
        let img = data.sprites.front_default;
        pokemonInfo.push({
            name: name,
            img: img,
        });
        return {name, img}
    } 
    catch (error) {
        console.error('Hubo un problema con la solucitud',error.message);
    }
} 

getImageAndName("squirtle");

// Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:
/*
```html
<section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section>
```
*/
// let pokemonInfo = []
// async function printImageAndName(){
//     const imagenElemento = document.createElement("img");
//     const nombreElemento = document.createElement("h1");
//     imagenElemento.src = pokemonInfo[0].img;
//     nombreElemento.textContent = pokemonInfo[0].name;
//     document.body.appendChild(imagenElemento);
//     document.body.appendChild(nombreElemento);
//     return `<section>
//     <img src="${imagenElemento}" alt="${nombreElemento}">
//     <h1>${nombreElemento}</h1>
// </section>`;
// }

async function printImageAndName() {
    let pokRandom = Math.floor(Math.random() * 151) + 1
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokRandom}`)
    let pokemon = await response.json()
    let name = pokemon.name
    let img = pokemon.sprites.front_default

    return `<section>
    <img src="${img}" alt="${name}>
    <h1>${name}</h1>
    </section>`
}

//      ### Ejercicios Batalla entre Pokemon y perritos ###

// Ejercicio 4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio
async function getRandomDogImage() {
        try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`);

        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        return data.message;
    } 
    catch (error) {
        console.error('Hubo un problema con la solucitud',error.message);
    }
} 
//Ejercicio 5.- Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio.
async function getRandomPokemonImage() {
    const pokAleatorio = 1 + Math.floor(Math.random() * 100);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokAleatorio}`);

        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        let img = data.sprites.front_default;
        return img
    } 
    catch (error) {
        console.error('Hubo un problema con la solucitud',error.message);
    }
} 
//Ejercicio 6.- Declara una función **printPugVsPikachu** que pinte la batalla entre "Pug" y "Pikachu" (no se testea)



//      ### Ejercicios con Rick and Morty ###

//Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.

async function getRandomCharacter() {
    const persAleatorio = 1 + Math.floor(Math.random() * 100);
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${persAleatorio}`);

        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un problema con la solucitud',error.message);
    }
} 
getRandomCharacter().then((data) => console.log(data))

//Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

async function getRandomCharacterInfo() {
    let random = 1 + Math.floor(Math.random() * 100) ;
    let response = await fetch(`https://rickandmortyapi.com/api/character/${random}`) 
    let character = await response.json()
    let img = character.image
    let name = character.name
    let episodes = character.episode

    let episodeInfo = await fetch(character.episode[0]) 

    let dataEpisode = await episodeInfo.json()

    let firstEpisode = dataEpisode.name

    let dateEpisode = dataEpisode.air_date

    return {img, name, episodes, firstEpisode, dateEpisode}
}

getRandomCharacterInfo()

