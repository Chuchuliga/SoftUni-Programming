function extractFile(input) {
    const key = input.split('\\').pop();
    const lastIndex = key.lastIndexOf('.');
    const fileExtension = key.slice(lastIndex +1);
    const fileName = key.slice(0, lastIndex);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
// File name: Template
// File extension: pptx