const searchElement = document.querySelector("#searchElement");
const resultsElement = document.querySelector("#resultsElement");
let previousSearchRes = searchElement.value;
let searchData;
const baseURL = "https://api.jikan.moe/v4/anime";

async function getData(baseURL, searchTerm) {
    const query = new URLSearchParams({
        q: searchTerm,
    });

    try {
        const response = await fetch(`${baseURL}?${query}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function showMoreInfo(malId, descrText) {
    const moreInfoElem = document.createElement("p");
    moreInfoElem.classList.add("moreInfo");
    moreInfoElem.innerHTML = addLineBreaks(descrText);
    document.getElementById(malId).appendChild(moreInfoElem);
}

function addLineBreaks(text) {
    return text.replace(/(\r\n|\r|\n)/g, "<br>");
}

searchElement.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && searchElement.value) {
        const uriSafeSearchTerm = encodeURIComponent(searchElement.value);
        if (previousSearchRes !== searchElement.value) {
            searchData = await getData(baseURL, uriSafeSearchTerm);
            previousSearchRes = searchElement.value;
        }

        console.log(searchData.data);
        resultsElement.innerHTML = "";
        for (const value of searchData.data) {
            const titleElem = `<p class="animeTitles"><a href="${value.url}">${
                value.title
            }${value.title_english ? ` (${value.title_english})` : ""}</a></p>`;
            const imageElem = `<img class="animeImg" id="${value.mal_id}IMG" src="${value.images.jpg.image_url}" title="${value.title_japanese}">`;
            const animeElem = document.createElement("div");
            animeElem.classList.add("anime");
            animeElem.id = value.mal_id;
            animeElem.innerHTML = `${titleElem}${imageElem}`;
            resultsElement.appendChild(animeElem);

            if (value.synopsis) {
                showMoreInfo(value.mal_id, value.synopsis);
            }
        }
    }
});
