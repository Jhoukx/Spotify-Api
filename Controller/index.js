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
