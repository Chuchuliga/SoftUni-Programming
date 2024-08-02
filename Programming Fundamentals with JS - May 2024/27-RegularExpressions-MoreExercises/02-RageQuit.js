function rageQuit(input) {
    const regex = /([^\d]+)(\d+)/g;  
    let rageMessage = '';
    
    while ((match = regex.exec(input)) !== null) {
        const [word, str, numStr] = match;
        const num = Number(numStr);
        const upperStr = str.toUpperCase();
        
        rageMessage += upperStr.repeat(num);
        
    }   
    const uniqueCount = new Set(rageMessage);
    
    console.log(`Unique symbols used: ${uniqueCount.size}`);
    console.log(rageMessage);
}

rageQuit('a3')
// Unique symbols used: 1
// AAA