import {doSearch} from "../Models/FirtsApi.js"

function createQueryString(string){
    let separada =string.split(" ")
    return separada.join("%20");
}
document.querySelector("#buscador").addEventListener("search",()=>{
    let word =createQueryString(document.querySelector("#buscador").value)
    doSearch(word);
})
