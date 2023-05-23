export async function showFirtsApi (data){
    //Photo y Top Result´s name
    const topImageApi = data.topResults.items[0].data.visuals.avatarImage.sources[0].url
    const topNameApi = data.topResults.items[0].data.profile.name
    document.querySelector("#artist-image").src = `${topImageApi}`
    document.querySelector("#artist-name").textContent = `${topNameApi}`
    //Songs
    const sectionTracks = document.getElementById("tracks");
    for (let s = 0; s < 3; s++) {
        const idTrack = data.tracks.items[s].data.id
        sectionTracks.innerHTML = /*html */ `
        <iframe style="border-radius:12px"
        src="https://open.spotify.com/embed/track/${idTrack}?utm_source=generator&theme=0"
        width="100%" height="90" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
        `
    }
    //Albums
    const sectionAlbums = document.getElementById("albums");
    for (let a = 0; a < 4; a++) {
        const imgAlbum = data.albums.items[a].data.coverArt.sources[2].url;
        const nameAlbum = data.albums.items[a].data.name;
        const yearAlbum = data.albums.items[a].data.date.year;
        const artistAlbum = data.albums.items[a].data.artists.items[0].profile.name;
        sectionAlbums.innerHTML =  /*html */ `
        <div class="col-2">
            <img src="${imgAlbum}" alt="" srcset="">
            <h4>${nameAlbum}</h4>
            <span>${yearAlbum} • ${artistAlbum}</span>
        </div>
        `
    }
}