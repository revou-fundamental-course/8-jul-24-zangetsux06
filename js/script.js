//ini javascript

function updateResult() {
let weightvalue = document.getElementById("input-berat-badan").value;
console.log(weightvalue);
//jika weightvalue tidak sama dengan null dan wajib weightvalue tidak sama dengan ''
weightvalue !=null && weightvalue !='' 
? document.getElementById("bmi-result").innerHTML = weightvalue 
: alert('inputan anda kosong!');

}