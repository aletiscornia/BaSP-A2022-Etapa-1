window.onload = function() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var mail = document.getElementById("email");
    var pass = document.getElementById("password");
    var btn = document.getElementById("submit-btn");
    var mailCheck = false;
    var passCheck = false;
    var number = false;
    var upper = false;
    var lower = false;

    //Email validation
    mail.onblur = function () {
        mail.classList.remove("error-red");
        mail.classList.remove("ok-green");
        if (!(emailExpression.test(mail.value)))  {	
            mail.classList.add("error-red");
            mailCheck = false;
        }else{
            mail.classList.add("ok-green");
            mailCheck = true;
        }
        if(mail == ''){
            mailCheck = false;
        }
    }
    
    mail.onfocus = function () {
        if(mail.classList.contains("error-red")){
            mail.value = "";
        }
        mail.classList.remove("error-red", "ok-green");
        mail.removeAttribute("placeholder");
        
    }

    //Password validation 
    pass.onblur = function() {
        mail.classList.remove("error-red");
        mail.classList.remove("ok-green");
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
        if(number, upper, lower && pass.value.length > 7){
            pass.classList.add("ok-green");
            passCheck = true;
        }else{
            pass.classList.add("error-red");
        }
    }

    pass.onfocus = function () {
        if(pass.classList.contains("error-red")){
            pass.value = "";
        }
        pass.classList.remove("error-red", "ok-green")
        pass.removeAttribute("placeholder")
    }
    
    
    btn.onclick = function (e) {
        e.preventDefault();
        if(pass.classList.contains("error-red") || mail.classList.contains("error-red")){
            if(!mailCheck){
                alert("Incorrect mail "+mail.value);
            }else{
                alert("Incorrect password "+pass.value);
            }
            
        }else{
            alert("Login successfull");
            alert("Mail: " +mail.value+" Pass: "+pass.value)
        }
    }
    

}
