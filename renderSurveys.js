function renderSurveys(surveys) {
    let submitBtn = ''
    let currentSruvey = surveys.map(s => {
        submitBtn = `${s.submitButtonText}`
        let fields = s.fields.map(f => {
            let options = '';
            if (f.options != undefined && f.options.length > 2) {
                options = f.options.map(o => {
                    return `<div  class = "form-check form-check-inline text-capitalize font-weight-normal">
                    <input class = "form-check-input"
                    type = "${f.type}"
                    name = "rating" id="${o}">
                    <label for="${o}" class="form-check-label ">${o}</label>
                    </div>`
                })
                options = options.join('')
            } else if (f.options != undefined && f.options.length == 2) {
                options = f.options.map(o => {
                    return `<div  class = "form-check text-capitalize font-weight-normal">
                    <input class = "form-check-input"
                    type = "${f.type}"
                    name = "rating" id="${o}">
                    <label for="${o}" class="form-check-label">${o}</label>
                    </div>`
                })
                options = options.join('')
            } else {
                options = `<textarea class="form-control" aria-label="With textarea" style="width: 300px; height: 100px;" type="${f.type}"></textarea>`
            }
            return `<h5>${f.label}</h5>
            <form>
            ${options}
            </form>`
        })
        return `<div><h4>${s.title}</h4></div>
                <hr>    
                <div class="mt-0 pt-0">${fields.join('')}</div>
                <button type = "submit" class = "btn btn-primary mt-2 mb-4 d-block" >${submitBtn}</button>`
    })


    return `
        <div class="text-left mt-5 ml-2">
            ${currentSruvey.join('')}

        </div>
    `
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [{
            title: "Movie Goer Survey",
            fields: [{
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [{
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}