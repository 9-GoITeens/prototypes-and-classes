/*
 * Основи ООП: клас, єкземпляр (обєкт), інтерфейс
 */

/*
 * Функції-конструктори
 * - Найменування
 * - Оператор new
 * - Властивість Function.prototype
 */

// 1 Якщо функція визивається через new, тоді створюється новий обєкт
// 2. Функція визивается в контексті створеного обєкта,
//   //    тобто у this записується силка на нього
// 3. У властивість this.__proto__ записується силка на обєкт Car.prototype
//    тобто Car.prototype це ПРОТОТИП майбутнього обєкта (єкземпляра)
// 4. Силка на обєкт повертається на місце виклику new Car

//  brand: 'Audi',
//   model: 'A6',
//   price: 65000,

//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,

//  brand: 'Audi',
//   model: 'Q6',
//   price: 65000,

// 1. У кожного обєкта є властивість __proto__
// 2. У цій властивості лежить силка на його ПРОТОТИП, тобто інший обєкт
// 3. При створенні літерала обєкта, у властивість __proto__ записується силка на Функцію.prototype
// 4. Функція-конструктор це просто функція :)
// 5. Усю магію робить оператор new
// 6. Якщо функція викликається через new, створюється пустий обєкт
// 7. Функція викликається в контексті створеного обєкта
// 8. У властивість this.__proto__ записується силка на обєкт Функція.prototype
// 9. Силка на обєкт повертається у місце виклику new Фунукція()

/*
 * Статичні властивості і методи
 * - Статичні властивості і методи доступні тільки на самому конструкторі
 * - В статичних методах не потрібен this
 */
