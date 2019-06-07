function renderNametags(nametags) {
    let names = nametags.map(name => {
        return `<div style="width: 250px;" class="border border-dark text-center mx-auto nameCard mb-4"><p class="nameGreeting mb-0">Hello, my name is</p><br><p class="personName mt-0">${name}</p></div>`
    })
    return `
        <div class="text-center mt-5 justify-content-between">
            ${names.join('')}
            <code>${JSON.stringify(nametags)}</code>
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
        "Kamilah",
        "Kim",
        "Stuart",
        "Ron",
        "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}