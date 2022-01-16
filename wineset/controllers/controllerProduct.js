// TODO: подключить модель для сущности
const model = require("../models/product");

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    const element = new model(request.body);
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
    model.find({},
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
    model.findById(id,
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
    
	 let wine = new model();
	  wine.name = "Tenuta Argentiera Bolgheri Superiore";
	  wine.vendor = "Tenuta";
	  wine.slug = wine.name + wine.vendor; 
	  wine.price = "2500";
	  wine.WineType = "Вино красное сухое";
	  wine.country = "Италия";
	  wine.sugar = "Сухое";
	  wine.manufacturer = "Tenuta argentiera";
	  wine.Value = ["0.75", "1.5"];
	  wine.fortress = "14,5%";
	  wine.grape= "каберне совиньйон +";
	  wine.image = "/storage/product/argentiera-prodotti-argentiera-2018 13.png";
	  wine.imageOne = "/storage/product/pole1.png";
	  wine.imageTwo = "/storage/product/pole2.png";
	  wine.imageThree = "/storage/product/pole3.png";
	  wine.save();
    response.send("Ok");
}


exports.autocomplete = function (request, response) {
    const searchString = request.query.searchString;
    console.log("searchString: " + searchString);
    if(searchString.length < 2) {
        response.json([]);
        return;
    }
    model.find({name: {$regex:searchString, "$options" : "-i" }},
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