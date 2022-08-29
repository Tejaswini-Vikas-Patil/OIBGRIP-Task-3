const calculateTemp = ()=>{
    const numberTemp =document.getElementById('temp').value;
    const TempSelect =document.getElementById('temp_diff').value;
    const valueTemp =temp_diff.options[tempSelecte.selectedIndex].value;
    const CtoF= (cel)=>{
        let fahrenheit=Math.round((cel*9/5)+32);
        return fahrenheit;
    }

const FtoC=(fahr)=>{
    let fahrenheit=Math.round((fahrenheit-32)*5/9);
    return celsius;
}
let result;
if(valueTemp =='cel'){
    result=CtoF(numberTemp);
    document.getElementById('resultContainer').innerHTML=result+"fahrenheit";
}
else{
    result=FtoC(numberTemp);
    document.getElementById('li8resultContainer').innerHTML=result+"Celsius" 
}
   
  
const reset = () =>
{
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fahrenheit").value = " ";
}
}