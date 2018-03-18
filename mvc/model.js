 //step 3 model create
 app.factory("myfactroy", logic);

 function logic() {
     console.log("factory run");
     var object = {
         computeAmount(price, quantity) {
             console.log("compute Amount is called");
             return price * quantity;
         }
     };
     return object;
 }
