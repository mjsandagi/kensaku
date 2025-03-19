# Kensaku

Kensaku is an anime search app that allows users to search for their favorite anime using the Jikan MyAnimeList API. The app is built using JavaScript, HTML, and CSS.

## Features

-   Search for anime titles using keywords.
-   View detailed information about each anime.
-   Displays anime cover images and descriptions.
-   Responsive design for seamless usage on different devices.

## Demo

You can see a live demo of the app [here](https://mjsandagi.github.io/kensaku).

-   GitHub Pages: [mjsandagi.github.io/kensaku](https://mjsandagi.github.io/kensaku)

-   Vercel deployment: [kensaku.vercel.app](https://kensaku.vercel.app/)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/mjsandagi/kensaku.git
    ```

2. Navigate to the project directory:

```powershell
cd kensaku
```

3. Open `index.html`.

## The Jikan (MyAnimeList) API

-   #### This is built using the [Jikan API](https://jikan.moe) - A RESTful API for [MyAnimeList](https://myanimelist.net/).

## How it works

-   The app uses the Jikan API to fetch anime data based on the user's search query.
-   The user enters a search query in the input field and clicks the search button.
-   The app fetches the anime data from the Jikan API and displays the results on the page.
-   The user can click on an anime to view more details about it.

-   **Key Elements:**

    -   `searchElement` for user input.
    -   `resultsElement` for displaying search results.
    -   `baseURL` is the API endpoint.
    -   `timeoutId` handles debouncing to limit API request frequency.

-   **Functions:**

    -   `getData(baseURL, searchTerm)`: Fetches data from the API.
    -   `showMoreInfo(malId, descrText)`: Displays additional information if available.
    -   `addLineBreaks(text)`: Formats text with line breaks.
    -   `debounce(func, delay)`: Limits the frequency of API requests.

-   **Image Filtering:**
    -   Displays only images where the height is greater than the width.
