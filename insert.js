// Създаване на база данни
db = db.getSiblingDB('fruits_and_veggies');

// Колекция products
db.products.insertMany([
  { _id: 1, name: "Ябълка", type: "плод", price: 2.5, weight: 0.2, color: "червена", supplier: "Зелени Балкани", categories: ["пресни", "сезонни"], stock: 150, expiryDate: new Date("2023-12-15") },
  { _id: 2, name: "Морков", type: "зеленчук", price: 1.8, weight: 0.5, color: "оранжев", supplier: "Плодово Разнообразие", categories: ["коренови"], stock: 200, expiryDate: new Date("2023-11-20") },
  { _id: 3, name: "Банан", type: "плод", price: 3.2, weight: 0.3, color: "жълт", supplier: "Тропик ЕООД", categories: ["екзотични"], stock: 80, expiryDate: new Date("2023-10-30") },
  { _id: 4, name: "Домат", type: "зеленчук", price: 2.0, weight: 0.1, color: "червен", supplier: "Зелени Балкани", categories: ["пресни"], stock: 120, expiryDate: new Date("2023-11-05") },
  { _id: 5, name: "Киви", type: "плод", price: 4.5, weight: 0.15, color: "кафяв", supplier: "Тропик ЕООД", categories: ["екзотични", "пресни"], stock: 60, expiryDate: new Date("2023-11-10") },
  { _id: 6, name: "Чесън", type: "зеленчук", price: 1.2, weight: 0.05, color: "бял", supplier: "Био Градинка", categories: ["подправки"], stock: 300, expiryDate: new Date("2024-02-01") },
  { _id: 7, name: "Портокал", type: "плод", price: 2.8, weight: 0.25, color: "оранжев", supplier: "Тропик ЕООД", categories: ["цитрусови"], stock: 90, expiryDate: new Date("2023-12-01") },
  { _id: 8, name: "Лук", type: "зеленчук", price: 0.9, weight: 0.1, color: "бял", supplier: "Био Градинка", categories: ["подправки"], stock: 250, expiryDate: new Date("2024-01-15") },
  { _id: 9, name: "Грозде", type: "плод", price: 3.5, weight: 0.4, color: "лилав", supplier: "Зелени Балкани", categories: ["пресни"], stock: 70, expiryDate: new Date("2023-11-25") },
  { _id: 10, name: "Картофи", type: "зеленчук", price: 1.5, weight: 1.0, color: "кафяв", supplier: "Плодово Разнообразие", categories: ["коренови"], stock: 180, expiryDate: new Date("2024-03-01") }
]);

// Колекция suppliers
db.suppliers.insertMany([
  { _id: 1, name: "Зелени Балкани", location: "София", contact: "green@balkani.bg", rating: 4.5, products: [1, 4, 9] },
  { _id: 2, name: "Плодово Разнообразие", location: "Пловдив", contact: "fruit@diversity.com", rating: 4.2, products: [2, 10] },
  { _id: 3, name: "Тропик ЕООД", location: "Варна", contact: "tropic@fruit.bg", rating: 4.7, products: [3, 5, 7] },
  { _id: 4, name: "Био Градинка", location: "Бургас", contact: "bio@garden.com", rating: 4.8, products: [6, 8] },
  { _id: 5, name: "Еко Плод", location: "Русе", contact: "eco@fruit.bg", rating: 4.3, products: [] },
  { _id: 6, name: "Сезонни Дарове", location: "Стара Загора", contact: "seasonal@gifts.com", rating: 4.0, products: [] },
  { _id: 7, name: "Витоша Фрут", location: "София", contact: "vitosha@fruit.bg", rating: 4.1, products: [] },
  { _id: 8, name: "Родопски Зеленчуци", location: "Смолян", contact: "rhodope@veggies.com", rating: 4.4, products: [] },
  { _id: 9, name: "Черноморски Плодове", location: "Бургас", contact: "blacksea@fruit.bg", rating: 4.6, products: [] },
  { _id: 10, name: "Тракийска Градина", location: "Пловдив", contact: "thracian@garden.com", rating: 4.2, products: [] }
]);

