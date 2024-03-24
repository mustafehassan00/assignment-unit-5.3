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
addToCollection(myCollection,"FATD", "Drake","October 6th, 2023");
addToCollection(myCollection,"Take Care", "Drake","November 15th, 2011");
addToCollection(myCollection,"Certified Lover Boy", "Drake","November 3, 2021");
addToCollection(myCollection,"Dark Lane Memo Tapes", "Drake","May 1, 2021");
addToCollection(myCollection,"So Far Gone", "Drake","Feburary 13, 2009");
console.log(myCollection);

function showCollection(collection) {
  for (let album of collection) {
    const albumInfo = `${album.title} by ${album.artist}, published in ${album.yearPublished}`;
    console.log(albumInfo);
  }
}
showCollection(myCollection);






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
