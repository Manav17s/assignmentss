
function armstrong(n){
    var str=n+"";
    var sum=0;
    for(var i=0;i<str.length;i++){
        var x=parseInt(str[i]);
        sum=sum+x**3;
    }
    console.log(sum);
    if(sum==n)return true;
    else return false;
}


function prime(n){
    if(n<2)return false;
    else{
        for(var i=2;i<n;i++){
            if(n%i==0)return false;
        }
        return true;
    }

}


function add(){
    var ans=0;
    for(var i=0;i<arguments.length;i++){
        var a=parseInt(arguments[i]);
    if(isNaN(a))a=0;
    else if(!isFinite(a))a=0;
    else ans=ans+a;}
console.log(ans);
}