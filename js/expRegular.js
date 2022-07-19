/*function validar(){
   
 var name =/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
   respuesta=patronName.test(name);
   correcto(patronName);
   alert ("Mal escrito tu nombre "+respuesta);
        //validar nombre//
    const pass=document.formul.pass.value;
    pass=pass.toString();
    patronPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;;
    res=patronPass.test(pass);
    correcto(patronPass);
    alert("Mal escrito tu contraseña"+pass)

}*/

function validar(){
    var n=document.getElementById("usuario").value;
    var expreg= /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/gm;

    if(expreg.test(n))
    alert("inicio correctamente");
    else
    alert("escribe correcto tu nombre");

    //validar pass//

    var p=document.getElementById("contraseña").value;
    var expreg= new expreg("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm");
    if(expreg.test(p))
    alert("contraseña bien escrita");
    else
    alert("Contraseña incorrecta");
}
