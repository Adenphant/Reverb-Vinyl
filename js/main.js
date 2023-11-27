"use strict";

/* ---------- Global Variables ---------- */
let _records = [];

/* Insert data into our functions and initialize it------ */

async function initApp() {
    await fetchRecords();
    appendRecords(_records);
    appendAlbumsIndex(_records);
}

initApp();
// Fetching the data from our JSON file
async function fetchRecords() {
    // const url = "json/records.json";
    const response = await fetch('json/records.json');
    const data = await response.json();
    _records = data;
}
// Appending the 8 albums you see on the frontpage (8 albums)
function appendAlbumsIndex(albums){
  let html = "";
  for (let i = 0; i < 1 && i < albums.length; i++) {
    for (const album of albums){
    html+=` 
    <div class="album">
      <a href="index.html"><img src="${album.albumCover}" alt="${album.albumTitle}"></a>
      <div>
          <strong class="album-title">${album.albumTitle}</strong>
          <p class="artist-title">${album.artistName}</p>
      </div>
    </div>
    `
  }
}
  document.querySelector(".recordsIndex").innerHTML = html;
}

// Records page append
function appendRecords(records) {
  let html = "";
  for (const record of records) {
      html += /*html*/`
          <article>
            <img src="${record.albumCover}">
            <p class="album-title">${record.albumTitle}</p>
            <p class="artist-title">${record.artistName}</p>
            <p>${record.id}</p>
            <p>Condition: ${record.condition}</p>
            <p>${record.description}</p>
      `;
      if (record.inStock > 0) {
        html+=`
        <p>Avalibility: <span class="green">In Stock</span></p>
        `
      } else{
        html+=`
        <p>Avalibility: Out of Stock</p>
        `
      }
      for (let i = 0; i < record.tracks.length; i++) {
        html += /*html*/`
              <p>${[i + 1]}. ${record.tracks[i]}</p>
        `;
      }
      html += /*html*/`
      </article>
    `;
    console.log(record.condition);
  }
  
  document.querySelector(".records").innerHTML = html;
}
// Limit frontpage append to 8 when json gets more albums
// Append til Records side + Sorter + Filter
// SPA?
// Detail View
