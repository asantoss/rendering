function renderAlbums(albums) {
    let artistProfile = albums.map(artist => {
        let artistAlbums = artist.albums.map(album => {
            let albumSongs = album.songs.map(song => {
                return `<div class="row container my-0"><p class="col text-left my-0 py-0 mx-4"><img id="playIcon" class="mr-2" src="./playIcon.png">${song.title}</p><p class="col text-right py-0 my-0">${song.length}</p></div><hr>`
            })
            return `<div class="row mt-5 ml-3"><img class="img-thumbnail" src="${album.albumCover}" style="width: 100px; height: 100px;"></img><h2 class="pt-5 ml-4 align-bottom" >${album.title}</h2></div><hr>
            ${albumSongs.join('')}`
        })

        return `<div class="row"  ><h1 class="display-4 pt-5 mb-0 mx-4">${artist.artist.toUpperCase()}</h1></div><hr>
        ${artistAlbums.join('')}

        `
    })
    return `
        <div class="text-center mt-5 container-fluid" style="background-color: #ededed;">
        ${artistProfile}
        </div>
    `
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [{
        artist: "Creed",
        albums: [{
                title: "My Own Prison",
                albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                songs: [{
                        title: "Torn",
                        length: "6:25"
                    },
                    {
                        title: "Ode",
                        length: "4:58"
                    },
                    {
                        title: "My Own Prison",
                        length: "5:00"
                    },
                    {
                        title: "Pity for a Dime",
                        length: "4:37"
                    },
                    {
                        title: "In America",
                        length: "3:38"
                    },
                    {
                        title: "Illusion",
                        length: "5:29"
                    }
                ]

            },
            {
                title: "Weathered",
                albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                songs: [{
                        title: "Bullets",
                        length: "6:25"
                    },
                    {
                        title: "Freedom Fighter",
                        length: "4:58"
                    },
                    {
                        title: "Who's Got My Back?",
                        length: "5:00"
                    },
                    {
                        title: "Signs",
                        length: "4:37"
                    },
                    {
                        title: "One Last Breath",
                        length: "3:38"
                    },
                    {
                        title: "My Sacrifice",
                        length: "5:29"
                    }
                ]
            }
        ]
    }]

    content.innerHTML = renderAlbums(albumsAbstraction);

}