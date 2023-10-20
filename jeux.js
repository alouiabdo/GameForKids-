var animal = [
    {name:"Rabbit",Image:"PNG/ARNAB.png"},
    {name:"Wolf",Image:"PNG/DIBE.png"},
    {name:"Bear",Image:"PNG/DOUB.png"},
    {name:"Elephant",Image:"PNG/FIL.png"},
    {name:"Dog",Image:"PNG/KALB.png"},
    {name:"Monkey",Image:"PNG/KIRD.png"},
    {name:"Cat",Image:"PNG/KITA.png"},
    {name:"Tiger",Image:"PNG/NAMIR.png"},
    {name:"Lion",Image:"PNG/ASAD.png"},
    {name:"Squirrel",Image:"PNG/SINJAB.png"},
    {name:"Fox",Image:"PNG/TAALAB.png"},
];
const h2 = document.querySelector('h2')
const button = document.querySelector("button");
button.addEventListener('click', function next(){
    console.log(h2)
    if (h2.innerHTML == "Rabbit"){
     document.writeln("corect")
    } else{document.writeln("not_corect")}  
})

const animal = ["Rabbit","Wolf","Bear","Elephant","Dog","Monkey","Cat","Tiger","Lion","Squirrel","Fox"];
animal.sort()
