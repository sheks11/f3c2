let nam =document.getElementById("name");
let em=document.getElementById("email");
let pass=document.getElementById("pass");
let logout=document.getElementById("out")

let data=JSON.parse(localStorage.getItem("user"));
nam.innerText=`Full Name: ${data.user_name}`;
em.innerText=`Email: ${data.user_em}`;
pass.innerText=`Password: ${data.user_pass}`;

logout.addEventListener("click",()=>{
    localStorage.clear();
    let link=document.createElement("a");
    link.href="./signup.html";
    link.click();
})