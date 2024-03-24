console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection=[];
console.log(myCollection);

function addToCollection(collection, title, artist, yearPublished) {
  const newAlbum ={
    artist: artist,
    title: title,
    yearPublished: yearPublished
  }
  collection.push(newAlbum);
  return newAlbum;
}
addToCollection(myCollection,"Views", "Drake","April 16, 2016");
addToCollection(myCollection,"Mr. Beat The Road", "Bossman Dlow","March 5th, 2024");
addToCollection(myCollection,"Vultures 1", "Kanye West","Feburary 9, 2024");
addToCollection(myCollection,"2 Faced", "Lucki","January 22, 2024");
addToCollection(myCollection,"Rich off pints", "Icewear Vezzo","May 21, 2021");
addToCollection(myCollection,"So Far Gone", "Drake","Feburary 13, 2009");
console.log(myCollection);

function showCollection(collection) {
  for (let album of collection) {
    const albumInfo = `${album.title} by ${album.artist}, published in ${album.yearPublished}`;
    console.log(albumInfo);
  }
}
showCollection(myCollection);

function findByArtist(collection, artist) {
  let matchingAlbums = [];
  for (let album of collection) {
    if (album.artist === artist) {
      matchingAlbums.push(album);
    }
  }
  return matchingAlbums;
}
let artist1Results = findByArtist(myCollection, "Drake");
console.log("Albums by Drake:", artist1Results);
let artist2Results = findByArtist(myCollection, "Ken Carson");
console.log("Albums by Ken Carson:", artist2Results);





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
