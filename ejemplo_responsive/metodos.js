//aqui creamos funciones
function general_triangulos() {
    const input1=document.getElementById("lado1")//busca el id para hacer referencia a ese id
    const value1=Number( input1.value)
    const input2=document.getElementById("lado2")//busca el id para hacer referencia a ese id
    const value2=Number( input2.value)
    const input3=document.getElementById("base")//busca el id para hacer referencia a ese id
    const value3=Number( input3.value)
    const input4=document.getElementById("altura")//busca el id para hacer referencia a ese id
    const value4=Number( input4.value);
    
    if ( document.getElementById('radio1').checked) {
        const area=areatriangulo(value3,value4)
        const result=document.getElementById("idtriangulo")
        result.innerText=("El area del triangulo es: "+area)
        // alert('ooskss')
    }else{
        const peri=peritriangulo(value1,value2,value3)
            const result2=document.getElementById("idtriangulo")
            result2.innerText=("El perimetro del triangulo es: "+peri)
    } 
}

function perimetro_cuadra(){
    const input=document.getElementById("cuadrado")//busca el id para hacer referencia a ese id
    const value=input.value
    const perimetro=perimetrocuadrado(value)//envia el parametro a la funcion
    //alert(perimetro)
    const resultado=document.getElementById("idarea2")
    resultado.innerText=("El perimetro del cuadrado es: "+perimetro)//resultado.innertext para escribir en una etiqueta p
}
function area_cuadra(){
    
    const input=document.getElementById("cuadrado")//busca el id para hacer referencia a ese id
    const value=input.value//obtiene el valor ingresado
    const area=areacuadrado(value)
    //  alert(input)
    const resultado=document.getElementById("idarea2")
    resultado.innerText=("El area del cuadrado es: "+area)//resultado.innertext para escribir en una etiqueta p
}

function area_circulo() {
    const input=document.getElementById("circulo")//busca el id para hacer referencia a ese id
    const value=input.value
    const area=areacirculo(value)
    
    const result=document.getElementById("idcirculo")
    result.innerText=("El area del circulo es: "+area)
}
function peri_circulo() {
    const input=document.getElementById("circulo")//busca el id para hacer referencia a ese id
    const value=input.value
    const peri=pericirculo(value)
    
    const result=document.getElementById("idcirculo")
    result.innerText=("El perimetro del circulo es: "+peri)
}

function general_rombo() {
    const input1=document.getElementById("rombo1")//busca el id para hacer referencia a ese id
    const value1=Number( input1.value)
    const input2=document.getElementById("rombo2")//busca el id para hacer referencia a ese id
    const value2=Number( input2.value)
    const input3=document.getElementById("rombo3")//busca el id para hacer referencia a ese id
    const value3=Number( input3.value)
    
    if ( document.getElementById('radio3').checked) {
        const area=arearombo(value2,value3)
        const result=document.getElementById("idresrombo")
        result.innerText=("El area del rombo es: "+area)
        // alert('ooskss')
    }else{
        const peri=perirombo(value1)
            const result2=document.getElementById("idresrombo")
            result2.innerText=("El perimetro del rombo es: "+peri)
    } 
}

function general_trapecio() {
    const input1=document.getElementById("trap1")//busca el id para hacer referencia a ese id
    const value1=Number( input1.value)
    const input2=document.getElementById("trap2")//busca el id para hacer referencia a ese id
    const value2=Number( input2.value)
    const input3=document.getElementById("trap3")//busca el id para hacer referencia a ese id
    const value3=Number( input3.value)
    const input4=document.getElementById("trap4")//busca el id para hacer referencia a ese id
    const value4=Number( input4.value)
    const input5=document.getElementById("trap5")//busca el id para hacer referencia a ese id
    const value5=Number( input5.value)
    
    if ( document.getElementById('radio5').checked) {
        const area=areatrapecio(value3,value4,value5)
        const result=document.getElementById("idtrapecio")
        result.innerText=("El area del rombo es: "+area)
        //  alert(area)
    }else{
        const peri=peritrapecio(value1,value2,value3,value4)
            const result2=document.getElementById("idtrapecio")
            result2.innerText=("El perimetro del rombo es: "+peri)
    } 
}

