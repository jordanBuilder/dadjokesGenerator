const btn1El  = document.getElementById("btn2");

const jokeEl = document.getElementById("joke");

const apiKey = "f4fufEgOVEHisrAg28uq3sOY395iw7JBpLTbaRbS";
/*  on definit une constante Options dans laquelle on met la methode ,on specifie Get  car on veut reçevoir des données et informations

puis on doit mettre la clé de l'API dans l'en-tête donc on met : headers:{"X-Api-Key : (la clé de l'Api sans laquelle on aurait pas les dad jokes): apiKey}*/
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
 
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

/*On veut obtenir des données et les mettre dans reponse et donc doit ajouter l'adresse url du Simple request live demo là avec la methode 'fetch' donc on doit ajouter deux chose au fetch pour la recuperation*/ 
async function getJoke()
{   
    try 
    {
        jokeEl.innerText = "Updating...";
        btn1El.disabled = true;
        btn1El.innerText = "Loading...";
        const response = await fetch(apiURL,options);
        const data = await response.json();

        btn1El.disabled = false;
        btn1El.innerText = "Tell me a joke";
        console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;
     

    } 
    
    
    catch (error) 
    {   

        jokeEl.innerText = "An error happended, try again later";
        btn1El.disabled = false;
        btn1El.innerText = "Tell me a joke";
        console.log(error);
        
    }
    
    
    


    /*On doit convertir 'reponse' en fichier json pour pouvoir les voir dans le journal de la console oû on pourra les utiliser
    JSON est une methode en JS pour convertir les données en JSON*/
    


}
/*on ajoute cet evenement au bouton 1
l'evenement est : "click", et le nom de la fonction qui sera appelé à l'ecoute de l'evenement (click) est  : getJoke */ 

btn1El.addEventListener("click",getJoke)