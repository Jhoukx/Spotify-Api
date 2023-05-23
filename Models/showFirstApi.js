export async function showFirtsApi (data){
    //Top Results
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
    // Artists
    const sectionArtists = document.getElementById("artists");
    for (let ar = 0; ar < 4; ar++) {
        const imgArtist = data.artists.items[ar].data.visuals.avatarImage.sources[0].url;
        const nameArtist = data.artists.items[ar].data.profile.name;
        sectionArtists.innerHTML = /*html */ `
        <div class="col-2">
            <img src="${imgArtist}" alt="" srcset="">
            <h4>${nameArtist}</h4>
            <span>Artist</span>
        </div>
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
    // Playlists
    const sectionPlaylist = document.getElementById("playlists");
    for (let p = 0; p < 4; p++) {
        const imgPlaylist = data.playlists.items[p].data.images.items[0].sources[0].url;
        const namePlaylist = data.playlists.items[p].data.name;
        const ownerPlaylist = data.playlists.items[p].data.owner.name;
        sectionPlaylist.innerHTML = /*html */ `
        <div class="col-2">
            <img src="${imgPlaylist}" alt="" srcset="">
            <h4>${namePlaylist}</h4>
            <span>By ${ownerPlaylist}</span>
        </div>
        `
        
    }
}