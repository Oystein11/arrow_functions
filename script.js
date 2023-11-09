function get_info () {
    fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
    .then ((response) => response.json())
    .then (data => show_data (data.results));

    show_data = data => {
        const pokemon_info = document.querySelector (".pokemon_info");
        data.for_each (data =>{
            const pokemon_element = document.createElement ("p");
            pokemon_element.innerText = "Pokemon Traits: ${ditto.name}";
            pokemon_info.append (pokemon_element);
        });
    }
}

get_info();
pokemon_info.textContent = get_info;