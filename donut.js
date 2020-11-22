$(document).ready(function(){
const generate = document.getElementById('dnt-btn');


const flavors = ["chocolate", "vanilla", "Caramel", "butterscotch", "maple", "white chocolate","lemon", "lime" ];
const fruit = ["apple", "banana", "strawberry", "blueberry", "raspberry ", "mango", "peach", "orange", "grape fruit", "blackberry", "coffee"];
const  topping = [ "cookie crumb", "chocolate chips","praline", "graham cracker", "coconut"];


function DonutGenerator(){
    

    for (i = 0 ; i <flavors.length; i++ ){
        console.log(i);
    };

var myflavor = Math.random()*flavors.length;
    console.log(myflavor);

    console.log(Math.floor(myflavor));

    console.log(flavors[Math.floor(myflavor)]);
    $('#result').text(flavors[Math.floor(myflavor)]);

  

    // for ( i = 0 ; 1 <fruit.length; i++ ){
    // console.log(i);
    
    return
    
};

function (){
    for (i = 0 ; i <flavors.length; i++ ){
        console.log(i);
    };
}
}
  
      

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