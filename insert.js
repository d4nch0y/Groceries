// products
db.products.insertMany([
{ _id: 1, name: "Ябълка", type: "плод", price: 2.5, details: { weight: 0.2, color: "червена" }, tags: ["пресни", "сезонни"], supplier: { name: "Зелени Балкани", code: "ZB1" }, stock: 150 },
{ _id: 2, name: "Морков", type: "зеленчук", price: 1.8, details: { weight: 0.5, color: "оранжев" }, tags: ["коренови"], supplier: { name: "Плодово Разнообразие", code: "PR2" }, stock: 200 },
{ _id: 3, name: "Банан", type: "плод", price: 3.2, details: { weight: 0.3, color: "жълт" }, tags: ["екзотични"], supplier: { name: "Тропик ЕООД", code: "TR3" }, stock: 80 },
{ _id: 4, name: "Домат", type: "зеленчук", price: 2.0, details: { weight: 0.1, color: "червен" }, tags: ["пресни"], supplier: { name: "Зелени Балкани", code: "ZB4" }, stock: 120 },
{ _id: 5, name: "Киви", type: "плод", price: 4.5, details: { weight: 0.15, color: "кафяв" }, tags: ["екзотични", "пресни"], supplier: { name: "Тропик ЕООД", code: "TR5" }, stock: 60 },
{ _id: 6, name: "Чесън", type: "зеленчук", price: 1.2, details: { weight: 0.05, color: "бял" }, tags: ["подправки"], supplier: { name: "Био Градинка", code: "BG6" }, stock: 300 },
{ _id: 7, name: "Портокал", type: "плод", price: 2.8, details: { weight: 0.25, color: "оранжев" }, tags: ["цитрусови"], supplier: { name: "Тропик ЕООД", code: "TR7" }, stock: 90 },
{ _id: 8, name: "Лук", type: "зеленчук", price: 0.9, details: { weight: 0.1, color: "бял" }, tags: ["подправки"], supplier: { name: "Био Градинка", code: "BG8" }, stock: 250 },
{ _id: 9, name: "Грозде", type: "плод", price: 3.5, details: { weight: 0.4, color: "лилав" }, tags: ["пресни"], supplier: { name: "Зелени Балкани", code: "ZB9" }, stock: 70 },
{ _id: 10, name: "Картофи", type: "зеленчук", price: 1.5, details: { weight: 1.0, color: "кафяв" }, tags: ["коренови"], supplier: { name: "Плодово Разнообразие", code: "PR10" }, stock: 180 }
]);

// suppliers
db.suppliers.insertMany([
{ _id: 1, name: "Зелени Балкани", info: { location: "София", contact: "green@balkani.bg" }, products: [1, 4, 9], rating: 4.5, certificates: ["ISO 9001", "Organic"] },
{ _id: 2, name: "Плодово Разнообразие", info: { location: "Пловдив", contact: "fruit@diversity.com" }, products: [2, 10], rating: 4.2, certificates: ["Organic"] },
{ _id: 3, name: "Тропик ЕООД", info: { location: "Варна", contact: "tropic@fruit.bg" }, products: [3, 5, 7], rating: 4.7, certificates: ["ISO 9001"] },
{ _id: 4, name: "Био Градинка", info: { location: "Бургас", contact: "bio@garden.com" }, products: [6, 8], rating: 4.8, certificates: ["ISO 9001", "Organic"] },
{ _id: 5, name: "Еко Плод", info: { location: "Русе", contact: "eco@fruit.bg" }, products: [11], rating: 4.3, certificates: ["Local"] },
{ _id: 6, name: "Сезонни Дарове", info: { location: "Стара Загора", contact: "seasonal@gifts.com" }, products: [12], rating: 4.0, certificates: ["Organic"] },
{ _id: 7, name: "Витоша Фрут", info: { location: "София", contact: "vitosha@fruit.bg" }, products: [13], rating: 4.1, certificates: ["Local"] },
{ _id: 8, name: "Родопски Зеленчуци", info: { location: "Смолян", contact: "rhodope@veggies.com" }, products: [14], rating: 4.4, certificates: ["Organic"] },
{ _id: 9, name: "Черноморски Плодове", info: { location: "Бургас", contact: "blacksea@fruit.bg" }, products: [15], rating: 4.6, certificates: ["ISO 9001"] },
{ _id: 10, name: "Тракийска Градина", info: { location: "Пловдив", contact: "thracian@garden.com" }, products: [16], rating: 4.2, certificates: ["Local"] }
]);

