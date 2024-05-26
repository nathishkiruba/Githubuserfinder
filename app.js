const github = new Github();
const ui = new UI();


const user = document.getElementById("submit-button");

user.addEventListener("click", (e) => {

    e.preventDefault();
    
    let userText = document.querySelector("#searchUser").value;

    if(userText !== ""){

        github.getUser(userText)
        .then(data => {
            ui.showProfile(data);
            ui.clearProfile();
        })
        .catch(error => console.log(error));

    }

})