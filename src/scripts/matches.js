const myApiKey = 'RGAPI-b7f1621d-68c0-4975-a977-99370dab985b';

let myPuuid = '';

export async function getPuuid(username) {
  const tagStartIdx = username.indexOf('#');
  const gameName = encodeURIComponent(username.slice(0, tagStartIdx));
  const tagName = username.slice(tagStartIdx + 1);

  const apiUrl = `https://corsproxy.io/?https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagName}`;
  try {
      const response = await fetch(apiUrl, {
          headers: {
            'X-Riot-Token': myApiKey 
          }
      });

      if (!response.ok) {
          throw new Error(`Unable to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      myPuuid = data.puuid
      return getMatches(myPuuid);
  } catch (error) {
      console.error('Error fetching data:', error);
      return null;
  }
}


async function getMatches(puuid) {
  const apiUrl = `https://corsproxy.io/?https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=10`
  try {
        const response = await fetch(apiUrl, {
        headers: {
            'X-Riot-Token': myApiKey
        }
        });

        if (!response.ok) {
            throw new Error(`Unable to fetch data. Status: ${response.status}`);
        }

        const matches = await response.json();
        for (let match of matches) {
            getMatchInfo(match);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function getMatchInfo(matchID) {
  const apiUrl = `https://corsproxy.io/?https://americas.api.riotgames.com/tft/match/v1/matches/${matchID}`

  try {
        const response = await fetch(apiUrl, {
        headers: {
            'X-Riot-Token': myApiKey
        }
        });

        if (!response.ok) {
            throw new Error(`Unable to fetch data. Status: ${response.status}`);
        }

        const matchObject = await response.json();
        let currentPlayer = findcurrentPlayer(matchObject);
        buildMatch(currentPlayer)
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function findcurrentPlayer(matchObject) {
    const matchParticipants = matchObject['info']['participants']
    for (let player in matchParticipants) {
        let currentPlayer = matchParticipants[player];
        if (myPuuid === currentPlayer.puuid) {
            return currentPlayer;
        }
    }
}

function buildMatch(player) {
    const matchesDiv = document.querySelector('.matches');
    const matchDiv = document.createElement('div');
    matchDiv.classList = 'match';
    const matchInfoDiv = document.createElement('div');
    matchInfoDiv.classList = 'match-info';
    const tactitianIconDiv = document.createElement('div');
    tactitianIconDiv.id = 'tac-icon';
    const placeFinishedDiv = document.createElement('div');
    placeFinishedDiv.id = 'final-placement';
    const stageFinishedDiv = document.createElement('div');
    stageFinishedDiv.id = 'final-stage';
    const traitsFinishedDiv = document.createElement('div');
    traitsFinishedDiv.id = 'active-traits';
    const unitsFinishedDiv = document.createElement('div');
    unitsFinishedDiv.id = 'final-board';
    const matchContainer = document.createElement('div');
    matchContainer.classList = 'match-container';

    // Get Tactitian Icon
    const tactitianIcon = document.createElement('img');
    tactitianIcon.src = `https://cdn.metatft.com/file/metatft/tacticians/${player['companion']['content_ID']}.png`
    tactitianIconDiv.appendChild(tactitianIcon);
    matchInfoDiv.appendChild(tactitianIconDiv);

    // Get Placement Finished
    const placeFinished = document.createElement('div');
    placeFinished.innerText = player['placement'];
    placeFinished.id = `placement-${player['placement']}`
    placeFinishedDiv.appendChild(placeFinished);
    matchInfoDiv.appendChild(placeFinishedDiv);

    // Get Last Round Played (Stage Finished)
    const stageFinished = document.createElement('div');
    stageFinished.innerText = convertLastRound(player['last_round']);
    stageFinishedDiv.appendChild(stageFinished);
    matchInfoDiv.appendChild(stageFinishedDiv);

    // Get Active Traits
    const activeTraits = fetchTraits(player['traits'].sort((a, b) => b.style - a.style));
    traitsFinishedDiv.appendChild(activeTraits);
    matchInfoDiv.appendChild(traitsFinishedDiv);

    // Get Units Finished
    const finalUnits = fetchUnits(player['units']);
    unitsFinishedDiv.appendChild(finalUnits);
    // matchInfoDiv.appendChild(unitsFinishedDiv);
    
    matchContainer.appendChild(matchInfoDiv);
    matchContainer.appendChild(unitsFinishedDiv);
    matchDiv.appendChild(matchContainer);
    matchesDiv.appendChild(matchDiv);

}

function convertLastRound(lastRound) {
    return (Math.floor((lastRound - 4)/ 7) + 2) + '-' + (((lastRound - 4) % 7))
}

function fetchTraits(traits) {
    const allTraits = document.createElement('div');
    for (let trait of traits) {
        if (trait['tier_current'] >= 1) {
            const traitItem = document.createElement('div');

            const traitImg = document.createElement('img')
            traitItem.classList = 'match-trait'
            traitItem.id = 'tier-' + trait['tier_current'];
            if (trait['style'] === 5) {
                traitItem.style.background = `url(./assets/images/traitbg/unique.png)`
            } else {
                traitItem.style.background = `url(./assets/images/traitbg/${trait['tier_current']}.png)`
            }
            traitItem.style.backgroundRepeat = 'no-repeat';
            traitItem.style.backgroundPosition = 'center';
            traitItem.style.backgroundSize = 'cover';


            traitImg.src = './assets/images/trait-icons/' + trait['name'].slice(6).toLowerCase() + '.png';

            traitItem.appendChild(traitImg);
            allTraits.appendChild(traitItem);
        }
    }
    return allTraits;
}

function fetchUnits(units) {
    const allUnits = document.createElement('div');
    allUnits.classList = 'all-units'
    for (let unit of units) {
        const unitIcon = document.createElement('div');
        unitIcon.classList = 'match-splash';
        const unitName = unit['character_id'].slice(6);
        const unitImg = document.createElement('img');
        
        unitImg.src = `./assets/images/splashes-square/${unitName}.jpg`
        unitIcon.appendChild(unitImg);
        allUnits.appendChild(unitIcon);
    }
    return allUnits;
}

export function clearCurrentPlayer() {
    const matchesDiv = document.querySelector('.matches');
    matchesDiv.innerHTML = '';
  };
