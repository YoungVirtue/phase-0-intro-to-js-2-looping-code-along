const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(names, eventName) {
    let response = [];
    for (let i = 0; i < names.length; i++) {
        response.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return response;
}

function countDown(n) {
    let i = 0;
    while (i <= n) {
        console.log(n - i);
        i++;
    }
}