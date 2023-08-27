

function display(age){
    if(age)console.log("Age of the person is : ",age);
    else console.log("Given Age is wrong .")
}




function display(age=0){
    console.log("Age of the person is : ",age);
    }




function rect(){
    var l=parseInt(prompt("Enter length of rectangle : "));
    var b=parseInt(prompt("Enter breadth of rectangle : "));
    var area=l*b;
    var peri=2*(l+b);
    if(l<0||b<0)console.log("Area/Parimeter of rectangle canot be found .");
    else {console.log("Area of rectangle is : ",area);
         console.log("Perimeter of rectangle is : ",peri);}
}




function cal(){

var add=function(x,y){return x+y;}
var sub=function(x,y){return x-y;}
return [add,sub];



const disp=(name,age)=>{console.log("Name of the person is : ",name);
                          console.log("Age of the person is : ", age);}
}