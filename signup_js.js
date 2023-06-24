let nam=document.getElementById("name-input");
let email=document.getElementById("em-input");
let pass=document.getElementById("password-input");
let repass=document.getElementById("repass-input");
let btn=document.getElementById("submit-btn");
let inputBox=document.getElementById("input-div");
let signup=document.getElementById("signup-link");
let profilePage=document.getElementById("profile-link");

let err_msg=document.createElement("p");
err_msg.innerText="Error: All the fields are mandatory";
err_msg.setAttribute("id","err-msg");

let success_msg=document.createElement("p");
success_msg.innerText="Successfully Signed Up!";
success_msg.setAttribute("id","success-msg");

function generateToken(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
    let res = '';
    let length = characters.length;
    for(let i = 1; i<=16; i++){
        res += characters.charAt(Math.floor(Math.random()*length));
    }
    return res;
}

btn.addEventListener("click",(event)=>{

    if(nam.value=="" || email.value=="" || pass.value=="" || repass.value==""){ 
        inputBox.appendChild(err_msg);
        return;
    }
    if(pass.value.localeCompare(repass.value)==1 || pass.value.localeCompare(repass.value)==-1){
        event.preventDefault();
        alert("Passwords do not match");
        return;
    }
    else{
        event.preventDefault();
        let user={
            user_name:nam.value,
            user_em:email.value,
            user_pass:pass.value,
            token:generateToken()
        };
        localStorage.setItem("user",JSON.stringify(user));
        inputBox.appendChild(success_msg);   
        
        setTimeout(()=>{
        let link=document.createElement("a");
        link.href="./profile.html";
        link.click();
           
        },500);
       
    }
})

signup.addEventListener("click",()=>{
    if(localStorage.getItem("user")){
        let data=JSON.parse(localStorage.getItem("user"));
        if(data.token){
            alert("You already have a profile");
            signup.href="./profile.html";
        }
        else{
            localStorage.clear();
            signup.href="./signup.html";
        }
    }
    else{
        signup.href="./signup.html";
    }
})

profilePage.addEventListener("click",()=>{
    if(localStorage.getItem("user")){
        let data=JSON.parse(localStorage.getItem("user"));
        if(data.token){
            profilePage.href="./profile.html";
        }
        else{
            localStorage.clear();
            alert("Please signup");
            profilePage.href="./signup.html";
        }
    }
    else{
        alert("Please signup");
        profilePage.href="./signup.html";
    }
    
})
