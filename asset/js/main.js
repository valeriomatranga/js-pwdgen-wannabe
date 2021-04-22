//chiedi il nome
var nome = prompt("Quale é il tuo nome?");

//chiedi il cognome
var cognome = prompt("Quale é il tuo cognome?").toUpperCase();

//chiedi il suo colore preferito
var colore = prompt("Quale é il tuo colore preferito?");

//combinazione password
var password = document.getElementById("password");
password.innerHTML = "La tua password é: " + nome + cognome + colore + 88