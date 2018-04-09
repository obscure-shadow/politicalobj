// Your job is to define the different objects and resources, their structure, and 
//the corresponding properties for each, to represent the following information about 
//Elizabeth's campaign.

// Her congressional district (you can use yours here)
const dist = {
    district: "5th Congressional District"
}

// Her platform statements for the following issues.
const platform = {
    taxes: "taxes suck",
    jobs: "jobs are overrated",
    infrastructure: "infrastructure is impossible in an anarchy",
    healthcare:"healthcare is full of snake oil salesmen",
    crime:"crime pays more than it should."

}

const platArticle = document.createElement("article")
//<article>
platArticle.setAttribute("id", platform.taxes)
// <article id="taxes suck">
platArticle.textContent = platform.crime
// <article id" taxes suck"> crime pays more than it should </article>

const documentBody = document.querySelector("#body")
documentBody.appendChild(platArticle)



// URL for donation form

// Calendar of events
const calendar = {
    event: "none",
    date: "4/1/2018"
}
// Volunteer information
const volunteer = [
    {
        Name: "Joe Blob",
        Address:"469 Cumberbun Rd",
        Email:"jimandjoblobs@gmail.com",
        Phone: "555-649-6900",
        Availability:"always available",
        activities: "you'd rather not know",
        
    },
    {
        Name: "Jim Blob",
        Address:"469 Cumberbun Rd",
        Email:"jimandjoblobs@gmail.com",
        Phone: "555-649-6900",
        Availability:"always available",
        activities: "you'd rather not know",
    }
]
// Biography

const bio = "does a biography need to be an object? also she is very shady, duh, all politicians are."
// Image gallery
const gallery = [
    {
        desc: "head shot",
        imgUrl: "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MzY0ODk5ODUx/margaret-sanger-9471186-1-402.jpg"
    },
    {
        desc: "family",
        imageUrl: "https://www.biography.com/.image/t_share/MTE5NTU2MzE2MzY0ODk5ODUx/margaret-sanger-9471186-1-402.jpg"
    },
    {
        desc:"constituents",
        imageUrl:""
    }
]
   
    // Mission statement
const mission = "mission statment blauhhhhh"

    // URL for registering to vote
const voteUrl = "www.vote.org"

//write a corresponding function whose purpose is to change the state of the object. 
//Then invoke each function, and pass a reference to the correct object to it and modify a 
//property.
console.log(dist)
// function to change district
const disfunc = (object, change) => {
    dist[object] = change
}
// const distModify = (key, newInput ) => {
//     district[key] = newInput;
//  }
disfunc("district", "4th")
console.log(dist)

disfunc("district", "3th")
console.log(dist)

disfunc("district", "6th")
console.log(dist)

console.log(platform)
// // function to change platform
const platfunc = (object, change) => {
    platform[object] = change
}
platfunc("taxes", "taxes really suck")
console.log(platform)
platfunc("jobs", "jobs are really overrated, really")
console.log(platform)
platfunc("crime", "crime pays wayy more than it should.")
console.log(platform)


console.log(calendar)
// // function to change calander
const calfunc = (object, change) => {
    calendar[object] = change
}

console.log(volunteer)
// // function to change volunteer
const volfunc = (vol, object, change) => {
    for(let v in volunteer){
        
        if(volunteer[v].Name === vol){
        
            volunteer[v][object] = change

        }
    }
}

volfunc("Jim Blob", "Phone", "566-333-6354")
console.log(volunteer)

console.log(gallery)
// // function to change gallery
const galfunc = (object, change) => {
    gallery[object] = change
}



// Advanced Challenge
// Use document.createElement() to build an <article> element representing Elizabeth. 
//The id property of the element should be her congressional district, and its content 
//should be her platform data. Once the element has been created, insert it into the DOM.
