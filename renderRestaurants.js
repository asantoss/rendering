function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    let restCard = restaurants.map(restaurant => {

        let price = '$';
        return `<div class="col-3">
        <div class="text-left border border-dark rounded pl-2" style="background-color: lightgrey; width: 160px;">
        <h4 class="mb-0">${restaurant.name}</h4>
        <span class="text-muted pt-0 mt-0 text-light" style="font-size: 15px;"><small>${restaurant.type}</small></span><br>
        <span class="mt-0 pt-0" style="color: green; font-size: 25px;">${price.repeat(restaurant.priceRating)}</span>
        </div>
        
        
        </div>`
    })

    return `
        <div class="text-center mt-5 row mx-auto">
        ${restCard.join('')}
            <code>${JSON.stringify(restaurants)}</code>
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [{
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}