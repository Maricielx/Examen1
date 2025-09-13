function temperatura(){
    const f = parseInt(document.getElementById('temp').ariaValueMax);

    const res= (f -32)*(5/9)
    /*● Fórmula para convertir de F a C: (°F − 32) × 5/9 = °C
*/ 
    return alert("La temperatura calculada es"+ res +"°C" );
}