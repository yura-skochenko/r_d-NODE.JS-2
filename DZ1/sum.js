const input = process.argv[2];
let inputArray;

if (!input || typeof input !== 'string') {
    console.log('Будь ласка введіть рядок з масивом чисел');
    process.exit(1);
}

try {
    inputArray = JSON.parse(input);
} catch (error) {
    console.error('Помилка парсингу JSON');
    process.exit(1);
}

function calculatingSumInArray (array) {
    let sum = 0;

    if (!Array.isArray(array)) {
        console.log('Будь ласка введіть масив з числами');
        process.exit(1);
    } else {
        for (const item of array) {
            if (Array.isArray(item)) {
                sum += calculatingSumInArray(item);
            } else if (typeof item === 'number') {
                sum += item;
            } else {
                console.log(`Це не число: ${item}`);
            }
        }
    }

    return sum;
}

console.log(`Сума чисел: ${calculatingSumInArray(inputArray)}`);