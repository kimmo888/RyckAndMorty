function arreglosSimilares (arreglo1,arreglo2){
    if(arreglo1 instanceof Array && arreglo2 instanceof Array){
        if(arreglo1.length === arreglo2.length){
            for(let i = 0; i < arreglo1.length; i ++){
                if(arreglo1[i] !== arreglo2[i]){
                    return false;
                }
            }
            return true;
        } else {
            throw Error ('Ambos arreglos deben tener la misma longitud');
        }
    } else {
        throw TypeError('Los arreglos deben ser de tipo Array');
    }
}

try {
    console.log(arreglosSimilares([1,2,3],[1,2,3]));
} catch (e) {
    console.log('Error: ' + e.message);
}
try {
    console.log(arreglosSimilares('[1,2,3]',[1,2,3]));
} catch (e) {
    console.log('Error: ' + e.message);
}
try {
    console.log(arreglosSimilares([1,2,4],[1,2,3]));
} catch (e) {
    console.log('Error: ' + e.message);
}
try {
    console.log(arreglosSimilares([1,2,3],[1,2,3,4]));
} catch (e) {
    console.log('Error: ' + e.message);
}


