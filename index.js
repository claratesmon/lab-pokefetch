async function getPokemon() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const jsonResponse = await response.json()
        
        jsonResponse.results.forEach(async(pokemon) => { ///make callback async 
            const list = document.querySelector("#list")
            const liElement = document.createElement("li")
            liElement.innerHTML = `<h3>${pokemon.name}</h3>`
            list.appendChild(liElement)
            
            const imgResponse = await fetch(pokemon.url)
            const jsonImgResponse = await imgResponse.json()
            console.log(jsonImgResponse) ////get the image form the data we just extracted
            liElement.innerHTML += `<img src=${jsonImgResponse.sprites.front_shiny} alt=${pokemon.name}>`
              

        });


    } catch (error){
        console.error(error)
    }
}

getPokemon()