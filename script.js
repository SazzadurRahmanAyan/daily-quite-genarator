const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getqoute(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getqoute(api_url);

function  facebook() {
    window.open("https://www.facebook.com/sharer/sharer.php?text=" + quote.innerHTML + "---- by" + author.innerHTML, "fb window", "width=600, height=300");
}