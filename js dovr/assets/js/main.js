var num, teklik, cem=0;
var num=prompt("Ədəd daxil edin:");
while(num>0)
{
     teklik=num%10;
     cem+=teklik;
     num=(num-teklik)/10;
}
console.log(cem);