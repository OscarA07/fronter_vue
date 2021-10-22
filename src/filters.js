const uppering = function(value){
    return value.toUpperCase();
}

const   removingLine = function(value){
    return value.replace(/-/g,' '); // /-/g todos los valores
}

export{
    uppering,
    removingLine
}