function area_cubo() {
    const input=document.getElementById("cubo")//busca el id para hacer referencia a ese id
    const value=input.value
    const area=areacubo(value)
    
    const result=document.getElementById("idcubo")
    result.innerText=("El area del cubo es: "+area)
}
function vol_cubo() {
    const input=document.getElementById("cubo")//busca el id para hacer referencia a ese id
    const value=input.value
    const area=volumencubo(value)
    
    const result=document.getElementById("idcubo")
    result.innerText=("El volumen del cubo es: "+area)
}

//---------------------------------------------------------------------------------------------------------
//funciones que retornan valores para usarlos en las otras funciones
function perimetrocuadrado(lado) {
    return lado*4
}
function areacuadrado(lado) {
    return lado*lado
}
function peritriangulo(lado1,lado2,base) {
    return lado1+lado2+base 
}
function areatriangulo(base,altura) {
    return base*altura/2
}
function areacirculo(radio) {
    const pi=3.14
    return pi*Math.pow(radio,2) 
}
function pericirculo(radio) {
    const pi=3.14
    return 2*pi*radio
}
function arearombo(D,d) {
    return D*d/2
}
function perirombo(lado) {
    return 4*lado
}
function areatrapecio(B,b,altura) {
    return ((B+b)*altura)/2
}
function peritrapecio(lado1,lado2,lado3,lado4) {
    return lado1+lado2+lado3+lado4
}
function areacubo(lado) {
    return 6*Math.pow(lado,2)
}
function volumencubo(lado) {
    return Math.pow(lado,3)
}

function mostrarseleccionado_triangulo() {
    if (document.getElementById('radio1').checked) {
        document.getElementById("lado1").disabled = true;
        document.getElementById("lado2").disabled = true;
        if (document.getElementById("altura").disabled==true && 
        document.getElementById("btncalculaarea").disabled==true) 
        {
            document.getElementById("altura").disabled = false
            document.getElementById("btncalculaarea").disabled=false
        }
        document.getElementById("btncalculaperi").disabled = true;

    }
    if(document.getElementById('radio2').checked){
        document.getElementById("lado1").disabled = false;
        document.getElementById("lado2").disabled = false;
        document.getElementById("base").disabled = false;
        document.getElementById("altura").disabled = true; 
        document.getElementById("btncalculaperi").disabled = false;
        document.getElementById("btncalculaarea").disabled = true;
    }
}

function mostrar_seleccionado_rombo() {
    if (document.getElementById('radio3').checked) {//los que se activan si o si a la primera
        document.getElementById("rombo1").disabled = true;
        if (document.getElementById("rombo2").disabled==true && 
        document.getElementById("rombo3").disabled==true) {
            document.getElementById("rombo2").disabled=false
            document.getElementById("rombo3").disabled=false
        }
    }

    if (document.getElementById('radio4').checked) {//los que se activan si o si a la primera
        document.getElementById("rombo2").disabled = true;
        document.getElementById("rombo3").disabled = true;
        document.getElementById("rombo1").disabled = false;
    }
}

function mostrar_activa_trapecio(params) {
    if (document.getElementById('radio5').checked) {
        document.getElementById("trap1").disabled = true;//lado1
        document.getElementById("trap2").disabled = true;//lado2
        if (document.getElementById("trap5").disabled = true) {
            document.getElementById("trap5").disabled = false;
        }
    }
    
    if (document.getElementById('radio6').checked) {
        document.getElementById("trap5").disabled = true;//altura
        document.getElementById("trap1").disabled = false;//lado1
        document.getElementById("trap2").disabled = false;//lado2
    }
}

