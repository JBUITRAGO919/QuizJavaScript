 function tipoMotor(motor){
        
       
        switch (motor) {
            

            case 0:
                alert("No hay establecido un valor para el tipo de motor")
                break;
            case 1:
                alert("La bomba es una bomba de agua")
                break;
            case 2:
                alert("La bomba es una bomba de gasolina")
                break;
            case 3:
                alert("La bomba es una bomba de hormigon")
                break;
    
            case 4:
                alert("La bomba es una bomba de pasta alimenticia")
                break;
                
            default:
                alert("No existe un tipo de valos valido para el tipo de bomba")
                break;
        
            }
    };
    
tipoMotor(parseInt(prompt("digite el valor")));


function obtenervalorConImpuesto(tipoProducto, valorSinImpuesto){
    var valorSinImpuesto;
    var tipoProducto;
    
    switch (tipoProducto) {
        case 1:
            valor =valorSinImpuesto*21/100 ;
            valorTotal = valor +valorSinImpuesto;
        alert("El valor del producto de tipo 1 mas el 21% es :"+ valorTotal)    
            break;
        case 2:
            valor =valorSinImpuesto*10/100;
            valorTotal = valor +valorSinImpuesto;
        alert("El valor del producto de tipo 2 mas el 10% es :"+ valorTotal)

        case 3:
            valor = valorSinImpuesto*5/100;
            valorTotal = valor +valorSinImpuesto;
        alert("El valor del producto de tipo 3 mas el 5 % es :"+ valorTotal)
    
        default:
    
            break;
    }
    };
    
    obtenervalorConImpuesto(2, 100000)

    