function make_album(artistName, albumTitle) {
    var musicAlbum = { artist: artistName, title: albumTitle };
    return musicAlbum;
}
var myAlbum = make_album("Harry", "As it was");
console.log(myAlbum);
var myAlbum2 = make_album("Faisal Kapadia", "Phir milenge");
console.log(myAlbum2);
var myAlbum3 = make_album("Atif Aslam", "Aadat");
console.log(myAlbum3);
