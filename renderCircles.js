function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map()
    newCirlce = circles.map(e => {
        return `<div class = "circle" style="width:${e.radius}px; height:${e.radius}px; background-color:${e.color};"></div>`
    })
    return `
        <div class="text-center mt-5 justify-content-around"> ${newCirlce.join("")} 
            <code>${JSON.stringify(circles)}</code>
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [{
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}