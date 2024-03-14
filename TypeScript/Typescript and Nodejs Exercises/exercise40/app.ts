function make_album(artistName: string, albumTitle: string){
    let musicAlbum: {artist: string, title: string} = {artist: artistName, title: albumTitle};
    return musicAlbum;
}

let myAlbum = make_album("Harry", "As it was");
console.log(myAlbum);

let myAlbum2 = make_album("Faisal Kapadia", "Phir milenge");
console.log(myAlbum2);

let myAlbum3 = make_album("Atif Aslam", "Aadat");
console.log(myAlbum3);