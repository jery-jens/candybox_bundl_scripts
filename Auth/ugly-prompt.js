let password = prompt("Please enter the password.");

while(password !== "Bundl"){
    password = prompt("Please enter the password."); 
};

sessionStorage.setItem("access_granted", true);