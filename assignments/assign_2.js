

var today = new Date();
console.log("Today is :",days[today.getDay()-1]);
var hours=today.getHours();
var mer='AM';
if(hours>12){hours=hours-12;mer='PM';}
console.log(`Time is : ${hours}${mer}:${today.getMinutes()}:${today.getSeconds()}`);




var today = new Date();
var date1 = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
var date2=`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;
console.log(date1);
console.log(date2);



function f1(){
    var sum=0
    for(var i=0;i<arguments.length;i++)sum=sum+arguments[i];
    return sum;
    }

function add(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
    var a=arguments[i];
    if(a instanceof Array){
        for(var j=0;j<a.length;j++)sum=sum+add(a[j]);
    }
    else if(a instanceof Function){
        sum=sum+a;
    }
    else if( isNaN(parseInt(a)) || !isFinite(parseInt(a)) )a=0;
    else sum=sum+parseInt(a);
        
    }
    return sum;
}




function f1(...args){
    var sum=0
    for(var i=0;i<args.length;i++)sum=sum+args[i];
    return sum;
    }

function add(...args){
    var sum=0;
    for(var i=0;i<args.length;i++){
    var a=args[i];
    if(a instanceof Array){
        for(var j=0;j<a.length;j++)sum=sum+add(a[j]);
    }
    else if(a instanceof Function){
        sum=sum+a;
    }
    else if( isNaN(parseInt(a)) || !isFinite(parseInt(a)) )a=0;
    else sum=sum+parseInt(a);
        
    }
    return sum;
}