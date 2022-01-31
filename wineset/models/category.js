// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Category = new Schema({
   subСategor: Array,
   name: String,
   nameEng: String,
   image: String,
   
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Category", Category);