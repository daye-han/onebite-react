function orderFood(callback) {
    setTimeout(() => {
        const food = '떡볶이';
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFodd = `냉동된 ${food}`;
        callback(freezedFodd);
    }, 1500);
}

orderFood(function (food) {
    console.log(food);

    cooldownFood(food, function (cooldownedFood) {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, function (a) {
            console.log(a);            
        })
    })
})