// customers
db.customers.insertMany([
{ _id: 1, personalInfo: { name: "Иван Георгиев", email: "ivan@abv.bg" }, contacts: { phone: "0888123456", secondaryPhones: ["02456789"] }, addresses: [{ type: "home", city: "София", street: "Бул. Витоша 10" }, { type: "work", city: "София", street: "Бул. България 5" }], orders: [101, 103], loyaltyPoints: 150 },
{ _id: 2, personalInfo: { name: "Мария Петрова", email: "maria@gmail.com" }, contacts: { phone: "0877654321" }, addresses: [{ type: "home", city: "Пловдив", street: "Ул. Главна 5" }], orders: [102], loyaltyPoints: 75 },
{ _id: 3, personalInfo: { name: "Георги Димитров", email: "georgi@mail.bg" }, contacts: { phone: "0899111222", secondaryPhones: ["052123456"] }, addresses: [{ type: "home", city: "Варна", street: "Бул. Приморски 20" }], orders: [104, 105], loyaltyPoints: 200 },
{ _id: 4, personalInfo: { name: "Елена Иванова", email: "elena@yahoo.com" }, contacts: { phone: "0888333444" }, addresses: [{ type: "home", city: "Бургас", street: "Ул. Черноморска 15" }], orders: [201], loyaltyPoints: 0 },
{ _id: 5, personalInfo: { name: "Петър Стоянов", email: "petar@abv.bg" }, contacts: { phone: "0877555666" }, addresses: [{ type: "home", city: "Русе", street: "Ул. Дунавска 8" }], orders: [106], loyaltyPoints: 50 },
{ _id: 6, personalInfo: { name: "Анна Тодорова", email: "anna@gmail.com" }, contacts: { phone: "0899444555" }, addresses: [{ type: "home", city: "Стара Загора", street: "Ул. Тракийска 12" }], orders: [107], loyaltyPoints: 100 },
{ _id: 7, personalInfo: { name: "Димитър Павлов", email: "dimitar@mail.bg" }, contacts: { phone: "0888666777" }, addresses: [{ type: "home", city: "Плевен", street: "Ул. Централна 3" }], orders: [202], loyaltyPoints: 25 },
{ _id: 8, personalInfo: { name: "Светлана Кирова", email: "svetlana@yahoo.com" }, contacts: { phone: "0877888999" }, addresses: [{ type: "home", city: "Велико Търново", street: "Ул. Цар Асен 5" }], orders: [108], loyaltyPoints: 175 },
{ _id: 9, personalInfo: { name: "Николай Андреев", email: "nikolay@abv.bg" }, contacts: { phone: "0899222333" }, addresses: [{ type: "home", city: "Благоевград", street: "Ул. Пиринска 7" }], orders: [109], loyaltyPoints: 125 },
{ _id: 10, personalInfo: { name: "Радослава Стефанова", email: "radoslava@gmail.com" }, contacts: { phone: "0888999000" }, addresses: [{ type: "home", city: "София", street: "Ул. Гурко 12" }], orders: [110], loyaltyPoints: 90 }
]);

