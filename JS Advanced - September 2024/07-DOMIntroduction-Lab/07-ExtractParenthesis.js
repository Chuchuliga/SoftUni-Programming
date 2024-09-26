function extractParenthesis() {
    let text = document.getElementById('content');
    let output = text.textContent.match(/\((.*?)\)/g).map(x => x.slice(1, -1)).join('; ');
    
    return output;
}