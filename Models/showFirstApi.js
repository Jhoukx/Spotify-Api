export function showFirtsApi(data) {
  console.log(data);
  //Top Results
  const topImageApi =
    data.topResults.items[0].data.visuals.avatarImage.sources[0].url;
  const topNameApi = data.topResults.items[0].data.profile.name;
  document.querySelector("#artist-image").src = `${topImageApi}`;
  document.querySelector("#artist-name").textContent = `${topNameApi}`;
  // Artists
  document.getElementById("artists").innerHTML = "";
  const sectionArtists = document.getElementById("artists");
  for (let ar = 0; ar < 5; ar++) {
    const imgArtist =
      data.artists.items[ar].data.visuals.avatarImage.sources[0].url;
    const nameArtist = data.artists.items[ar].data.profile.name;
    sectionArtists.innerHTML += `
        <div class="col-2">
            <img src="${imgArtist}" alt="" srcset="">
            <h5>${nameArtist}</h5>
            <span>Artist</span>
        </div>
        `;
  }
  //Songs
  document.getElementById("tracks").innerHTML = "";
  const sectionTracks = document.getElementById("tracks");
  for (let s = 0; s < 4; s++) {
    const idTrack = data.tracks.items[s].data.id;
    sectionTracks.innerHTML += /*html */ `
        <iframe style="border-radius:12px"
        src="https://open.spotify.com/embed/track/${idTrack}?utm_source=generator&theme=0"
        width="100%" height="90" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
        `;
  }
  //Albums
  document.getElementById("albums").innerHTML = "";
  const sectionAlbums = document.getElementById("albums");
  for (let a = 0; a < 5; a++) {
    const imgAlbum = data.albums.items[a].data.coverArt.sources[2].url;
    const nameAlbum = data.albums.items[a].data.name;
    const yearAlbum = data.albums.items[a].data.date.year;
    const artistAlbum = data.albums.items[a].data.artists.items[0].profile.name;
    sectionAlbums.innerHTML += /*html */ `
        <div class="col-2">
            <img src="${imgAlbum}" alt="" srcset="">
            <h5>${nameAlbum}</h5>
            <span>${yearAlbum} • ${artistAlbum}</span>
        </div>
        `;
  }

  // Playlists
  document.getElementById("playlists").innerHTML = "";
  const sectionPlaylist = document.getElementById("playlists");
  for (let p = 0; p < 5; p++) {
    const imgPlaylist =
      data.playlists.items[p].data.images.items[0].sources[0].url;
    const namePlaylist = data.playlists.items[p].data.name;
    const ownerPlaylist = data.playlists.items[p].data.owner.name;
    sectionPlaylist.innerHTML += /*html */ `
        <div class="col-2">
            <img src="${imgPlaylist}" alt="" srcset="">
            <h5>${namePlaylist}</h5>
            <span>By ${ownerPlaylist}</span>
        </div>
        `;
  }
  //Podcasts
  document.getElementById("podcasts").innerHTML = "";
  const sectionPodcasts = document.getElementById("podcasts");
  for (let p = 0; p < 5; p++) {
    const imgPodcast = data.podcasts.items[p].data.coverArt.sources[2].url;
    const namePodcast = data.podcasts.items[p].data.name;
    const ownerPodcast = data.podcasts.items[p].data.publisher.name;
    sectionPodcasts.innerHTML += /*html */ `
        <div class="col-2">
            <img src="${imgPodcast}" alt="" srcset="">
            <h5>${namePodcast}</h5>
            <span>${ownerPodcast}</span>
        </div>
        `;
  }
}

export function albumArea(data) {
  // Albums Area
  document.getElementById("albumsArea").innerHTML = "";
  let albumsArea = document.getElementById("albumsArea");
  
  // Albums row
  for (let f = 0; f < 3; f++) {
    const div = document.createElement("div");
    div.classList.add("row");
    const section = document.createElement("section");
    
    // Albums Condition
    let c;
    switch (f) {
      case 0:
        c = 0;
        break;
      case 1:
        c = 5;
        break;
      case 2:
        c = 10;
        break;
      default:
        c = 0;
    }
    
    // Albums Colums
    for (let i = c; i < c + 5; i++) {
      const imgAlbum = data.albums.items[i].data.coverArt.sources[2].url;
      const nameAlbum = data.albums.items[i].data.name;
      const yearAlbum = data.albums.items[i].data.date.year;
      const artistAlbum = data.albums.items[i].data.artists.items[0].profile.name;
      
      section.innerHTML += `
        <div class="col-2">
          <img src="${imgAlbum}" alt="" srcset="">
          <h5>${nameAlbum}</h5>
          <span>${yearAlbum} • ${artistAlbum}</span>
        </div>
      `;
    }
    
    div.appendChild(section);
    albumsArea.appendChild(div);
  }
  
}
