function renderStudents(students) {
    let rollCall = students.map(student => {
        let roll = '';
        let stat = ''
        if (student.isPresent) {
            roll = 'Present'
            stat = 'lightgreen'
        } else {
            roll = 'Absent'
            stat = 'red'
        }
        return `<div class="pt-2 mb-2 mx-auto text-center col border border-dark" style="background-color:${stat}; width: 150px; height: 60px;"><h5 class="mb-0 pb-0">${student.name}</h5><p class="mt-0 pt-0">${roll}</p></div> `
    })


    return `
        <div class="text-center mt-5 justify-content-center">
        <h1 class="display-5">Roll Call!</h1>
        ${rollCall.join('')}
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [{
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}