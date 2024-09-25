function fromJSONToHTMLTable(input){
    const data = JSON.parse(input);
    const headers = Object.keys(data[0]);

    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/ /g, '&nbsp;')
    }

    let result = '<table>\n'

    result += '   <tr>' + headers.map(h => `<th>${escapeHTML(h)}</th>`).join('') + '</tr>\n';

    data.forEach(entry => {
        result += '   <tr>' + headers.map(h => `<td>${escapeHTML(entry[h])}</td>`).join('') + '</tr>\n'
    });

    result += '</table>'

    return result;
}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`));