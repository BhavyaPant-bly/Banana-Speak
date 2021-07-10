// var username= prompt("enter your name");
// var welcome="this script works"+ username;
// alert(welcome);
var btnTranslate=document.querySelector("#Translate");
var inpText=document.querySelector("#inputtext");
var Outputtext=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/minion.json";
function CreateURL(text){
    return url+"?text="+text;
}
//make a function for catching errors
function errormessage(error){
    alert("Server down!! Failed to translate :( !! Please try after some time!");
    console.log("error occured ",error);
}

function TranslatebyFetching(){
    fetch(CreateURL(inpText.value))
    .then(response => response.json())
    .then(json => 
        {Outputtext.innerText=json.contents.translated;}
        )
    .catch(errormessage);
}

btnTranslate.addEventListener("click", TranslatebyFetching,false);