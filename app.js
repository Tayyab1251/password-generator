
const inputField = document.getElementById("passwordBox");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+|?/<>,.";

function generateRandomPassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

generateBtn.addEventListener("click", () => {
 
    const newPassword = generateRandomPassword(12); // Use a stronger default length
    inputField.value = newPassword
})

function copyPassword (){
    // navigator.clipboard.writeText(inputField.value);
    // alert("copied");
    // if (navigator.clipboard) {
    //     navigator.clipboard.writeText(inputField.value)
    //         .then(() => {
    //             // Success actions
    //         })
    //         .catch(err => {
    //             console.error("Clipboard error:", err);
    //             // Handle permission denial or other errors
    //         });
    // } else {
    //     console.error("Clipboard API not supported.");
    // }
    inputField.select();
    navigator.clipboard.writeText(inputField.value);
    // navigator.clipboard.writeText(inputField.value);
    alert("copied");
    
    inputField.value=""
    
}
copyBtn.addEventListener("click",function(){
    let copied = copyPassword();
})