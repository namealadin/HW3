let newFoodItem = new FoodItem(
    document.getElementById("fname").value,
    document.getElementById("calories").value,
    document.getElementById("howmany").value,
);

let FoodItem = function (fnameP, caloriesP, howmanyP) {
    this.fname = fnameP;
    this.calories = caloriesP;
    this.howmany = howmanyP;
};



Ate.prototype.isValid = function () {
    if (this.fname == "" || this.calories == "" || this.howmany== ""  || isNaN(this.calories) || isNaN(this.howmany) ) {
        return false;
    } else {
        return true;
    }
};
