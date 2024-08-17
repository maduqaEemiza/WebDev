// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let password = prompt("Enter a password:\n*Atleast 8 characters long\n*Contains both uppercase and lowercase letters\n*includes at least one digit\n* No special characters allowed");

function passwordValidator(password) {
    
    const passwordCode = []
    if (password.length >= 8) {
        for (let i = 0; i < password.length; i++) {

            passwordCode.push(password.charCodeAt(i))
        }


        let specialChar = () => {
            for (const e of passwordCode) {

                if ((e >= 0 && e <= 47) || (e >= 58 && e <= 64) || (e >= 123 && e <= 127)) {
                    return true

                }
            }
            return false
        }
        
        let lowerCase = () => {
            for (const e of passwordCode) {

                if (e >= 97 && e <= 122) {
                    return true

                }
            }
        }
        
        let upperCase = () => {
            for (const e of passwordCode) {

                if (e >= 65 && e <= 90) {
                    return true
                }
            }
        }
        
        let digitCheck = () => {
            for (const e of passwordCode) {

                if (e >= 48 && e <= 57) {
                    return true
                }
            }
        }
        

        if (lowerCase() == true && upperCase() == true && digitCheck() == true && specialChar() == false) {
            alert("Password Set Successfully!")
        }
        else {
            alert("Does not meet the password strength criteria. Try again!")
        }
    }

    else {
        alert("Minimum 8 characters!")
        return false
    }
}

passwordValidator(password)

localStorage.setItem("Password",password)





