function loadingBar(num) {

    function setupLoadingBar(percentLoaded) {
        let percentSymbolCount = percentLoaded / 10;
        let dotsSymbolCount = 10 - percentSymbolCount;

        let percents = `%`.repeat(percentSymbolCount);
        let dots = `.`.repeat(dotsSymbolCount);

        let bar = `[${percents}${dots}]`;
        return bar;
    }

    let resultBar = setupLoadingBar(num);

    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(resultBar);
    } else {
        console.log(`${num}% ${resultBar}`);
        console.log(`Still loading...`);
    }
}

loadingBar(30)