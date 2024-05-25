// write your JavaScript here
function get_email() {
  mailAdresse = document.getElementById("email").value;
  if (
    mailAdresse.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    document.getElementById("email_verif").innerHTML =
      mailAdresse + " est correct";
  }
  // sign_bool = document.getElementsByClassName();
  console.log(mailAdresse);
}
