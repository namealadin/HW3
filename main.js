document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("add").addEventListener("click", function () {
        let newFoodItem = new FoodItem(
            document.getElementById("fname").value,
            document.getElementById("calories").value,
            document.getElementById("howmany").value,
        );
                
        if(newFoodItem.isValid()) {
            foodList.push(newFoodItem);
            clear();
            updateDisplay(foodList);
        }
        else {
            document.getElementById("Total").innerHTML = "Sorry, invalid input. Try again!"
        }
    });

    document.getElementById("clear").addEventListener("click", clear);
});

function clear() {
    document.getElementById("fname").value = "";
    document.getElementById("calories").value = "";
    document.getElementById("howmany").value = ""
    
    document.getElementById("fname").focus();
}

let foodList = [];
    
function updateDisplay(array){
    let myList = document.getElementById("lists");
    myList.innerHTML = '';
    let Total = 0;
    for (i = 0; i < array.length; i++) {
        Total = Total + (array[i].calories * array[i].howmany); 
        let node = document.createElement("li"); 
        node.innerHTML = array[i].fname + ", " + array[i].calories + ", " + array[i].howmany
        document.getElementById("lists").appendChild(node);
    } 
    document.getElementById("Total").innerHTML = "You have consumed " + Total + " calories";
}
