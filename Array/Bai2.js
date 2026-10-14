function getValueA(){
    return document.getElementById('numbera').value;
}

function getValueB(){
    return document.getElementById('numberb').value;
}

function cong(a,b){
    return  parseFloat(a) + parseFloat(b);
}

function tru(a,b){
    return  parseFloat(a) - parseFloat(b);
}

function nhan(a,b){
    return  parseFloat(a) * parseFloat(b);
}

function chia(a,b){
    return  parseFloat(a) / parseFloat(b);
}

function result(resultAssign){
    document.getElementById('result').value= resultAssign;
}