let searchBoxEl;
let searchBtnEl;
let resultsTableEl;
let resultsTableElData;
let playlistResults = [];
const apiKey = "AIzaSyBnfgMuKMAFU1nzcXQCZY2xWmbuvr7gYI0";
const ytMoviesChannelId = "UClgRkhTL3_hImCAmdLfDE4g";

window.onload = function() {

    searchBoxEl = document.querySelector("#searchBox");
    searchBtnEl = document.querySelector("#searchBtn");
    resultsTableEl = document.querySelector("#resultsTable");
    resultsTableDataEl = document.querySelector("#resultsTableData");

    
    searchBtnEl.addEventListener("click", function() {
        //get yt movies playlist from api
        //https://www.googleapis.com/youtube/v3/search?key=AIzaSyBnfgMuKMAFU1nzcXQCZY2xWmbuvr7gYI0&channelId=UClgRkhTL3_hImCAmdLfDE4g&part=snippet,id&order=date&maxResults=30
        fetch("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&channelId=" + ytMoviesChannelId + "&part=snippet,id&order=date&maxResults=30")
        .then(function(response) {
            playlistResults = response.json();
        })

        for (let i = 0; i < playlistResults.length; i++) {
            let tableRow = "<tr>" +
            "<td>" + playlistResults.items.snippet.title + "</td>" + 
            "<td>" + playlistResults.items.snippet.publishTime + "</td></tr>";
            resultsTableDataEl.appendChild(tableRow);     
        }

    });

}

