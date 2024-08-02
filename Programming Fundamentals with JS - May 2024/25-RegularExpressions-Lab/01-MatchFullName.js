function matchFullName(names) {
    console.log(names.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g).join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
// Ivan Ivanov Test Testov