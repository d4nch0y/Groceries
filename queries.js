// ============== PRODUCTS ==============
// Всички продукти
db.products.find({});

// Плодове над 2.50 лв
db.products.find({ type: "плод", price: { $gt: 2.5 } });

// Зеленчуци от категория "пресни" с наличност над 100
db.products.find({ type: "зеленчук", categories: "пресни", stock: { $gt: 100 } });

// Актуализация на цената на ябълките
db.products.updateOne(
  { name: "Ябълка" },
  { $set: { price: 2.8 } }
);

// Изтриване на изтекли продукти
db.products.deleteMany({ expiryDate: { $lt: new Date() } });

// Агрегация: Средна цена по тип продукт
db.products.aggregate([
  { $group: { _id: "$type", avgPrice: { $avg: "$price" } } }
]);

// Агрегация: Общо количество по категории
db.products.aggregate([
  { $unwind: "$categories" },
  { $group: { _id: "$categories", totalStock: { $sum: "$stock" } } },
  { $sort: { totalStock: -1 } }
]);

// ============== SUPPLIERS ==============
// Всички доставчици
db.suppliers.find({});

// Доставчици от София с рейтинг над 4.3
db.suppliers.find({ location: "София", rating: { $gt: 4.3 } });

// Актуализация на рейтинг
db.suppliers.updateOne(
  { name: "Плодово Разнообразие" },
  { $set: { rating: 4.3 } }
);

// Изтриване на доставчици без продукти
db.suppliers.deleteMany({ products: { $size: 0 } });

// Агрегация: Брой доставчици по град
db.suppliers.aggregate([
  { $group: { _id: "$location", count: { $sum: 1 } } }
]);

// ============== CUSTOMERS ==============
// Всички клиенти
db.customers.find({});

// Клиенти от София с поръчки
db.customers.find({ "address.city": "София", orders: { $not: { $size: 0 } } });

// Актуализация на имейл
db.customers.updateOne(
  { name: "Иван Георгиев" },
  { $set: { email: "ivan.new@abv.bg" } }
);

// Изтриване на клиенти без поръчки
db.customers.deleteMany({ orders: { $size: 0 } });

// Агрегация: Брой клиенти по град
db.customers.aggregate([
  { $group: { _id: "$address.city", count: { $sum: 1 } } }
]);

// ============== ORDERS ==============
// Всички поръчки
db.orders.find({});

// Поръчки над 5 лв със статус "доставена"
db.orders.find({ total: { $gt: 5 }, status: "доставена" });

// Актуализация на статус
db.orders.updateOne(
  { _id: 103 },
  { $set: { status: "изпратена" } }
);

// Изтриване на отказани поръчки
db.orders.deleteMany({ status: "отказана" });

// Агрегация: Обща сума на поръчки по статус
db.orders.aggregate([
  { $group: { _id: "$status", totalAmount: { $sum: "$total" } } }
]);

// ============== CATEGORIES ==============
// Всички категории
db.categories.find({});

// Категории с повече от 3 продукта
db.categories.find({ products: { $size: { $gt: 3 } } });

// Актуализация на описание
db.categories.updateOne(
  { name: "пресни" },
  { $set: { description: "Най-пресни плодове и зеленчуци" } }
);

// Изтриване на празни категории
db.categories.deleteMany({ products: { $size: 0 } });

// Агрегация: Брой продукти по категория
db.categories.aggregate([
  { $project: { name: 1, productCount: { $size: "$products" } } },
  { $sort: { productCount: -1 } }
]);
