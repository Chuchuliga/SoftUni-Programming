function formatTheText() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    const sentences = input.split('.').map(s => s.trim()).filter(x => x.length);
    const paragraphs = [];

    while (sentences.length) {
        const paragraph = sentences.splice(0, 3).join('.') + '.';
        paragraphs.push(`<p>${paragraph}</p>`)
    }
    output.innerHTML = paragraphs.join('\n');
}