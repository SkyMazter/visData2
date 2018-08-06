let url= "https://randomuser.me/api/?results=50"

    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(myJson){
            console.log(myJson)
            let firstDiv1 = document.getElementById("main_container");
            for( let i = 0; i < 54; i++){
                let profileDiv = document.createElement("div");
                let InsideProfileDiv = document.createElement("div");
                let InsideProfileDivImg = document.createElement("div");
                let person = myJson.results[i];
                let pic = document.createElement("img");
                let fullName = person.name.first + " " + person.name.last;
                let age = person.dob.age;
                let email = person.email;
                profileDiv.setAttribute("class", "profile");
                InsideProfileDiv.setAttribute("class", "textInfo");
                InsideProfileDivImg.setAttribute("class", "imageInsideProfileDiv" )
                
                function createPeople(i){
                    //adds picture
                    pic.src = person.picture.large;
                    firstDiv1.appendChild(profileDiv);
                    profileDiv.appendChild(InsideProfileDiv);
                    profileDiv.appendChild(InsideProfileDivImg);
                    InsideProfileDivImg.appendChild(pic);
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

                let ageFil = document.getElementById("ageFil");
                ageFil.addEventListener("click",function
                ageFilter(){
                 
                     for( let x = 0 ; x<50; x++){
                     let age = myJson.results[x].dob.age
                        if(age < 31 && age > 24){

                         }
                        else{
                             let filter = document.getElementsByClassName("profile");
                            filter[x].style.display = "none"            
                        }
                    }
                });
                

            }           
    })          
