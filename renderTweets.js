function renderTweets(tweets) {
    let usrProfile = tweets.map(t => {
        let verifiedStatus = ''
        if (t.user.isVerified) {
            verifiedStatus = `<img src="./verifiedIcon.png">`
        }
        return `<div class="container my-5" style="width: 600px;">
        <div class="row text-left mx-2">
        <img class="img-thumbnail rounded-circle" style="width: 50px; height: 50px;"
        src = "${t.user.profilePic}">
        <div class="mx-2"><h5 class="mb-0">${t.user.username}${verifiedStatus}</h5>
        <span clas="mt-0 text-muted font-weight-ligh">${t.user.handle}</span>
        </div>
        </div>
        <div class="row my-3 mx-2">
        <h6>${t.text}</h6>
        </div>
        <div class="text-left my-2">
        <hr>
        <span class="mx-3"><img src="./subtweetIcon.png">${t.replies}</span>
        <span class="mx-3"><img src="./retweetIcon.png">${t.retweets}</span>
        <span class="mx-3"><img src="./likeIcon.png">${t.likes}</span>
        <span class="mx-4"><img src="./messageIcon.png"></span>
        </div>
        </div>`
    })

    return `
        <div class="text-center mt-5">
            ${usrProfile.join('')}
        </div>
    `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [{
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}