// orders
db.orders.insertMany([
{ _id: 101, customer: { id: 1, name: "Иван Георгиев" }, items: [{ productId: 1, quantity: 2, price: 2.5 }, { productId: 2, quantity: 1, price: 1.8 }], delivery: { address: "Бул. Витоша 10", city: "София" }, total: 4.3, status: "доставена" },
{ _id: 102, customer: { id: 2, name: "Мария Петрова" }, items: [{ productId: 3, quantity: 1, price: 3.2 }], delivery: { address: "Ул. Главна 5", city: "Пловдив" }, total: 3.2, status: "доставена" },
{ _id: 103, customer: { id: 1, name: "Иван Георгиев" }, items: [{ productId: 4, quantity: 3, price: 2.0 }, { productId: 5, quantity: 1, price: 4.5 }], delivery: { address: "Бул. Витоша 10", city: "София" }, total: 6.5, status: "обработва се" },
{ _id: 104, customer: { id: 3, name: "Георги Димитров" }, items: [{ productId: 6, quantity: 2, price: 1.2 }, { productId: 7, quantity: 1, price: 2.8 }], delivery: { address: "Бул. Приморски 20", city: "Варна" }, total: 4.0, status: "доставена" },
{ _id: 105, customer: { id: 3, name: "Георги Димитров" }, items: [{ productId: 8, quantity: 1, price: 0.9 }], delivery: { address: "Бул. Приморски 20", city: "Варна" }, total: 0.9, status: "отказана" },
{ _id: 106, customer: { id: 5, name: "Петър Стоянов" }, items: [{ productId: 9, quantity: 1, price: 3.5 }, { productId: 10, quantity: 1, price: 1.5 }], delivery: { address: "Ул. Дунавска 8", city: "Русе" }, total: 5.0, status: "доставена" },
{ _id: 107, customer: { id: 6, name: "Анна Тодорова" }, items: [{ productId: 1, quantity: 1, price: 2.5 }, { productId: 3, quantity: 2, price: 3.2 }, { productId: 5, quantity: 1, price: 4.5 }], delivery: { address: "Ул. Тракийска 12", city: "Стара Загора" }, total: 10.2, status: "обработва се" },
{ _id: 108, customer: { id: 8, name: "Светлана Кирова" }, items: [{ productId: 2, quantity: 1, price: 1.8 }, { productId: 4, quantity: 1, price: 2.0 }, { productId: 6, quantity: 2, price: 1.2 }], delivery: { address: "Ул. Цар Асен 5", city: "Велико Търново" }, total: 5.0, status: "изпратена" },
{ _id: 109, customer: { id: 9, name: "Николай Андреев" }, items: [{ productId: 7, quantity: 1, price: 2.8 }, { productId: 9, quantity: 1, price: 3.5 }], delivery: { address: "Ул. Пиринска 7", city: "Благоевград" }, total: 7.0, status: "изпратена" },
{ _id: 110, customer: { id: 10, name: "Радослава Стефанова" }, items: [{ productId: 10, quantity: 1, price: 1.5 }], delivery: { address: "Ул. Гурко 12", city: "София" }, total: 1.5, status: "обработва се" },
{ _id: 201, customer: { id: 4, name: "Елена Иванова" }, items: [{ productId: 1, quantity: 1, price: 2.5 }, { productId: 3, quantity: 1, price: 3.2 }], delivery: { address: "Ул. Черноморска 15", city: "Бургас" }, total: 5.7, status: "изпратена" },
{ _id: 202, customer: { id: 7, name: "Димитър Павлов" }, items: [{ productId: 2, quantity: 2, price: 1.8 }, { productId: 4, quantity: 1, price: 2.0 }], delivery: { address: "Ул. Централна 3", city: "Плевен" }, total: 5.6, status: "обработва се" }
]);

// categories
db.categories.insertMany([
{ _id: 1, name: "пресни", description: "Пресни плодове и зеленчуци", characteristics: { shelfLife: "кратък", storage: "хладилник" }, products: [1, 2, 4, 5, 9], tags: ["основни"] },
{ _id: 2, name: "екзотични", description: "Екзотични плодове", characteristics: { shelfLife: "среден", storage: "стая" }, products: [3, 5], tags: ["специални"] },
{ _id: 3, name: "коренови", description: "Коренови зеленчуци", characteristics: { shelfLife: "дълъг", storage: "сухо" }, products: [2, 10], tags: ["основни"] },
{ _id: 4, name: "подправки", description: "Зеленчуци използвани като подправки", characteristics: { shelfLife: "много дълъг", storage: "сухо" }, products: [6, 8], tags: ["допълнителни"] },
{ _id: 5, name: "сезонни", description: "Сезонни продукти", characteristics: { shelfLife: "кратък", storage: "хладилник" }, products: [1], tags: ["ограничени"] },
{ _id: 6, name: "цитрусови", description: "Цитрусови плодове", characteristics: { shelfLife: "среден", storage: "стая" }, products: [7], tags: ["основни"] },
{ _id: 7, name: "биологични", description: "Биологично чисти продукти", characteristics: { shelfLife: "кратък", storage: "хладилник" }, products: [17], tags: ["премиум"] },
{ _id: 8, name: "местни", description: "Местно производство", characteristics: { shelfLife: "среден", storage: "висико" }, products: [1, 2, 4, 6, 8, 9, 10], tags: ["основни"] },
{ _id: 9, name: "вносни", description: "Вносни продукти", characteristics: { shelfLife: "среден", storage: "висико" }, products: [3, 5, 7], tags: ["специални"] },
{ _id: 10, name: "заготвени", description: "Продукти за дълго съхранение", characteristics: { shelfLife: "много дълъг", storage: "сухо" }, products: [6, 8, 10], tags: ["дълготрайни"] }
]);
