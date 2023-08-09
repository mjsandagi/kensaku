const searchElement = document.querySelector("#searchElement");
const resultsElement = document.querySelector("#resultsElement");

const baseURL = "https://api.jikan.moe/v4/anime";
params = {};

async function getData(baseURL, searchTerm) {
    query = new URLSearchParams({
        q: searchTerm,
    });
    try {
        let response = await fetch(`${baseURL}?${query}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

searchElement.addEventListener("keydown", async (event) => {
    if (event.key == "Enter" && searchElement.value) {
        let uriSafeSearchTerm = encodeURIComponent(searchElement.value);
        console.log(uriSafeSearchTerm);
        let searchData = await getData(baseURL, uriSafeSearchTerm);
        console.log(searchData.data);
    }
});
