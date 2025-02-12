Добре, ось базовий приклад обробки даних на JavaScript, який включає читання, сортування, фільтрування і написання даних:

```javascript
// Функція для генерації випадкового числа між min і max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерація випадкового набору даних
let data = [];
for(let i = 0; i < 50; i++) {
    data.push({
        id: i,
        value: getRandomInt(0, 100)
    });
}

// Виведення оригінальних даних
console.log('Original data:', data);

// Сортування даних
let sortedData = data.sort((a, b) => a.value - b.value);
console.log('Sorted data:', sortedData);

// Фільтрація даних
let filteredData = data.filter(item => item.value > 50);
console.log('Filtered data:', filteredData);

// Перетворення даних
let transformedData = data.map(item => {
    return {
        id: item.id,
        isValueLarge: item.value > 50
    };
});
console.log('Transformed data:', transformedData);

// Редукція даних
let sumOfValues = data.reduce((sum, item) => sum + item.value, 0);
console.log('Sum of all values:', sumOfValues);

// Запис даних
let fs = require('fs');
fs.writeFile('data.txt', JSON.stringify(data), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('The file was saved!');
}); 

// Читання даних
fs.readFile('data.txt', 'utf8', function(err, contents) {
    if(err) {
        return console.log(err);
    }
    console.log('File contents:', contents);
}); 

// Оновлення даних
let updatedData = data.map(item => {
    if(item.id === 25) {
        return {
            ...item,
            value: 99
        };
    } else {
        return item;
    }
});
console.log('Updated data:', updatedData);

// Видалення даних
let prunedData = data.filter(item => item.id !== 25);
console.log('Pruned data:', prunedData);
```

Цей код створює випадковий набір даних, а потім проходиться через різні базові операції обробки даних. Він включає сортування, фільтрування, перетворення (map), редукцію (reduce), запис, читання, оновлення і видалення даних. Примітка: для читання і запису файлів необхідно запустити цей код в середовищі Node.js.