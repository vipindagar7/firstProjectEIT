

function submitForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if(name === "" || email === "" || message === ""){
        alert("Please fill in all fields.");
        return false;
    }
    
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    return true;
}

function changeHeading(){
    document.getElementById("main-heading").style.backgroundColor = "#4CAF50";
    document.getElementById("main-heading").style.color = "#ffffff";

}
function changeBG(){
    document.body.style.backgroundColor = "#d40e0e";
}
function openMenu() {
    document.getElementById("nav").style.display = "block";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
}  
function closeMenu() {
    document.getElementById("nav").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
} 
