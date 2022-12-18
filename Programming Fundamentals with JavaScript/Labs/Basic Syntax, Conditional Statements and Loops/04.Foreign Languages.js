function solve(country){
    lang = "";
if(country === "England" || country === "USA"){
    lang = "English";
    console.log(lang);
}

else if(country === "Spain" || country === "Argentina" || country === "Mexico"){
    lang = "Spanish";
    console.log(lang);
}

else{
    lang = "unknown"
    console.log(lang);
}

}