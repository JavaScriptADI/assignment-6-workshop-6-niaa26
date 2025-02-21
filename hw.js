// ცვლადში 50 პროდუქტი ჩავსვით
const PRODUCT_COUNT = 50;

// ცარიელი (array, სადაც ყველა პროდუქტის მონაცემი ჩაიწერება
const products = [];

// ფუნქცია რომელიც მიცემული მინიმუმის და მაქსიმუმის შორის შემთხვევით მთელ რიცხვს გვიბრუნებს 
function getRandomInt(min, max) {
    // რაც მოგვცემს ამ რანდომ მთელ რიცხვს
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ფუნქცია, ქმნის შემთხვევით სიტყვებს, რამდენი ასოდანაც გვინდა
function getRandomString(length) {
    let text = '';
    // ტექსტი რო შეიქმნას უნდა გამეორდეს რამდენჯერმე ხოდა ფორ ით გავამეორებთ
    for (let i = 0; i < length; i++) {
        // გამოტოვებები და ასოები რამდენი ჩაიწეროს
        if (getRandomInt(0, 100) > 10)
            text += String.fromCharCode(getRandomInt(97, 122)); // ასოები
        else
            text += ' ';
    }
    return text;
}

// პროდუქტებს ქმნის
for (let i = 0; i < PRODUCT_COUNT; i++) {
    products.push({
        // სათაურს ქმნის იმ რანდომ სტერინგი ფუნქციით
        title: getRandomString(getRandomInt(30, 60)),
        // ფასს ქმნის აქამდე შექმნილი ფუნქციით
        price: getRandomInt(500, 5000),
        // არწერას ამ რანდომ სტრინგის ფუნქციით
        description: getRandomString(getRandomInt(300, 1000))
    });
}

// სავარჯიშოები

// 1
let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
let averagePrice = totalPrice / PRODUCT_COUNT;

// 2
let totalWords = products.reduce((sum, product) => sum + product.description.split(' ').length, 0);
let averageWords = totalWords / PRODUCT_COUNT;

// 3
let totalCharacters = products.reduce((sum, product) => sum + product.description.length, 0);
let averageCharacters = totalCharacters / PRODUCT_COUNT;

// 4
let maxWords = Math.max(...products.map(product => product.description.split(' ').length));

// 5 
let minPrice = Math.min(...products.map(product => product.price));
