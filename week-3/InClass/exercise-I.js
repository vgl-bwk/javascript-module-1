const items= [  100,  "iSMael",  55,  45,  "sANyiA",  66,  "JaMEs",  "eLAmIn",  23,  "IsMael",  67,  19,  "ElaMIN",];

function isString (object){
    return typeof object === 'string'
}

function doTheMagic (array){
    return array.filter(isString).map(object => object.toUpperCase() + "!")
}

console.log(doTheMagic(items));