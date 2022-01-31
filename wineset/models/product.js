// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Product = new Schema({
    name: String,
    slug: String, // Фрагмент строки для поисковой системы
    vendor: String,
    image: Array,
    price: Number,
    price_action: Number,
    recommended: String,
    category: String,
    subCategory: String,
    dess: String,
    dessOne: String,
    desstwo: String,
    dessThree: String,
    dessFour: String,
    //Характеристики
    characteristics: Array,
    //Атрибуты
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Product", Product);