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

function showMoreInfo(malId, descrText) {
    document.getElementById(
        malId
    ).innerHTML += `<p class="moreInfo">${descrText}</p>`;
}

function addLineBreaks(text) {
    return text.replace(/(\r\n|\r|\n)/g, "<br>");
}

searchElement.addEventListener("keydown", async (event) => {
    if (event.key == "Enter" && searchElement.value) {
        let uriSafeSearchTerm = encodeURIComponent(searchElement.value);
        // console.log(uriSafeSearchTerm);
        let searchData = await getData(baseURL, uriSafeSearchTerm);
        console.log(searchData.data);
        resultsElement.innerHTML = "";
        for (const [key, value] of Object.entries(searchData.data)) {
            console.log(value.synopsis);
            if (value.title_english) {
                var titleElem = `<p><a href="${value.url}">${value.title} (${value.title_english})</a></p>`;
            } else {
                var titleElem = `<p><a href="${value.url}">${value.title}</a></p>`;
            }
            let imageElem = `<img class="animeImg" id="${value.mal_id}IMG" src="${value.images.jpg.image_url}" title="${value.title_japanese}">`;
            let finalElem = `<div class="anime" id="${value.mal_id}">${titleElem}${imageElem}</div>`;
            resultsElement.innerHTML += `${finalElem}`;
            if (value.synopsis) {
                showMoreInfo(value.mal_id, addLineBreaks(value.synopsis));
            }
        }
    }
});
