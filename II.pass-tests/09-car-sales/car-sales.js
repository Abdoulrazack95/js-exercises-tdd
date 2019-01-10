

function sales(carssales){
    var totals = {};
        carssales.forEach(carssales => {
            if(totals[carssales.make]){
                totals[carssales.make] += carssales.price;
            }else{
                totals[carssales.make] = carssales.price;
            }
        });
        return totals;
    }


module.exports = sales;