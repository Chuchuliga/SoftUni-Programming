function passwordValidator(password) {
    
    function checkIfValidLenght(pass) {
        if (password.length < 6 || password.length > 10) {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        } else {
            return true;
        }
    }

    function checkIfAlphanumeric(pass) {
        let pattern = /^[a-zA-Z0-9]+$/;
        if (!pattern.test(pass)) {
            console.log(`Password must consist only of letters and digits`);
            return false;
        } else {
            return true;
        }
    }

    function checkIfHasMin2Digits(pass) {
        let pattern = /[0-9]{2,}/;
        if (!pattern.test(pass)) {
            console.log(`Password must have at least 2 digits`);
            return false;
        } else {
            return true;
        }
    }

    let isValidLenght = checkIfValidLenght(password);
    let isAlphanumeric = checkIfAlphanumeric(password);
    let has2Digits = checkIfHasMin2Digits(password);

    if (isValidLenght && isAlphanumeric && has2Digits) {
        console.log(`Password is valid`);
    }
}

passwordValidator(`logIn`)