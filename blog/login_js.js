function login()
{
var pass_word=document.getElementById("password").value;
var user_name=document.getElementById("username").value;
if(pass_word=="lidasong2014"&&user_name=="lidasong")
{
    window.open("main_page.html","_self");
} 
    else 
        alert("username:ldiasong\n\n password:lidasong2014");
     
}