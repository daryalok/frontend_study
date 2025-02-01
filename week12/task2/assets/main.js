

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function generateRandomWord() {
    return alphabet[Math.floor(Math.random() * alphabet.length)] +
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log("Случайное слово:", generateRandomWord());