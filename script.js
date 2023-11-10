const pokemon_info = document.querySelector (".pokemon_info");
const pokemon_element = document.createElement ("p");

function get_info () {
    fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
    .then ((response) => response.json())
    .then (data => {
        console.log (data);
        show_data (data.results)});
}

show_data = data => {
        pokemon_element.innerText = "Pokemon Traits: ${ditto.name}";
        pokemon_info.append (pokemon_element);
        pokemon_info.textContent = get_info;
};

get_info();
