let Ate = function (fnameP, caloriesP, howmanyP) {
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
