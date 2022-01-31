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
    
	 let wineRed = new product();
    wineRed.name = "Tenuta Argentiera Bolgheri Superiore";
    wineRed.vendor = "Tenuta";
    wineRed.slug = wineRed.name + wineRed.vendor; 
    wineRed.price = "2500";
    wineRed.price_action = "1999";
    wineRed.category = "wine";
    wineRed.subCategory = "red";
    wineRed.dess = "0.75";
    wineRed.dessOne =  "Италия";
    wineRed.desstwo = "14,5%";
    wineRed.dessThree =  "Вино красное сухое";
    wineRed.dessFour = "каберне совиньйон +";
    wineRed.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "Вино красное сухое",
      },
      {
         name: "Сахар:",
         meaning: "Сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон +",
      },
      {
         name: "Крепость:",
         meaning: "14,5%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wineRed.image =["/storage/product/wine.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wineRed.manufacturer = "Tenuta argentiera";
   wineRed.save();
   response.send("Ok");
}


exports.autocomplete = function (request, response) {
    const searchString = request.query.searchString;
    console.log("searchString: " + searchString);
    if(searchString.length < 2) {
        response.json([]);
        return;
    }
    product.find({model: {$regex:searchString, "$options" : "-i" }},
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