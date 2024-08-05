function loops() {
    let points = 0;

    for (let row = 1; row <= 3; row++) {

        for (let col = 1; col <= 5; col++) {
            
            if (row == 1 && col == 4) {
                points += 10;
            } else if (row == 3 && col == 2) {
                points += 10;
            } else if (row == 2 && col == 4) {
                break;
            } else if (row == 1 && col == 2) {
                continue;
            } else {
                points++;
            }
        }
    }
    console.log(points);
}

loops()