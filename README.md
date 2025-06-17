# База данни за плодове и зеленчуци

## Общо описание
Тази MongoDB база данни е предназначена за управление на онлайн магазин за плодове и зеленчуци. Тя съдържа цялостна информация за продукти, доставчици, клиенти, поръчки и категории. Базата данни поддържа всички основни CRUD операции и включва разширени възможности за агрегация за бизнес анализи.

## Структура на колекциите

### 1. Колекция "Продукти"
Съхранява всички налични плодове и зеленчуци с техните характеристики:

###Products:
```javascript
{
  name: String,         // Име на продукта
  type: String,         // "плод" или "зеленчук"
  price: Number,        // Цена в лева
  weight: Number,       // Тегло в килограми
  color: String,        // Основен цвят
  supplier: String,     // Име на доставчика
  categories: [String], // Списък с категории
  stock: Number,        // Налично количество
  expiryDate: Date      // Срок на годност
}
```
###Suppliers:
```javascript
{
  name: String,        // Име на доставчика
  location: String,    // Град на доставчика
  contact: String,     // Контактен имейл/телефон
  rating: Number,      // Рейтинг (1-5)
  products: [Number]   // Списък с ID на предлагани продукти
}
```
###Customers:

```javascript
{
  name: String,        // Име на клиента
  email: String,       // Имейл адрес
  phone: String,       // Телефонен номер
  address: {           // Адрес
    city: String,      // Град
    street: String     // Улица и номер
  },
  orders: [Number]     // Списък с ID на поръчки
}
```
###Orders:

```javascript
{
  customerId: Number,  // ID на клиента
  products: [Number],  // Списък с ID на поръчани продукти
  total: Number,       // Обща сума на поръчката
  date: Date,          // Дата на поръчката
  status: String       // Статус ("обработва се", "изпратена", "доставена", "отказана")
}
```
###Categories:

```javascript
{
  name: String,        // Име на категорията
  description: String, // Описание на категорията
  products: [Number]   // Списък с ID на продукти в категорията
}
```

## Инсталация и настройка

### 1. Инсталиране на MongoDB

### За Windows:
1. Изтеглете MongoDB Community Edition от [официалния сайт](https://www.mongodb.com/try/download/community)
2. Стартирайте инсталатора и следвайте инструкциите
3. Добавете MongoDB към PATH по време на инсталация
4. Създайте папка `C:\data\db` за съхранение на данните

```bash
# За Ubuntu/Debian
sudo apt-get install -y mongodb

# За MacOS (с Homebrew)
brew tap mongodb/brew
brew install mongodb-community
```
### Стартиране на MongoDB сървър

### За Windows:

```cmd
mongod
```

```bash
# За Ubuntu/Debian
sudo systemctl start mongod

# За MacOS (с Homebrew)
brew services start mongodb-community
brew install mongodb-community
```
### Проверка на инсталацията
```bash
Всички операционни системи:
mongosh --version
```
