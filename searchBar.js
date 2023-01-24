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
            <a class="search-result" href=${searchResultLinks[result]}>
                ${result}
            </a>
        </li>
    `;

    searchResultsContainer.insertAdjacentHTML("beforeend", html);
}

const displayResults = (results) => {
    searchResultsContainer.innerHTML = "";
    results.forEach(result => createSearchResult(result));
}

const findSearchResults = (query) => {
    return possibleSearches.filter((search) => search.includes(query));
}

const processSearch = () => {
    const searchQuery = searchField.value.toLowerCase();
    console.log(searchQuery);

    if (searchQuery.trim() === "") return;
    console.log(searchQuery)

    const results = findSearchResults(searchQuery);

    console.log(results);

    if (!results.length) return;

    displayResults(results);
}

searchButton.addEventListener("click", processSearch);
