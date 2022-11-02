/*
// EXERCICE 1 //

var stringName="Yoann"; //Définition de la variable contenant le nom//
var intAge=30;
var bool=true;

alert(stringName + "\n" intAge + "\n" bool);                  //Affichage des variables définies//
 
// EXERCICE 2 //

prompt("Entrez votre nom")
var stringName = prompt("Entrez votre nom");
alert("votre nom est "+ stringName);

// EXERCICE 3 //


var stringName = prompt("Entrez votre nom");
var intAge = prompt("Entrez votre age");
alert("Ton nom est " + stringName + "et tu as " + intAge + "ans");

// EXERCICE 4 //

var intAge = prompt("Saisir votre age");
if (intAge>50)
{
    alert("Tu es vieux !");
}
else
{
    alert("Tu es jeune !");
}

// EXERCICE 5 //

var intNbre = prompt("Saisir un nombre");
if (intNbre>=0)
{
    alert("Positif !");
}
else
{
    alert("Négatif !");
}

// EXERCICE 6 //

var intNbre = prompt("Saisir un nombre");
if (intNbre>0)
{
    alert("Positif !");
}
else if (intNbre<0)
{
    alert("Négatif !");
}
else
{
    alert("Chiffre nul");
}

// EXERCICE 7 //

var intA = prompt("saisir un premier nombre");
var intB = prompt("saisir un second nombre");
var stringope = prompt("choisir un opérateur entre + - * ou /")

if (stringope == "+")
{
    alert(`Addition : ${intA} + ${intB} = ${Number(intA) + Number(intB)}`);
}
else if (stringope == "-")
{
    alert(`Addition : ${intA} - ${intB} = ${Number(intA) - Number(intB)}`);
}
else if (stringope == "*")
{
    alert(`Addition : ${intA} * ${intB} = ${Number(intA) * Number(intB)}`); 
}
else if
{
    alert(`Addition : ${intA} / ${intB} = ${Number(intA) / Number(intB)}`);
}
else
{
    alert('Opérateur non reconnu');
}


// EXERCICE 8 //

var intA = prompt("saisir un premier nombre");
var intB = prompt("saisir un second nombre");
var stringope = prompt("choisir un opérateur entre + - * ou /");

switch (stringope)
{
    case '+':
    alert(`Addition : ${intA} + ${intB} = ${Number(intA) + Number(intB)}`);
    break;

    case '-':
    alert(`Soustraction : ${intA} - ${intB} = ${Number(intA) - Number(intB)}`);
    break;

    case '*':
    alert(`Multiplication : ${intA} * ${intB} = ${Number(intA) * Number(intB)}`);
    break;

    case '/':
    alert(`Division : ${intA} / ${intB} = ${Number(intA) / Number(intB)}`);
    break;

    default:
    alert("Erreur, choisir un opérateur valide");
}


// EXERCICE 9 //

var intC=0;
do
{
    alert(intC);
    intC++;
}
while(intC<=3);


// EXERCICE 10 //

var intD=0;
while(intD<=9)
{
    alert(intD);
    intD++;
}


// EXERCICE 11 //

for (var intE=0;intE<=3;intE++)
{
    alert(intE);
}


// EXERCICE 12 , Do/While//

var intF = prompt("Saisir un chiffre");
var turn = 0;
do
{
    alert("boucle do/while " + turn);
    turn++;
}
while(turn <= intF);


// EXERCICE 12 , While//

var intG = prompt("Saisir un chiffre");
var turn = 0;

while(intG>=turn)
{
    alert("boucle while "+ turn);
    turn++;
}


// EXERCICE 12, For//

var intH=prompt("Saisir un chiffre");
for (turn=0; intH>=turn;turn++)
{
    alert("boucle for " + turn);
}


// EXERCICE 13//

function send()
{
    var intNumber = document.getElementById('text').value;
    alert("Ton nombre est " + intNumber);
}

// EXERCICE 14 //

function carre()
{ 
    var intCarre = document.getElementById('number').value;
    alert("le carré de ton nombre est " + Number(intCarre) * Number(intCarre));
}
*/

// EXERCICE 15 //

function send()
{
    var stringName = document.getElementById('name').value;
    var stringFirstName = document.getElementById('firstName').value;
    var intAge = document.getElementById('age').value;

    var response = `Ton nom est ${stringName} | Ton prénom est ${stringFirstName} | `;

    if (intAge > 50)
    {
        response += "Tu es vieux";
    }else{
        response += "Tu es Jeune";
    }
    alert(response);
}