const category = require("../models/category");

exports.seed = function (request, response) {
   category.deleteMany({}, function(err) {
      if (err) {
         console.log(err)
      } else {
         console.log("Delete OK");
      }
   });

   let wine = new category();
   wine.name = "Вино";
   wine.nameEng = "wine";
   wine.image = "/storage/category/wine.png";
   wine.subСategor = [
      {name : "Красное",
      nameEng: "red" },
      {name: "Белое",
      nameEng: "white" },
      {name:"Розовое",
      nameEng: "pink" },
      {name: "Игристое",
      nameEng: "sparkling"},
   ];
   wine.save();
   let glass = new category();
   glass.name = "Бокалы";
   glass.nameEng = "glass";
   glass.image = "/storage/category/glass.png";
   glass.subСategor = [
      {name : "Для вина",
      nameEng: "for-wine" },
      {name: "Для шампанского",
      nameEng: "for_champagne" },
      {name: "Для виски",
      nameEng: "for whiskey" },
   ];
   glass.save();
   let delicacies = new category();
   delicacies.name = "Деликатесы";
   delicacies.nameEng = "delicacies";
   delicacies.image = "/storage/category/homon.png";
   delicacies.subСategor = [
      {name : "Хомон",
      nameEng: "jamon" },
      {name: "Сыр",
      nameEng: "cheese" },
      {name: "Шоколад",
      nameEng: "chocolate" },
   ];
   delicacies.save();
   let candles = new category();
   candles.name = "Свечи";
   candles.nameEng = "candles";
   candles.image = "/storage/category/can.jpg";
   candles.subСategor = [
      {name : "Ароматичиские",
      nameEng: "Aromatic" },
      {name: "Уличные",
      nameEng: "street" },
      {name: "Декоративные",
      nameEng: "Decorative" },
   ];
   candles.save();
   let whiskey = new category();
   whiskey.name = "Виски";
   whiskey.nameEng = "whiskey";
   whiskey.image = "/storage/category/whiske-set.png";
   whiskey.subСategor = [
      {name : "Дымный вкус",
      nameEng: "Smoky" },
      {name: "Пряный вкус",
      nameEng: "Spicy" },
      {name: "Сладкий вкус",
      nameEng: "Sweet" },
      {name: "Фруктовый вкус",
      nameEng: "Fruit" },
   ];
   whiskey.save();

let giftBaskets = new category();
   giftBaskets.name = "Подарочные наборы";
   giftBaskets.nameEng = "giftBaskets";
   giftBaskets.image = "/storage/category/wine-sets.jpg";
   giftBaskets.subСategor = [
      {name : "Ром",
      nameEng: "Rum" },
      {name: "Виски",
      nameEng: "whiskey_set" },
      {name: "Коньяк и бренди",
      nameEng: "Cognac_brandy" },
      {name: "Шампанское и игристое вино",
      nameEng: "Champagne_wine" },
   ];
   giftBaskets.save();


   response.send("Ok");
}
exports.getCategory = function (request, response) {
    console.log("Run GET");
    category.find({},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}
exports.getCategoryByName = function (request, response) {
    const name = request.params.name;
    category.find({nameEng: name},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}
