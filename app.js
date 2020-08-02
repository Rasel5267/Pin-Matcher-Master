//Number Pad Setup
function insert(num){
    document.getElementById("pinInputBox").value = document.getElementById("pinInputBox").value + num;
}
function clean(){
    document.getElementById("pinInputBox").value = "";
}
function back(){
    const backSpace = document.getElementById("pinInputBox").value;
    document.getElementById("pinInputBox").value = backSpace.substring(0,backSpace.length-1);
}
//Match Random Number
let RandomBtn = document.getElementById("pinGenerateBtn");
RandomBtn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * (9999 - 1000) ) + 1000;
    let Random = document.getElementById('pinGenerateBox').value = randomNumber;
})

document.getElementById("submitBtn").addEventListener('click', function(){
    let RandomValue = document.getElementById("pinInputBox").value;
    let RandomValue2 = document.getElementById("pinGenerateBox").value;
    document.getElementById("pinGenerateBox").value = "";
    document.getElementById("pinInputBox").value = "";
    if(RandomValue == RandomValue2){
        document.getElementById('match').style.display = "block";
    }
    else{
        document.getElementById('notMatch').style.display = "block";
    }
    RandomBtn.addEventListener('click', function(){
        document.getElementById('match').style.display = "none";
        document.getElementById('notMatch').style.display = "none";
    })
})