function sign() {
document.getElementById("logid").classList.add("hide");
document.getElementById("signid").classList.remove("hide");
document.getElementById("signbtn").classList.toggle("hide")
document.getElementById("logbtn").classList.remove("hide")



}
function login() {
   document.getElementById("logid").classList.remove("hide");
document.getElementById("signid").classList.add("hide");
document.getElementById("logbtn").classList.add("hide");
document.getElementById("signbtn").classList.remove("hide")


}
