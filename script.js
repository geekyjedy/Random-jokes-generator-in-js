document.addEventListener('click',joker);
function joker(){
    fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json()).then((data) =>( document.getElementById('joke').innerHTML = data.value));
}
Window.onload = joker()