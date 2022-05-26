function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    alert("La sintaxis de la dirección de email es VALIDA");

    document.form1.text1.focus();

    return true;

  } else {

    alert("La sintaxis de la dirección de email es Invalida !!!!!");

    document.form1.text1.focus();

    return false;

  }

} 
