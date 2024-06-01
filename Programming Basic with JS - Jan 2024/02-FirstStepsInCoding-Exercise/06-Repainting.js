function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workHours = Number(input[3]);
    let bag = 0.40;
    let needNylon = nylon * 1.50;
    let needPaint = paint * 14.50;
    let allPaintThinner = paintThinner * 5.00;
    let extraPaint = 0.10 * needPaint;
    let allPaint = needPaint + extraPaint;
    let allNylon = needNylon + 2 * 1.50;
    let price = allNylon + allPaint + allPaintThinner + bag;
    let work = (0.30 * price) * workHours;
    let finalPrice = price + work;
    console.log(finalPrice)
}

repainting(["10 ","11 ","4 ","8 "] );