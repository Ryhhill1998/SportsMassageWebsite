const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");

const searchResultLinks = {
    "home": "index.html",
    "sports massage": "sportsMassage.html",
    "reflexology": "reflexology.html",
    "swedish massage": "swedishMassage.html",
    "indian head massage": "indianHeadMassage.html",
    "la stone therapy": "stoneTherapy.html",
    "corporate pamper days": "pamperDays.html",
    "peer to peer massages": "peerToPeer.html",
}

const processSearch = () => {
    const searchQuery = searchField.value;
    const resultLink = searchResultLinks[searchQuery];

    if (!resultLink) return;

    location.href = searchResultLinks[searchQuery];
}

searchButton.addEventListener("click", processSearch);