// Колекция customers
db.customers.insertMany([
  { _id: 1, name: "Иван Георгиев", email: "ivan@abv.bg", phone: "0888123456", address: { city: "София", street: "Бул. Витоша 10" }, orders: [101, 103] },
  { _id: 2, name: "Мария Петрова", email: "maria@gmail.com", phone: "0877654321", address: { city: "Пловдив", street: "Ул. Главна 5" }, orders: [102] },
  { _id: 3, name: "Георги Димитров", email: "georgi@mail.bg", phone: "0899111222", address: { city: "Варна", street: "Бул. Приморски 20" }, orders: [104, 105] },
  { _id: 4, name: "Елена Иванова", email: "elena@yahoo.com", phone: "0888333444", address: { city: "Бургас", street: "Ул. Черноморска 15" }, orders: [] },
  { _id: 5, name: "Петър Стоянов", email: "petar@abv.bg", phone: "0877555666", address: { city: "Русе", street: "Ул. Дунавска 8" }, orders: [106] },
  { _id: 6, name: "Анна Тодорова", email: "anna@gmail.com", phone: "0899444555", address: { city: "Стара Загора", street: "Ул. Тракийска 12" }, orders: [107] },
  { _id: 7, name: "Димитър Павлов", email: "dimitar@mail.bg", phone: "0888666777", address: { city: "Плевен", street: "Ул. Централна 3" }, orders: [] },
  { _id: 8, name: "Светлана Кирова", email: "svetlana@yahoo.com", phone: "0877888999", address: { city: "Велико Търново", street: "Ул. Цар Асен 5" }, orders: [108] },
  { _id: 9, name: "Николай Андреев", email: "nikolay@abv.bg", phone: "0899222333", address: { city: "Благоевград", street: "Ул. Пиринска 7" }, orders: [109] },
  { _id: 10, name: "Радослава Стефанова", email: "radoslava@gmail.com", phone: "0888999000", address: { city: "София", street: "Ул. Гурко 12" }, orders: [110] }
]);

// Колекция orders
db.orders.insertMany([
  { _id: 101, customerId: 1, products: [1, 2], total: 4.3, date: new Date("2023-10-05"), status: "доставена" },
  { _id: 102, customerId: 2, products: [3], total: 3.2, date: new Date("2023-10-06"), status: "доставена" },
  { _id: 103, customerId: 1, products: [4, 5], total: 6.5, date: new Date("2023-10-07"), status: "обработва се" },
  { _id: 104, customerId: 3, products: [6, 7], total: 4.0, date: new Date("2023-10-08"), status: "доставена" },
  { _id: 105, customerId: 3, products: [8], total: 0.9, date: new Date("2023-10-09"), status: "отказана" },
  { _id: 106, customerId: 5, products: [9, 10], total: 5.0, date: new Date("2023-10-10"), status: "доставена" },
  { _id: 107, customerId: 6, products: [1, 3, 5], total: 10.2, date: new Date("2023-10-11"), status: "обработва се" },
  { _id: 108, customerId: 8, products: [2, 4, 6], total: 5.0, date: new Date("2023-10-12"), status: "изпратена" },
  { _id: 109, customerId: 9, products: [7, 9], total: 7.0, date: new Date("2023-10-13"), status: "изпратена" },
  { _id: 110, customerId: 10, products: [10], total: 1.5, date: new Date("2023-10-14"), status: "обработва се" }
]);

// Колекция categories
db.categories.insertMany([
  { _id: 1, name: "пресни", description: "Пресни плодове и зеленчуци", products: [1, 2, 4, 5, 9] },
  { _id: 2, name: "екзотични", description: "Екзотични плодове", products: [3, 5] },
  { _id: 3, name: "коренови", description: "Коренови зеленчуци", products: [2, 10] },
  { _id: 4, name: "подправки", description: "Зеленчуци използвани като подправки", products: [6, 8] },
  { _id: 5, name: "сезонни", description: "Сезонни продукти", products: [1] },
  { _id: 6, name: "цитрусови", description: "Цитрусови плодове", products: [7] },
  { _id: 7, name: "биологични", description: "Биологично чисти продукти", products: [] },
  { _id: 8, name: "местни", description: "Местно производство", products: [1, 2, 4, 6, 8, 9, 10] },
  { _id: 9, name: "вносни", description: "Вносни продукти", products: [3, 5, 7] },
  { _id: 10, name: "заготвени", description: "Продукти за дълго съхранение", products: [6, 8, 10] }
]);
