function matchPhoneNumber(numberes) {
    console.log(numberes[0].match(/\+359([ -])2\1\d{3}\1\d{4}\b/g).join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
// +359 2 222 2222, +359-2-222-2222