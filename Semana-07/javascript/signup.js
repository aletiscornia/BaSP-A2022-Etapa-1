window.onload = function () {
    var inputs = document.getElementsByTagName("input");
    var name = document.getElementById("name");
    var surname = document.getElementById("apellido");
    var dni = document.getElementById("dni");
    var fecNac = document.getElementById("fecha-nacimiento");
    var tel = document.getElementById("tel");
    var dir = document.getElementById("direc");
    var local = document.getElementById("localidad");
    var cP = document.getElementById("cp");
    var mail = document.getElementById("mail");
    var pass = document.getElementById("pass");
    var pass2 = document.getElementById("pass2");
    var btn = document.getElementById("submit-btn");

    //Name validation
    function contienNumero (name) {
        var letra = [];
        var cont = false;
        for(var i = 0; i < name.value.length; i++){
            var position = name.value.charCodeAt(i);
            if((position >= 65 && position <= 90 ) || (position >= 97 && position <= 122)){
               letra[i] = true;
            }else{
                letra[i] = false;
            }
        }
        for (var i = 0; i < letra.length; i++) {
            if (letra[i]){
                cont = true;
            }else{
                cont = false;
                return cont
            }          
        }
        return cont;
    }

    function validaCantidad (name, n) {
        if(name.value.length > n){
            return true
        }return false
    }

    name.onblur = function () {
        name.classList.remove("error-red");
        name.classList.remove("ok-green");
        if(contienNumero(name)  && validaCantidad(name, 3)){
            name.classList.add("ok-green");
        }else{
            name.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Only letters min 3";
            name.parentNode.insertBefore(p,  name.nextSibling);
        }
    }

    name.onfocus = function () {
        name.classList.remove("error-red", "ok-green");
        name.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }

    //Surname validation
    surname.onblur = function () {
        surname.classList.remove("error-red");
        surname.classList.remove("ok-green");
        if(contienNumero(surname)  && validaCantidad(surname, 3)){
            surname.classList.add("ok-green");
        }else{
            surname.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Only letters min 3";
            surname.parentNode.insertBefore(p,  surname.nextSibling);
        }
    }

    surname.onfocus = function () {
        surname.classList.remove("error-red", "ok-green");
        surname.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }

    //DNI validation
    function contienLetra (dni) {
        var letra = [];
        var cont = false;
        for(var i = 0; i < dni.value.length; i++){
            var position = dni.value.charCodeAt(i);
            if(position >= 48 && position <= 57){
               letra[i] = true;
            }else{
                letra[i] = false;
            }
        }
        for (var i = 0; i < letra.length; i++) {
            if (letra[i]){
                cont = true;
            }else{
                cont = false;
                return cont
            }          
        }
        return cont;
    }

    dni.onblur = function () {
        dni.classList.remove("error-red");
        dni.classList.remove("ok-green");
        if(contienLetra(dni)  && validaCantidad(dni, 7)){
            dni.classList.add("ok-green");
        }else{
            dni.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Only numbers min 7";
            dni.parentNode.insertBefore(p,  dni.nextSibling);
        }
    }

    dni.onfocus = function () {
        dni.classList.remove("error-red", "ok-green");
        dni.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }
    
    //Fecha Nacimiento validation
    function validaFec (fecNac) {
        if(fecNac.value !== ""){
           return true;
        }
    }
 
    fecNac.onblur = function () {
        fecNac.classList.remove("error-red");
        fecNac.classList.remove("ok-green");
        if(validaFec(fecNac)){
            fecNac.classList.add("ok-green");
        }else{
            fecNac.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Input required";
            fecNac.parentNode.insertBefore(p,  fecNac.nextSibling);
        }
        
        fecNac.focus = function () {
            fecNac.classList.remove("error-red", "ok-green");
            fecNac.removeAttribute("placeholder");
            var children = document.getElementById("name").parentElement.children;
            if(children [children.length -1].classList.contains("error") ){
                children[children.length -1].remove();
            }
        }
    }
    
    //Tel validation
    tel.onblur = function () {
        tel.classList.remove("error-red");
        tel.classList.remove("ok-green");
        if(contienLetra(tel) && validaCantidad(tel, 8)){
            tel.classList.add("ok-green");
        }else{
            tel.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Only numbers min 10";
            tel.parentNode.insertBefore(p,  tel.nextSibling);
            
        }
    }
    
    tel.onfocus = function () {
        tel.classList.remove("error-red", "ok-green");
        tel.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }
    
    //Dir validation
    var dirNoSpace;
    function validaAlfaNum(dir){
        var number = false; 
        var letraaaa = false;
        dirNoSpace = dir.value.split(" ").join("").toLowerCase();
        for(var i = 0; i < dirNoSpace.length; i++){
            var position = dirNoSpace.charCodeAt(i);
            if(position >= 48 && position <= 57){
                number = true;
            }
            else if(position >= 97 && position <= 122){
                letraaaa = true;
            }else{
                return false;
            }
        }
        if(number && letraaaa){
            return true;
        }else{
            return false;
        }
    }
    
    function validaAddress (dir) {
        var space = dir.value.split("");
        for(var i = 0; i < space.length; i++){
            if(space[i] == " "){
                if(space[0] == " "){
                    return false
                }
                if(space[i+1] == " "){
                    return  false;
                }
                if(space[space.length - 1] == " "){
                    return false;
                }
            }
        }
        return true;
    }
    
    dir.onblur = function () {
        mail.classList.remove("error-red");
        mail.classList.remove("ok-green");
        if(validaAddress(dir) && validaAlfaNum(dir) && validaCantidad(dir, 4)){
            dir.classList.add("ok-green");
        }else{
            dir.classList.add('error-red');
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Only letters, numbers and 1 space";
            dir.parentNode.insertBefore(p,  dir.nextSibling);
        }
    }
    
    dir.onfocus = function () {
        dir.classList.remove("error-red", "ok-green");
        dir.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }
    
    //Localidad validation
    local.onblur = function () {
        local.classList.remove("error-red");
        local.classList.remove("ok-green");
        if(validaAlfaNum(local) && validaCantidad(local, 3)){
            local.classList.add("ok-green");
        }else{
            local.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "(Min 3 letters an 1 number)";
            local.parentNode.insertBefore(p,  local.nextSibling);
        }
    }
    
    local.onfocus = function () {
        local.classList.remove("error-red", "ok-green");
        local.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }
    
    //CP validation
    function validaCp (cP) {
        if(cP.value.length >= 4 && cP.value.length <= 5 && contienLetra(cP)){
            return true;
        }else{
            return false;
        }
    }
    
    cP.onblur = function () {
        mail.classList.remove("error-red");
        mail.classList.remove("ok-green");
        if(validaCp(cP)){
            cP.classList.add("ok-green");
        }else{
            cP.classList.add('error-red');
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Only number (min 4 ,max 5)";
            cP.parentNode.insertBefore(p,  cP.nextSibling);
        }
    }
    
    cP.onfocus = function () {
        cP.classList.remove("error-red", "ok-green");
        cP.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }
    
    //Email validation
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    function validaMail(mail) {
        if (!(emailExpression.test(mail.value)))  {	
            return false;
        }else{
            return true;
        }
    }
    
    mail.onblur = function () {
        mail.classList.remove("error-red");
        mail.classList.remove("ok-green");
        if (validaMail(mail))  {	
            mail.classList.add("ok-green");
        }else{
            mail.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Input required, invalid mail";
            mail.parentNode.insertBefore(p,  mail.nextSibling);
        }
        
    }
    
    mail.onfocus = function () {
        mail.classList.remove("error-red", "ok-green");
        mail.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }
    
    //Password validation
    function validaPass (pass) {
        var passCheck = false;
        var number = false;
        var upper = false;
        var lower = false;
        for(var i =0; i < pass.value.length; i++){
            var position = pass.value.charCodeAt(i);
            if(position >= 48 && position <= 57){
                number = true;
            }
            if(position >= 65 && position <= 90){
                upper = true;
            }
            if(position >= 97 && position <= 122){
                lower = true;
            }
        }
        if(number && upper && lower){
            pass.classList.add("ok-green");
            return true
        }else{
            pass.classList.add("error-red");
            console.log("Invalid password");
        }
    }
    
    pass.onblur = function() {
        pass.classList.remove("error-red");
        pass.classList.remove("ok-green");
        if (validaPass(pass) && validaCantidad(pass, 7)) {
            pass.classList.add("ok-green");
        }else{
            pass.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Only(1number, 1upperCase, 1Lowercase) and minimun 7 digit";
            pass.parentNode.insertBefore(p,  pass.nextSibling);
        }
    }
    
    pass.onfocus = function () {
        pass.classList.remove("error-red", "ok-green")
        pass.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }
    
    //Repeat password validation
    function samePass (pass2){
        if(pass2.value === pass.value && pass2.value !== '' && pass2.value !== ' '){
            return true
        }else{
            return false
        }
    }
    
    pass2.onblur = function () {
        pass2.classList.remove("error-red");
        pass2.classList.remove("ok-green");
        if(samePass(pass2)){
            pass2.classList.add("ok-green");
        }else{
            pass2.classList.add("error-red");
            var p = document.createElement("p");
            p.classList.add("error");
            p.innerHTML = "Password doesn't match";
            pass2.parentNode.insertBefore(p,  pass2.nextSibling);
        }
    }
    
    pass2.onfocus = function () {
        pass2.classList.remove("error-red", "ok-green")
        pass2.removeAttribute("placeholder");
        var children = document.getElementById("name").parentElement.children;
        if(children [children.length -1].classList.contains("error") ){
            children[children.length -1].remove();
        }
    }
    
    function saveLocal(){
        localStorage.setItem("name", name.value);
        localStorage.setItem("surname", surname.value);
        localStorage.setItem("dni", dni.value);
        localStorage.setItem("fecNac", fecNac.value);
        localStorage.setItem("tel", tel.value);
        localStorage.setItem("dir", dir.value);
        localStorage.setItem("local", local.value);
        localStorage.setItem("cP", cP.value);
        localStorage.setItem("mail", mail.value);
        localStorage.setItem("pass", pass.value);
        localStorage.setItem("pass2", pass2.value)
    }

    function getLocal(){
        name.value = localStorage.getItem("name");
        surname.value = localStorage.getItem("surname");
        dni.value = localStorage.getItem("dni");
        fecNac.value = localStorage.getItem("fecNac");
        tel.value = localStorage.getItem("tel");
        dir.value =  localStorage.getItem("dir");
        local.value = localStorage.getItem("local");
        cP.value = localStorage.getItem("cP");
        mail.value = localStorage.getItem("mail");
        pass.value =  localStorage.getItem("pass");
        pass2.value = localStorage.getItem("pass2");
    }
    
    getLocal();
    
    //Button validation
    btn.onclick = function (e) {
        e.preventDefault();
        for(var i = 0; i < inputs.length - 1; i++){
            if(!inputs[i].classList.contains("error-red")){
                var mensaje = ('nombre: '+name.value+", apellido: "+surname.value+", dni: "+dni.value+
                ", Fecha de Nacimiento: "+fecNac.value+", telefon: "+tel.value+", direccion: "+dir.value+
                ", localidad: "+local.value+", codigo postal: "+cP.value+", mail: "+mail.value+", contrase??a: "
                +pass.value+", contrase??a repedita: "+pass2.value);
            }else{
                alert("Campos incompletos o con errores");
            }
        }
        alert(mensaje);
        var fecha = (fecNac.value).split('-');
        var year = fecha.shift();
        fecha.push(year);
        fecha = fecha.join("/");
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name='+name.value+'&lastName='
        +surname.value+'&dni='+dni.value+'&dob='+fecha+'&phone='+tel.value+'&address='
        +dir.value+'&city='+local.value+'&zip='+cP.value+'&email='+mail.value+'&password='
        +pass.value;
        var respuesta = fetch(url);
        respuesta.then(function(res){
            return res.json();
        })
        .then(function(data){1
            if(data.success){
                alert("La solicitud se realizo con exito " + data.msg);
                saveLocal();
            }else{
                alert('Hubo un error: ' +data.errors[0]['msg']);
            }
        })
        .catch(function(error){
            alert('error: ', error);
        })
    }   
}
