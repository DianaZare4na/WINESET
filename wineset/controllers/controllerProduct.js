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
    

   let winef = new product();
   winef.name = "Trevisana Prosecco Frizzante";
   winef.vendor = "Trevisana";
   winef.slug = winef.name + winef.vendor; 
   winef.price = "270";
   winef.price_action = "169";
   winef.category = "wine";
   winef.subCategory = "sparkling";
   winef.dess = "0.75";
   winef.dessOne =  "Италия";
   winef.desstwo = "11%";
   winef.dessThree =  "Вино игристое";
   winef.dessFour = "каберне совиньйон";
   winef.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "белое экстра-сухое",
      },
      {
         name: "Сахар:",
         meaning: "Сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "11",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   winef.image =["/storage/product/wine1.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   winef.manufacturer = "Trevisana";
   winef.save();

   let wineS = new product();
   wineS.name = "Spumante Millesimato";
   wineS.vendor = "Spumante";
   wineS.slug = wineS.name + wineS.vendor; 
   wineS.price = "300";
   wineS.price_action = "189";
   wineS.category = "wine";
   wineS.subCategory = "sparkling";
   wineS.dess = "0.75";
   wineS.dessOne =  "Италия";
   wineS.desstwo = "11%";
   wineS.dessThree =  "Вино игристое";
   wineS.dessFour = "каберне совиньйон";
   wineS.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "белое экстра-сухое",
      },
      {
         name: "Сахар:",
         meaning: "Сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "11%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wineS.image =["/storage/product/wine2.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wineS.manufacturer = "Spumante";
   wineS.save();

   let wineT = new product();
   wineT.name = "Astoria Prosecco Spumante";
   wineT.vendor = "Astoria";
   wineT.slug = wineT.name + wineT.vendor; 
   wineT.price = "400";
   wineT.price_action = "199";
   wineT.category = "wine";
   wineT.subCategory = "sparkling";
   wineT.dess = "0.75";
   wineT.dessOne =  "Италия";
   wineT.desstwo = "11%";
   wineT.dessThree =  "Вино игристое";
   wineT.dessFour = "каберне совиньйон";
   wineT.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "Розовое экстра-сухое",
      },
      {
         name: "Сахар:",
         meaning: "экстра-сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "11%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wineT.image =["/storage/product/wine3.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wineT.manufacturer = "Astoria";
   wineT.save();

   let wine4 = new product();
   wine4.name = "Astoria Prosecco Spumante";
   wine4.vendor = "Astoria";
   wine4.slug = wine4.name + wine4.vendor; 
   wine4.price = "300";
   wine4.price_action = "189";
   wine4.category = "wine";
   wine4.subCategory = "sparkling";
   wine4.dess = "0.75";
   wine4.dessOne =  "Италия";
   wine4.desstwo = "11%";
   wine4.dessThree =  "Вино игристое";
   wine4.dessFour = "каберне совиньйон";
   wine4.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "Розовое экстра-сухое",
      },
      {
         name: "Сахар:",
         meaning: "экстра-сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "11%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wine4.image =["/storage/product/wine4.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wine4.manufacturer = "Astoria";
   wine4.save();

   let wine5 = new product();
   wine5.name = "Heretat el Padruell Сava";
   wine5.vendor = "Heretat";
   wine5.slug = wine5.name + wine5.vendor; 
   wine5.price = "300";
   wine5.price_action = "189";
   wine5.category = "wine";
   wine5.subCategory = "sparkling";
   wine5.dess = "0.75";
   wine5.dessOne =  "Италия";
   wine5.desstwo = "11%";
   wine5.dessThree =  "Вино игристое";
   wine5.dessFour = "каберне совиньйон";
   wine5.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "Белое брют",
      },
      {
         name: "Сахар:",
         meaning: "Белое брют",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "11.5%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wine5.image =["/storage/product/wine5.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wine5.manufacturer = "Heretat";
   wine5.save();

   let wine6 = new product();
   wine6.name = "Marlborough Sun Sauvignon Blanc";
   wine6.vendor = "Marlborough";
   wine6.slug = wine6.name + wine6.vendor; 
   wine6.price = "350";
   wine6.price_action = "339";
   wine6.category = "wine";
   wine6.subCategory = "white";
   wine6.dess = "0.75";
   wine6.dessOne =  "Италия";
   wine6.desstwo = "13%";
   wine6.dessThree =  "Вино";
   wine6.dessFour = "каберне совиньйон";
   wine6.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "Белое сухое",
      },
      {
         name: "Сахар:",
         meaning: "Белое сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "13%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wine6.image =["/storage/product/wine6.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wine6.manufacturer = "Marlborough";
   wine6.save();

   let wine7 = new product();
   wine7.name = "Martini Rose";
   wine7.vendor = "Martini";
   wine7.slug = wine7.name + wine7.vendor; 
   wine7.price = "380";
   wine7.price_action = "269";
   wine7.category = "wine";
   wine7.subCategory = "sparkling";
   wine7.dess = "0.75";
   wine7.dessOne =  "Италия";
   wine7.desstwo = "9.5%";
   wine7.dessThree =  "Вино";
   wine7.dessFour = "каберне совиньйон";
   wine7.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "розовое полусухое",
      },
      {
         name: "Сахар:",
         meaning: "розовое полусухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "9.5%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wine7.image =["/storage/product/wine7.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wine7.manufacturer = "Martini";
   wine7.save();

   let wine8 = new product();
   wine8.name = "Capellana";
   wine8.vendor = "Capellana";
   wine8.slug = wine8.name + wine8.vendor; 
   wine8.price = "300";
   wine8.price_action = "229";
   wine8.category = "wine";
   wine8.subCategory = "red";
   wine8.dess = "0.75";
   wine8.dessOne =  "Италия";
   wine8.desstwo = "13.5%";
   wine8.dessThree =  "Вино";
   wine8.dessFour = "каберне совиньйон";
   wine8.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "красное сухое",
      },
      {
         name: "Сахар:",
         meaning: "красное сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "13.5%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wine8.image =["/storage/product/wine8.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wine8.manufacturer = "Capellana";
   wine8.save();

   let wine9 = new product();
   wine9.name = "Serenissima Prosecco Spumante Extra";
   wine9.vendor = "Serenissima";
   wine9.slug = wine9.name + wine9.vendor; 
   wine9.price = "150";
   wine9.price_action = "79";
   wine9.category = "wine";
   wine9.subCategory = "sparkling";
   wine9.dess = "0.75";
   wine9.dessOne =  "Италия";
   wine9.desstwo = "11%";
   wine9.dessThree =  "Вино";
   wine9.dessFour = "каберне совиньйон";
   wine9.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "белое экстра-сухое",
      },
      {
         name: "Сахар:",
         meaning: "белое экстра-сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "11%",
      },
      {
         name: "Объем:",
         meaning: ["0.2", "0.75"],
      },
   ];
   wine9.image =["/storage/product/wine9.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wine9.manufacturer = "Serenissima";
   wine9.save();

   let wine10 = new product();
   wine10.name = "Casa da Malta";
   wine10.vendor = "Casa";
   wine10.slug = wine10.name + wine10.vendor; 
   wine10.price = "200";
   wine10.price_action = "109";
   wine10.category = "wine";
   wine10.subCategory = "red";
   wine10.dess = "0.75";
   wine10.dessOne =  "Италия";
   wine10.desstwo = "13.5%";
   wine10.dessThree =  "Вино";
   wine10.dessFour = "каберне совиньйон";
   wine10.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "красное сухое",
      },
      {
         name: "Сахар:",
         meaning: "красное сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "13.5%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wine10.image =["/storage/product/wine10.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wine10.manufacturer = "Casa";
   wine10.save();

   let wine11 = new product();
   wine11.name = "Montecampo Prosecco";
   wine11.vendor = "Montecampo";
   wine11.slug = wine11.name + wine11.vendor; 
   wine11.price = "300";
   wine11.price_action = "220";
   wine11.category = "wine";
   wine11.subCategory = "white";
   wine11.dess = "0.75";
   wine11.dessOne =  "Италия";
   wine11.desstwo = "11%";
   wine11.dessThree =  "Вино";
   wine11.dessFour = "каберне совиньйон";
   wine11.characteristics = [
       {
          name: "Страна, регион:",
          meaning: "Италия",
       },
       {
         name: "Вино:",
         meaning: "белое сухое",
      },
      {
         name: "Сахар:",
         meaning: "белое сухое",
      },
      {
         name: "Виноград:",
         meaning: "каберне совиньйон",
      },
      {
         name: "Крепость:",
         meaning: "11%",
      },
      {
         name: "Объем:",
         meaning: ["0.75", "1.5"],
      },
   ];
   wine11.image =["/storage/product/wine11.png", "/storage/product/pole1.png", "/storage/product/pole2.png", "/storage/product/pole3.png"];
   wine11.manufacturer = "Montecampo";
   wine11.save();
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