

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


