export async function showFirtsApi (data){
    //Foto y nombre Top Result
    const topImageApi = data.topResults.items[0].data.visuals.avatarImage.sources[0].url
    const topNameApi = data.topResults.items[0].data.profile.name
    document.querySelector("#artist-image").src = `${topImageApi}`
    document.querySelector("#artist-name").textContent = `${topNameApi}`
    
}