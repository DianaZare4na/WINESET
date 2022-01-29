// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Product = new Schema({
    name: String,
    slug: String, // Фрагмент строки для поисковой системы
    vendor: String,
    image: String,
    price: Number,
    //Характеристики
    WineType: String,
	 country: String,
	 sugar: String,
	 manufacturer: String,
    //Атрибуты
    Value: Array,
	 fortress: String,
	 grape: String,
	 imageOne: String,
	 imageTwo: String,
	 imageThree: String,
	 
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Product", Product);