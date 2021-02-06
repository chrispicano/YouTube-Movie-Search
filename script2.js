let searchBoxEl;
let searchBtnEl;
let resultsTableEl;
let resultsTableElData;
let movieClipsBtn
const apiKey = "AIzaSyBnfgMuKMAFU1nzcXQCZY2xWmbuvr7gYI0";
const ytMoviesChannelId = "UClgRkhTL3_hImCAmdLfDE4g";

window.onload = function() {

    searchBoxEl = document.querySelector("#searchInput");
    searchBtnEl = document.querySelector("#searchBtn");
    resultsTableEl = document.querySelector("#resultsTable");
    resultsTableDataEl = document.querySelector("#resultsTableData");
    movieclipsBtn = document.querySelector("#movieclipsBtn");

    //https://www.googleapis.com/youtube/v3/search?type=video&videoType=movie&relevanceLanguage=en&part=snippet&order=viewCount&maxResults=20&key=AIzaSyBnfgMuKMAFU1nzcXQCZY2xWmbuvr7gYI0
    //https://www.googleapis.com/youtube/v3/search?type=video&q=jurassic%20park&relevanceLanguage=en&part=snippet&order=viewCount&maxResults=20&key=AIzaSyBnfgMuKMAFU1nzcXQCZY2xWmbuvr7gYI0

    searchBtnEl.addEventListener("click", function() {
        //get movies from search
        let searchText = searchBoxEl.value;
        alert(searchText);
        fetch("https://www.googleapis.com/youtube/v3/search?type=video&q=" + searchText + "&relevanceLanguage=en&part=snippet&maxResults=20&key=" + apiKey)
            .then(function(response) {
                return response.json();
        })
        .then(function(data) {
            for (let i = 0; i < 5; i++) {
                //get thumbnail elements            
                let blockTitleEl = document.querySelector("#resultBlockTitle" + i);
                let videoIconEl = document.querySelector("#videoIcon" + i);
                let resultBlockCaptionEl = document.querySelector("#resultBlockCaption" + i);

                //set content fron result
                let item = data.items[i];                
                videoIconEl.setAttribute("src", item.snippet.thumbnails.default.url);
                resultBlockCaptionEl = item.snippet.publishTime;

                if (item.snippet.title != null || item.snippet.title != undefined) {
                    blockTitleEl.textContent = item.snippet.title;
                }                
            }
        })
    });

    // movieClipsBtn.addEventListener("click", function() {

    // })



}




