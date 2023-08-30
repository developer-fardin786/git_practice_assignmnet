let str="naman"

let emt_str="";

for(let i=str.length-1;i>=0;i--){
    emt_str+=str[i]
}

if(emt_str==str){
    console.log("not palindrome")
}else{
    console.log("palindrome")
}