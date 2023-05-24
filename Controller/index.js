import {doSearch} from "../Models/FirtsApi.js"
import {showFirtsApi} from "../Models/showFirstApi.js"

function createQueryString(string){
    let separada =string.split(" ")
    return separada.join("%20");
}

async function runApis(){
    let word =createQueryString(document.querySelector("#buscador").value)
    let firtsInfo = await doSearch(word);
    showFirtsApi(firtsInfo);
}

document.querySelector("#buscador").addEventListener("search",runApis)

document.querySelector("#botones").addEventListener("click",(b)=>{
    let mainArea = document.querySelector("#mainArea");
    let albumsArea = document.querySelector("#albumsArea");
    console.log(b.target.value);
    switch (b.target.value){
        case "Albums":
            mainArea.classList.remove("block-element");
            mainArea.classList.add("hidden-element"); 
            albumsArea.classList.remove("hidden-element");
            albumsArea.classList.add("block-element")
            break
        case "Artists":
            console.log("Boton Artists");
            break
        case "Songs":
            console.log("Boton Song");
            break
        case "Playlists":
            console.log("Boton Playlist");
            break
        default:
            console.log("Boton All");
            mainArea.classList.remove("hidden-element");
            mainArea.classList.add("block-element");   
            albumsArea.classList.remove("block-element");
            albumsArea.classList.add("hidden-element"); 

    }
})

