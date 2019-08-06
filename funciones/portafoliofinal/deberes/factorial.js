function factorial(form){  
    var numcap;  
    numcap=miform.numero.value;  
    if (numcap != "" && !isNaN(numcap)){  
        if (numcap==0){  
            miform.resultado.value=0;  
        }  
        else{  
            var i;  
        var f=2;  
            for (i=1;i<=numcap;i++){  
                  f*=i;  
            }  
            miform.resultado.value=f;  
        }  
    }  
    else{  
        alert("Ingrese un número");  
        miform.numero.value="";  
        miform.resultado.value="";  
        miform.numero.focus();  
  
    }  
}