function makeAlbum(artist : string, title : string){
    const dictionarles ={
        artist : artist. charAt(0). toLocaleUpperCase() + artist. slice(1),
        title : title. charAt(0). toLocaleUpperCase() + title. slice(1)
    }
       return dictionarles;
}

    let album = makeAlbum ("shahid", "light");
      console.log(album)

    let artist = makeAlbum ("ali", "red weva");
      console.log(artist)

    let title = makeAlbum ("hamza", "seenbreez");
        console.log(title)