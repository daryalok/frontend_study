// Создаём массив с оценками
let grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);

console.log("Оценки студентов:", grades);

// 1. Рассчитаем средний балл
let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Средний балл:", average.toFixed(2));

// 2. Найдём максимальный балл
let maxGrade = Math.max(...grades);
console.log("Максимальный балл:", maxGrade);

// 3. Найдём минимальный балл
let minGrade = Math.min(...grades);
console.log("Минимальный балл:", minGrade);

// 4. Количество студентов с положительной оценкой (>=60)
let positiveGrades = grades.filter(grade => grade >= 60).length;
console.log("Количество студентов с положительной оценкой:", positiveGrades);

// 5. Количество студентов с отрицательной оценкой (<60)
let negativeGrades = grades.filter(grade => grade < 60).length;
console.log("Количество студентов с отрицательной оценкой:", negativeGrades);

// 6. Преобразование числовых оценок в буквенные
let letterGrades = grades.map(grade => {
    if (grade >= 80) return "A";
    if (grade >= 60) return "B";
    if (grade >= 40) return "C";
    if (grade >= 20) return "D";
    return "E";
});

console.log("Буквенные оценки:", letterGrades);
