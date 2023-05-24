import {doSearch} from "../Models/FirtsApi.js"
import {showFirtsApi} from "../Models/showFirstApi.js"
import {albumArea} from "../Models/showFirstApi.js"

function createQueryString(string){
    let separada =string.split(" ")
    return separada.join("%20");
}

async function runApis(){
    let word =createQueryString(document.querySelector("#buscador").value)
    let firtsInfo = await doSearch(word);
    showFirtsApi(firtsInfo);
    albumArea(firtsInfo);
}

document.querySelector("#buscador").addEventListener("search",runApis)

document.querySelector("#botones").addEventListener("click",(b)=>{
    let mainArea = document.querySelector("#mainArea");
    let albumsArea = document.querySelector("#albumsArea");
    let artistsArea = document.querySelector("#artistsArea");
    console.log(b.target.value);
    switch (b.target.value){
        case "Albums":
            //show albums area
            albumsArea.className = "";
            albumsArea.classList.add("block-element");
            // Hide main Area
            mainArea.className = "";;
            mainArea.classList.add("hidden-element"); 
            //Hide artists Area
            artistsArea.className ="";
            artistsArea.classList.add("hidden-element");
            break
        case "Artists":
            console.log("Button Artists");
            //Show Artist Area
            artistsArea.className ="";
            artistsArea.classList.add("block-element");
            // Hide main Area
            mainArea.className ="";
            mainArea.classList.add("hidden-element");
            //Hide albums area
            albumsArea.className = "";
            albumsArea.classList.add("hidden-element");
            break
        case "Songs":
            console.log("Boton Song");
            break
        case "Playlists":
            console.log("Boton Playlist");
            break
        default:
            console.log("Boton All");
            // show main Area
            mainArea.className ="";
            mainArea.classList.add("block-element");
            // Hide albums Area   
            albumsArea.className ="";
            albumsArea.classList.add("hidden-element"); 
            // Hide artists Area
            artistsArea.className ="";
            artistsArea.classList.add("hidden-element");
    }
})

