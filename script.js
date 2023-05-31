const api_url = "https://api.quotable.io/random";

async function getqoute(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

getqoute(api_url);