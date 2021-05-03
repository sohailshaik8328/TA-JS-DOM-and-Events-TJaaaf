let form = document.querySelector('form')
let message = document.querySelector('.message')

let userNameError = "";
let nameError = "";
let emailError = "";
let phonNumError = "";
let conformPassError = "";

function handleSubmit(event){
    event.preventDefault();
    // console.dir(event.target)

    let usernameElm = event.target.elements.username;
    let nameElm = event.target.elements.name;
    let emailElm = event.target.elements.email;
    let phoneNumberElm = event.target.elements.phoneNumber;
    let conformPassElm = event.target.elements.conformPassword;
    let passwordElm = event.target.elements.password;

    if(usernameElm.value.length < 4){
        userNameError = "Username can't be less than 4 characters!"
    }else{
        userNameError = "";
    }
    usernameElm.nextElementSibling.innerText = userNameError

    

    if(nameElm.value === "number"){
        nameError = "Name can't contain Numbers"
    }else{
        nameError = "";
    }
    message.innerText = nameError

    

    if(!emailElm.value.length.includes('@')){
        emailError = "Email must contain '@' "
    }else if(!emailElm.value.length >= 6){
        emailError = "Email must contain atleast 6 characters";
    }else{
        emailError = "";
    }
    message.innerText = emailError;


    if(phoneNumberElm !== "number"){
        phonNumError = "Phon number can only be a number"
    }else if(phoneNumberElm.length < 7){
        phonNumError = "Length of phone number can't be less than 7";
    }else{
        phonNumError = "";
    }

    message.innerText = phonNumError;
    

    if(conformPassElm !== passwordElm){
        conformPassError = "Password and confirm password must be same."
    }else{
        conformPassError = ""
    }
    message.innerText = conformPassError

}

form.addEventListener('submit', handleSubmit);