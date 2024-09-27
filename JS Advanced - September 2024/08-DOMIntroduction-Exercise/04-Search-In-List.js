function searchInList() {
    const search = document.getElementById('searchText');
    const towns = document.querySelectorAll('ul#towns li');
    const result = document.getElementById('result');

    let searchedText = search.value;
    let townsArray = Array.from(towns);
    let count = 0;

    for (const town of townsArray) {
        
        if (town.textContent.includes(searchedText) && searchedText !== '') {
            count++;
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    }

    result.textContent = `${count} matches found`
}