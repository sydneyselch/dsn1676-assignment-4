var blueberries = {
    fullName: "Vaccinium corymbosum",
    growsOnShrub: true,
    energy: 240,
    carbohydrates: 14.49,
    protein: 0.74,
}

var grapes = {
    fullName: "Vitis vinifera",
    growsOnShrub: false,
    energy: 288,
    carbohydrates: 18.1,
    protein: 0.72,
}

var redCurrant = {
    fullName: "Ribes rubrum",
    growsOnShrub: true,
    energy: 234,
    carbohydrates: 13.8,
    protein: 1.4,
}


var writeBerryInfo = function (berry) {
    document.write("<h1>" + berry.fullName + "</h1>");
    
    document.write("<dl>");
    
    document.write("<dt>GrowsonShrub</dt>");
    document.write("<dd>" + berry.growsOnShrub + "</dd>");
    
    document.write("<dt>Energy</dt>");
    document.write("<dd>" + berry.energy + "</dd>");
    
    document.write("<dt>Carbohydrates</dt>");
    document.write("<dd>" + berry.carbohydrates + "</dd>");
    
    document.write("<dt>Protein</dt>");
    document.write("<dd>" + berry.protein + "</dd>");
    
    
    document.write("</dl>");
};

var allTheBerrys = [blueberries, redCurrant, grapes];

allTheBerrys.forEach(writeBerryInfo)

