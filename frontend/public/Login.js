let user = document.getElementById('user');
let pass = document.getElementById('pass');
let btn_submit = document.getElementById('btn_submit');
 btn_submit.addEventListener("click",Login);
 console.log(btn_submit);

 

function Login()
{
    console.log("User = " +user.value);
    console.log("pass = " +pass.value);

    if (user.value ==="admin" && pass.value === "1234")
    {
        console.log("Logged In Successfully");
        ShowData();
    }else
    {
        console.log("User Or Password Inccorect");
    }  
    
}

function ShowData()
{
    let file = fopen("./database.js",0);
    let str = fread(file,flength(file));
    console.log(str);
    
}