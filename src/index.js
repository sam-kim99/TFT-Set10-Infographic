import { fetchChampionInfo } from "./scripts/champions";
import { originTraits, createTraits, classTraits } from "./scripts/traits";
import { getPuuid, clearCurrentPlayer } from "./scripts/matches.js"

document.addEventListener('DOMContentLoaded', function() {
    fetchChampionInfo();
    createTraits(originTraits);
    createTraits(classTraits);

    const fetchUsername = document.querySelector('#search');
    const userInput = document.querySelector('#search-riot-id');

    fetchUsername.addEventListener('submit', e => {
        e.preventDefault();
        clearCurrentPlayer();
        getPuuid(userInput.value); 
    });
});