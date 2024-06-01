function echoType(type) {
    console.log(typeof(type));
    if (type === null) {
        console.log(`Parameter is not suitable for printing`);
    } else {
        console.log(type);
    }
}

echoType(null)