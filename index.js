
////////////////////////////////////////////////////////////////////
var dr = document.querySelector(".drop") 

function abd(ed){
   ed.preventDefault();
}
function drag(ed){
   ed.dataTransfer.setData("text" , ed.target.innerHTML)
}
function drop(ed){
   ed.preventDefault();
   var data = ed.dataTransfer.getData("text") 
   if (ed.target.innerHTML == "FALSE"  ed.target.innerHTML =="CORRECT"   ed.target.innerHTML =="KAYN KAYN" || ed.target.innerHTML =="EMPTY"){
      ed.target.innerHTML = ""
   }
   // ed.target.appendChild(document.getElementById(data))
   ed.target.innerHTML+= data 

}
const arr = ["BAT","GOAT","DRAGON"]
let i = 0
const ob = {
   BAT : "🐐", GOAT  : "🐲" , DRAGON : "10/10"
}
function next(){
   if (dr.innerHTML == "CORRECT"){

      document.getElementById("em").innerHTML= ob[arr[i]]
      i++
      if (i>= arr.length){
         i=0

      }
       dr.innerHTML= ""
}
}
function corr(){
   if (dr.innerHTML in ob ){
      dr.innerHTML = "CORRECT"

   }else{
      dr.innerHTML ="FALSE"
     }}
