//from api documentation
const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.messivsronaldo.app/page-data/index/page-data.json');

let finalCollectedData;

const fetchData = (async () => {
  try {
    const response = await fetch(url);
    finalCollectedData = await response.json(); 
    console.log(finalCollectedData); 
    return finalCollectedData; 
  } catch (error) {
    console.error(error);
  }
})();

function changeHtmlElements(elementName, value) {
  document.getElementById(elementName).innerHTML = value;
}


function changePlayer(playerName, goal, assists, hattricks, appearences, freekicks, averageRating) {
  changeHtmlElements(playerName + "-goal", goal)
  changeHtmlElements(playerName + "-assist", assists)
  changeHtmlElements(playerName + "-hat", hattricks)
  changeHtmlElements(playerName + "-app", appearences)
  changeHtmlElements(playerName + "-freek", freekicks)
  changeHtmlElements(playerName + "-avrg", averageRating)
}


//goal(goals), assists(assists), hattricks(hatTricks), appearences(apps)


async function updateMessiData() {
  await fetchData;
  var messiRealTime = finalCollectedData.result.data.allSheetMessiAllTimeStats.edges[0].node;
  changePlayer("messi", messiRealTime.goals, messiRealTime.assists, messiRealTime.hatTricks, messiRealTime.apps, messiRealTime.freeKicks, messiRealTime.avgRating.toString().substring(0, 4))
}

async function updateRonaldoData() {
  await fetchData;
  var ronaldoRealTimeData = finalCollectedData.result.data.allSheetRonaldoAllTimeStats.edges[0].node;
  changePlayer("ronaldo", ronaldoRealTimeData.goals, ronaldoRealTimeData.assists, ronaldoRealTimeData.hatTricks, ronaldoRealTimeData.apps, ronaldoRealTimeData.freeKicks, ronaldoRealTimeData.avgRating.toString().substring(0, 4))
}

updateMessiData()
updateRonaldoData()










