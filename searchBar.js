const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");
const searchResultsContainer = document.getElementById("search-results-container");

const possibleSearches = [
    "home",
    "sports massage",
    "reflexology",
    "swedish massage",
    "indian head massage",
    "la stone therapy",
    "corporate pamper days",
    "peer-to-peer massages",
];

const searchResultLinks = {
    "home": "index.html",
    "sports massage": "sportsMassage.html",
    "reflexology": "reflexology.html",
    "swedish massage": "swedishMassage.html",
    "indian head massage": "indianHeadMassage.html",
    "la stone therapy": "stoneTherapy.html",
    "corporate pamper days": "pamperDays.html",
    "peer-to-peer massages": "peerToPeer.html",
}

const createSearchResult = (result) => {
    const html = `
        <li>
            <a class="result search-result" href=${searchResultLinks[result]}>
                ${result}
            </a>
        </li>
    `;

    searchResultsContainer.insertAdjacentHTML("beforeend", html);
}

const clearResults = () => searchResultsContainer.innerHTML = "";

const displayResults = (results) => {
    clearResults();

    if (!results.length) {
        showNoResultsFound();
    } else {
        results.forEach(result => createSearchResult(result));
    }
}

const showNoResultsFound = () => {
    const html = `
        <li>
            <a class="result">
                No results found
            </a>
        </li>
    `;

    searchResultsContainer.insertAdjacentHTML("beforeend", html);
}

const findSearchResults = (query) => {
    return possibleSearches.filter((search) => search.includes(query));
}

const processSearch = () => {
    const searchQuery = searchField.value.toLowerCase();

    if (searchQuery.trim() === "") return;

    const results = findSearchResults(searchQuery);
    displayResults(results);
}

const hideSearchResults = ({target}) => {
    if (!target.closest(".search-container")) {
        clearResults();
    }
}

searchButton.addEventListener("click", processSearch);
document.addEventListener("click", hideSearchResults);
searchField.addEventListener("search", clearResults);
