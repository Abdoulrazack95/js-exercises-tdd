

function paintShop(car, color){
    var painted = car.map(x => Object.assign({}, x));

    painted[1].colour = color;

    return painted;

}

module.exports = paintShop;