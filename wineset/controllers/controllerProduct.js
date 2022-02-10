// TODO: подключить модель для сущности
const product = require("../models/product");

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    const element = new product(request.body);
    element.save(function (err) {
        if (err) {
            console.log(err);
            response.json(err);
            return;
        }
        return response.json(element);
    });
}

// Read => GET
exports.get = function (request, response) {
    console.log("Run GET");
    product.find({},
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

// Read => GET
exports.getById = function (request, response) {
    let id = request.params.id;
    console.log("Run GET");
    product.findById(id,
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


// Update => PUT
exports.put = function (request, response) {
    console.log("Run PUT");
}

// Delete => DELETE
exports.delete = function (request, response) {
    console.log("Run DELETE");
}


exports.seed = function (request, response) {
   delicacies_jamon1.name = "Serrano Duroc Gran Reserva на кости";
   delicacies_jamon1.vendor = "Хамон Torre De Nuñez";
   delicacies_jamon1.slug = delicacies_jamon1.name + delicacies_jamon1.vendor; 
   delicacies_jamon1.price = "2200";
   delicacies_jamon1.price_action = "1899";
   delicacies_jamon1.category = "delicacies";
   delicacies_jamon1.subCategory = "jamon";
   delicacies_jamon1.dess = "Деликатесы";
   delicacies_jamon1.dessOne =  "Хамон";
   delicacies_jamon1.desstwo = "Испания";
   delicacies_jamon1.dessThree =  "4.5 кг";
   delicacies_jamon1.dessFour = "Свинина";
   delicacies_jamon1.characteristics = [
      {
         name: "Вид: ",
         meaning: "Хамон",
      },
       {
          name: "Тип мяса: ",
          meaning: "Свинина",
       },
       {
         name: "Вес, кг: ",
         meaning: "4.5",
      },
      {
         name: "Страна-производитель товара: ",
         meaning: "Испания",
      },
      {
         name: "Срок хранения: ",
         meaning: "365 дней",
      },
   ];
   delicacies_jamon1.image =["/storage/product/delicacies_jamon1.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   delicacies_jamon1.manufacturer = "Хамон Torre De Nuñez";
   delicacies_jamon1.save();

let delicacies_jamon2 = new product();
   delicacies_jamon2.name = "Хамон Iberico Cebo Jamondor";
   delicacies_jamon2.vendor = "Хамон";
   delicacies_jamon2.slug = delicacies_jamon2.name + delicacies_jamon2.vendor; 
   delicacies_jamon2.price = "3997";
   delicacies_jamon2.price_action = "3120";
   delicacies_jamon2.category = "delicacies";
   delicacies_jamon2.subCategory = "jamon";
   delicacies_jamon2.dess = "Деликатесы";
   delicacies_jamon2.dessOne =  "Хамон";
   delicacies_jamon2.desstwo = "Испания";
   delicacies_jamon2.dessThree =  "100 гр";
   delicacies_jamon2.dessFour = "Свинина";
   delicacies_jamon2.characteristics = [
      {
         name: "Вид: ",
         meaning: "Хамон",
      },
       {
          name: "Тип мяса: ",
          meaning: "Свинина",
       },
       {
         name: "Вес, кг: ",
         meaning: "0.1",
      },
      {
         name: "Страна-производитель товара: ",
         meaning: "Испания",
      },
      {
         name: "Срок хранения: ",
         meaning: "24-28 месяцев",
      },
   ];
   delicacies_jamon2.image =["/storage/product/delicacies_jamon2.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   delicacies_jamon2.manufacturer = "Хамон";
   delicacies_jamon2.save();

let delicacies_jamon3 = new product();
   delicacies_jamon3.name = "Иберико Бейота, ручная нарезка Jamondul";
   delicacies_jamon3.vendor = "Хамон";
   delicacies_jamon3.slug = delicacies_jamon3.name + delicacies_jamon3.vendor; 
   delicacies_jamon3.price = "547";
   delicacies_jamon3.price_action = "489";
   delicacies_jamon3.category = "delicacies";
   delicacies_jamon3.subCategory = "jamon";
   delicacies_jamon3.dess = "Деликатесы";
   delicacies_jamon3.dessOne =  "Хамон";
   delicacies_jamon3.desstwo = "Испания";
   delicacies_jamon3.dessThree =  "70 гр";
   delicacies_jamon3.dessFour = "Свинина";
   delicacies_jamon3.characteristics = [
      {
         name: "Вид: ",
         meaning: "Хамон",
      },
       {
          name: "Тип мяса: ",
          meaning: "Свинина",
       },
       {
         name: "Вес, кг: ",
         meaning: "0.07",
      },
      {
         name: "Страна-производитель товара: ",
         meaning: "Испания",
      },
   ];
   delicacies_jamon3.image =["/storage/product/delicacies_jamon3.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   delicacies_jamon3.manufacturer = "Хамон";
   delicacies_jamon3.save();

let delicacies_jamon4 = new product();
   delicacies_jamon4.name = "Pont Курадо мини в подарочной упаковке";
   delicacies_jamon4.vendor = "Хамон Pont Курадо";
   delicacies_jamon4.slug = delicacies_jamon4.name + delicacies_jamon4.vendor; 
   delicacies_jamon4.price = "1053";
   delicacies_jamon4.price_action = "769";
   delicacies_jamon4.category = "delicacies";
   delicacies_jamon4.subCategory = "jamon";
   delicacies_jamon4.dess = "Деликатесы";
   delicacies_jamon4.dessOne =  "Хамон";
   delicacies_jamon4.desstwo = "Испания";
   delicacies_jamon4.dessThree =  "1 кг";
   delicacies_jamon4.dessFour = "Свинина";
   delicacies_jamon4.characteristics = [
      {
         name: "Вид: ",
         meaning: "Хамон",
      },
       {
          name: "Тип мяса: ",
          meaning: "Свинина",
       },
       {
         name: "Вес, кг: ",
         meaning: "1",
      },
      {
         name: "Страна-производитель товара: ",
         meaning: "Испания",
      },
      {
         name: "Срок хранения: ",
         meaning: "270 дней",
      },
   ];
   delicacies_jamon4.image =["/storage/product/delicacies_jamon4.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   delicacies_jamon4.manufacturer = "Хамон Pont Курадо";
   delicacies_jamon4.save();

let delicacies_jamon5 = new product();
   delicacies_jamon5.name = "Палета Серрано Теруэль Gran Reserva";
   delicacies_jamon5.vendor = "Хамон Палета Серрано";
   delicacies_jamon5.slug = delicacies_jamon5.name + delicacies_jamon5.vendor; 
   delicacies_jamon5.price = "2890";
   delicacies_jamon5.price_action = "2340";
   delicacies_jamon5.category = "delicacies";
   delicacies_jamon5.subCategory = "jamon";
   delicacies_jamon5.dess = "Деликатесы";
   delicacies_jamon5.dessOne =  "Хамон";
   delicacies_jamon5.desstwo = "Испания";
   delicacies_jamon5.dessThree =  "5 кг";
   delicacies_jamon5.dessFour = "Свинина";
   delicacies_jamon5.characteristics = [
      {
         name: "Вид: ",
         meaning: "Хамон",
      },
       {
          name: "Тип мяса: ",
          meaning: "Свинина",
       },
       {
         name: "Вес, кг: ",
         meaning: "5",
      },
      {
         name: "Страна-производитель товара: ",
         meaning: "Испания",
      },
      {
         name: "Срок хранения: ",
         meaning: "365 дней",
      },
   ];
   delicacies_jamon5.image =["/storage/product/delicacies_jamon5.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   delicacies_jamon5.manufacturer = "Хамон Палета Серрано";
   delicacies_jamon5.save();
   response.send("Ok");
}


exports.autocomplete = function (request, response) {
    const searchString = request.query.searchString;
    console.log("searchString: " + searchString);
    if(searchString.length < 2) {
        response.json([]);
        return;
    }
    product.find({name: {$regex:searchString, "$options" : "-i" }},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );

    //response.send("Ok");
}
exports.getFilterFields = function (request, response){
    let fields = {
        WineType: {
            name: "тип вина (тип характеристики)",
            type: "checkbox",
            values: ["сухое", "красное"]
        },
        Value:{
            name: " доступный обьем",
            type: "checkbox",
            values: ["0.75", "1.5"]
        }
    }
    response.json(fields);
}
exports.getByFields = function (request, response){
    response.send("okf");
}

exports.getByCategory = function (request, response) {
   const categoryName = request.params.categoryName;
   console.log("categoryName: " + categoryName);
   product.find({category: categoryName},
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

exports.getBySubCategory = function (request, response) {
   const subCategoryName = request.params.subCategoryName;
   console.log("categoryName: " + subCategoryName);
   product.find({subCategory: subCategoryName},
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

exports.getByRecommendedProducts = function (request, response) {
   console.log("recommended products");
   product.find({recommended: "recommended"},
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
exports.getBysubCategoryWine = function (request, response) {
   console.log("category");
   product.find({category: "wine"},
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
exports.getBysubCategoryWhiskey = function (request, response) {
   console.log("category");
   product.find({category: "whiskey"},
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
exports.getBysubCategoryGiftBaskets = function (request, response) {
   console.log("category");
   product.find({category: "giftBaskets"},
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
exports.getBysubCategoryGlass = function (request, response) {
   console.log("category");
   product.find({category: "glass"},
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
exports.getBysubCategoryCandles = function (request, response) {
   console.log("category");
   product.find({category: "candles"},
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
exports.getBysubCategoryJamon = function (request, response) {
   console.log("subCategory");
   product.find({subCategory: "jamon"},
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
exports.getBysubCategoryCheese = function (request, response) {
   console.log("subCategory");
   product.find({subCategory: "cheese"},
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
exports.getBysubCategoryChocolate = function (request, response) {
   console.log("chocolate");
   product.find({subCategory: "chocolate"},
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