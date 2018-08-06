let url= "https://randomuser.me/api/?results=50"

    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(myJson){
            console.log(myJson)
            let firstDiv1 = document.getElementById("main_container");
            for( let i = 0; i < 54; i++){
                let profileDiv = document.createElement("div");
                let InsideProfileDiv = document.createElement("div")
                let person = myJson.results[i];
                let pic = document.createElement("img");
                let fullName = person.name.first + " " + person.name.last;
                let age = person.dob.age;
                let email = person.email;
                profileDiv.setAttribute("class", "profile");
                InsideProfileDiv.setAttribute("class", "textInfo");
                
                function createPeople(i){
                    //adds picture
                    pic.src = person.picture.large;
                    firstDiv1.appendChild(profileDiv);
                    profileDiv.appendChild(InsideProfileDiv);
                    profileDiv.appendChild(pic);
                    console.log("picture added");
                    //adds name
                    let nameP = document.createElement("p");
                    nameP.innerHTML = fullName;
                    InsideProfileDiv.appendChild(nameP);
                    //adds age 
                    let ageP = document.createElement("p");
                    ageP.innerHTML = age;
                    InsideProfileDiv.appendChild(ageP);
                    //adds email
                    let emailP = document.createElement("p")
                    emailP.innerHTML = email;
                    InsideProfileDiv.appendChild(emailP);
                }
                createPeople(i);
            }
                      
    })          
