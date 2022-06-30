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
    
    // const boton_area = document.querySelector("#btncalculaarea");
    // boton_area.addEventListener("click", function(evento){
	// // Aquí todo el código que se ejecuta cuando se da click al botón
	//     const area=areatriangulo(value3,value4)
    //     const result=document.getElementById("idtriangulo")
    //     result.innerText=("El area del triangulo es: "+area)
    // });
 
    // const boton_peri = document.querySelector("#btncalculaperi");
    // boton_peri.addEventListener("click", function(evento){
	// // Aquí todo el código que se ejecuta cuando se da click al botón
    //     const peri=peritriangulo(value1,value2,value3)
    //     const result=document.getElementById("idtriangulo")
    //     result.innerText=("El perimetro del triangulo es: "+peri)
    // });
//----------------------------------------------------------------------------
    // document.getElementById('radio1').checked
    // alert('hola jajaj')
    // if ( document.getElementById('btncalculaarea').onclick) {
    if ( document.getElementById('radio1').checked) {
        const area=areatriangulo(value3,value4)
        const result=document.getElementById("idtriangulo")
        result.innerText=("El area del triangulo es: "+area)
        alert('ooskss')
    }else{
        const peri=peritriangulo(value1,value2,value3)
            const result2=document.getElementById("idtriangulo")
            result2.innerText=("El perimetro del triangulo es: "+peri)
    }
    // }
        // if ( document.getElementById('btncalculaperi').onclick) {
        //     const peri=peritriangulo(value1,value2,value3)
        //     const result=document.getElementById("idtriangulo")
        //     result.innerText=("El perimetro del triangulo es: "+peri)
        // }
    
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
function perimetro_triangulo() {
    const input1=document.getElementById("lado1")//busca el id para hacer referencia a ese id
    const value1=Number( input1.value)
    const input2=document.getElementById("lado2")//busca el id para hacer referencia a ese id
    const value2=Number( input2.value)
    const input3=document.getElementById("base")//busca el id para hacer referencia a ese id
    const value3=Number( input3.value)
    const peri=peritriangulo(value1,value2,value3)
    // alert(peri)
    const result=document.getElementById("idtriangulo")
    result.innerText=("El perimetro del triangulo es: "+peri)
}
function area_triangulo() {
    const input1=document.getElementById("altura")//busca el id para hacer referencia a ese id
    const value1=Number( input1.value)
    const input3=document.getElementById("base")//busca el id para hacer referencia a ese id
    const value3=Number( input3.value)
    const area=areatriangulo(value3,value1)

    const result=document.getElementById("idtriangulo")
    result.innerText=("El area del triangulo es: "+area)
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
function area_rombo() {
    const input1=document.getElementById("rombo2")//busca el id para hacer referencia a ese id
    const value1=Number( input1.value)
    const input2=document.getElementById("rombo3")//busca el id para hacer referencia a ese id
    const value2=Number( input2.value)
   
    const peri=arearombo(value1,value2)
    // alert(peri)
    const result=document.getElementById("idresrombo")
    result.innerText=("El perimetro del triangulo es: "+peri)
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
    // alert(typeof(lado1),lado2,base)
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