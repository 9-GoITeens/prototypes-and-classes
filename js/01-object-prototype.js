/*
 * Прототип обєкта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Власні властивості і Object.prototype.hasOwnProperty()
 * - Цепочка прототипів
 */
// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('objB', objB);
// console.log('objB.y', objB.y);
// console.log('objB.z', objB.z);
// // clo - консолька для того щоб підписати

// console.log('objC', objC);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA', objA);
// objA.z = 1000;
// console.log('objA.z', objA.z);
// console.log(objC.hasOwnProperty('x'));
// console.log(objC.hello);

/*
 * Алгоритм пошуку властивостей в цепочке прототипів:
 * 1. Пошук починається у власних властивостях
 * 2. Якщо властивості нема у власних, пошук переходить до цепочки прототипів
 * 3. Пошук припиняється при першому співпадінню (є така властивість)
 * 4. Повертається значення властивості
 */

const dummyObj = Object.create({ message: 'Це властивість обєкта прототипа' });
dummyObj.message = 'Властивість обєкта';

console.log('dummyObj', dummyObj);

console.log(dummyObj.message);
