// let form = document.querySelector('form')
// let message = document.querySelector('.message')

// let userNameError = "";
// let nameError = "";
// let emailError = "";
// let phonNumError = "";
// let conformPassError = "";

// function handleSubmit(event){
//     event.preventDefault();
//     // console.dir(event.target)

//     let usernameElm = event.target.elements.username;
//     let nameElm = event.target.elements.name;
//     let emailElm = event.target.elements.email;
//     let phoneNumberElm = event.target.elements.phoneNumber;
//     let conformPassElm = event.target.elements.conformPassword;
//     let passwordElm = event.target.elements.password;

//     if(usernameElm.value.length < 4){
//         userNameError = "Username can't be less than 4 characters!"
//     }else{
//         userNameError = "";
//     }
//     usernameElm.nextElementSibling.innerText = userNameError

    

//     if(nameElm.value === "number"){
//         nameError = "Name can't contain Numbers"
//     }else{
//         nameError = "";
//     }
//     message.innerText = nameError

    

//     if(!emailElm.value.length.includes('@')){
//         emailError = "Email must contain '@' "
//     }else if(!emailElm.value.length >= 6){
//         emailError = "Email must contain atleast 6 characters";
//     }else{
//         emailError = "";
//     }
//     message.innerText = emailError;


//     if(phoneNumberElm !== "number"){
//         phonNumError = "Phon number can only be a number"
//     }else if(phoneNumberElm.length < 7){
//         phonNumError = "Length of phone number can't be less than 7";
//     }else{
//         phonNumError = "";
//     }

//     message.innerText = phonNumError;
    

//     if(conformPassElm !== passwordElm){
//         conformPassError = "Password and confirm password must be same."
//     }else{
//         conformPassError = ""
//     }
//     message.innerText = conformPassError

// }

// form.addEventListener('submit', handleSubmit);


let form = document.querySelector('form');

let errorMessages = {};

function displayError(name){
    let elm = form.elements[name]
    elm.nextElementSibling.innerText = errorMessages[name]
    elm.classList.add('error')
}

function displaySucess(name){
    let elm = form.elements[name]
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.classList.remove('error')
    elm.classList.add('sucess')
}

function handleSubmit(event){
    event.preventDefault();

    let elements = event.target.elements;

    let username = elements.username.value;
    let name = elements.name.value;
    let email = elements.email.value;
    let phoneNumber = elements.phoneNumber.value;
    let password = elements.password.value;
    let conformPassword = elements["conformPassword"].value;

// 1. Username can't be less than 4 characters

if(username.length < 4){
    errorMessages.username = "username can't be less than 4 characters";
    displayError("username");
    
}else{
    displaySucess("username");
}
// 2. Name can't be numbers
if(!isNaN(name)){
    errorMessages.name = " Name can't be numbers";
    displayError("name");
    
}else{
    displaySucess("name");
}
// 3. Email must contain the symbol `@`
// 4. Email must be at least 6 characters
if(!email.includes("@")){
    errorMessages.email = " Email must contain the symbol @";
    displayError("email");
    
}else if(email.length < 6){
    errorMessages.email = " Email must be at least 6 characters";
    displayError("email");
} else{
    displaySucess("email");
}
// 5. Phone numbers can only be a number
// 6. Length of phone number can't be less than 7

if(isNaN(phoneNumber)){
    errorMessages.phoneNumber = "Phone numbers can only be a number";
    displayError("PhoneNumber");
    
}else if(phoneNumber.length < 7){
    errorMessages.phoneNumber = "  Length of phone number can't be less than 7";
    displayError("phoneNumber");
} else{
    displaySucess("phoneNumber");
}
// 8. Password and confirm password must be same.

if(password !== conformPassword){
    errorMessages.password = " Password and confirm password must be same.";
    errorMessages["conformPassword"] = " Password and confirm password must be same.";
    displayError("password");
    displayError("conformPassword");
} else{
    displaySucess("password");
    displaySucess("conformPassword");
}



    console.log(username, name, email, phoneNumber, password, conformPassword)
}

form.addEventListener('submit', handleSubmit)