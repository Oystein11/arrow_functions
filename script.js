const boredCard = document.querySelector (".bored_card");

function get_info () {
    fetch ("https://www.boredapi.com/api/activity")
    .then ((response) => response.json())
    .then ((data) => {
        console.log (data);
    })
    .catch ((error) => console.log (error));
}

get_info();