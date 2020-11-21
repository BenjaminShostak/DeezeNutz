$(document).ready(function(){
const generate = document.getElementById('dnt-btn');


const flavors = ["chocolate", "vanilla", "Caramel", "butterscotch", "maple", "white chocolate" ];
const fruit = ["apple", "bananna", "strawberry", "blueberry", "raspberry ", "mango", "peach", "orange","lemon", "lime"];
const  topping = [ "cookie crumb", "chocolate chips","praline", "graham cracker", "coconut"];


function DonutGenerator(){

    for (i = 0 ; i <flavors.length; i++ ){
        console.log(i);
    };
}
//   fruit.forEach(generate => {
//       console.log(fruit);
      

//       topping.forEach(generate => {
//       console.log(topping);
//      dAnswer = alert("How about " + flavors + fruit + topping);
     
//   });

      // Event setup using a convenience method
//$( `.dnt-btn` ).click(function DonutGenerator() {
  //  console.log(dAnswer);
    //return $(`result-container`).append(dAnswer);
//}


$('#dnt-btn-btn').click(DonutGenerator);
});