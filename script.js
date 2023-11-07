function get_info () {
    fetch ("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then ((data) => {
        console.log (data);
    })
    .catch ((error) => console.log (error));
}

get_info();