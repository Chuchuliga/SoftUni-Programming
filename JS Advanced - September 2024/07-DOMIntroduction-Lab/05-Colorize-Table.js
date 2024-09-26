function colorizeTable() {
    const rows = document.querySelectorAll('tr:nth-child(even)');

    for (const row of rows) {
        row.style.backgroundColor = 'teal';
    }
}