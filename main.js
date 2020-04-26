document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("add").addEventListener("click", function () {
        let newFoodItem = new FoodItem(
            document.getElementById("fname").value,
            document.getElementById("calories").value,
            document.getElementById("howmany").value,
        );
                
        if(newFoodItem.isValid()) {
            foodList[foodList.length] = FoodItem;
            clear(); 
        }
    });
        
    document.getElementById("clear").addEventListener("click", clear);

    function clear() {
        document.getElementById("fname").value = "";
        document.getElementById("calories").value = "";
        document.getElementById("howmany").value = ""
    
        document.getElementById("fname").focus();
    }

    document.getElementById("add").addEventListener("click", function () {
            for (i = 0; i < foodList.length; i++) { 
                let node = document.createElement("li"); 
                node.innerHTML = foodList[i].fname + ", " + foodList[i].calories + ", " + foodList[i].howmany 
                document.getElementById("lists").appendChild(node);
            }
        })

    let foodList = [];
    
});
