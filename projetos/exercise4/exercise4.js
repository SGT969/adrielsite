function collectAllPeopleInformation() {
    let value = Number(prompt("How many people do you wanna register?"));
    let people = []

    for ( let i=0; i< value ; i++) {
        let height = prompt("Which Height");
        let gender = prompt("Which Gender");
        
        person = {
            height:height,
            gender:gender
        }

        people.push(person)
    }
    
    return people
}

function findTheTallerPerson(people) {
    let tallerPerson = people[0]

    for ( let i=0; i < people.length; i++) {
        
        if ( people[i].height > tallerPerson.height ) {
            tallerPerson = people[i]
        }   
    }

    return tallerPerson
}

function fix(gender) {
    if ( gender == "F" ) {
        return "Female"
    }
    
    return "Male"
    
}

let listOfPeople = collectAllPeopleInformation()

let tallerPerson = findTheTallerPerson(listOfPeople)

tallerPerson.gender = fix(tallerPerson.gender)

document.write(`There are ${listOfPeople.length} people, the gender of the taller person is ${tallerPerson.gender} and the height is ${tallerPerson.height}`)