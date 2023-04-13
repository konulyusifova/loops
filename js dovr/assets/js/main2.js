
var eded=prompt("Ədəd daxil edin:");
for(var i = 2; i < 10; i++){
    if(eded % i == 0){
        console.log("ədəd mürəkkəbdir")
        break;
    }
    else{
        console.log("sadə ədəddir")
        break;
    }
}