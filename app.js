let start=document.getElementById('start')
let square=document.getElementById('square')
let output=document.getElementById('piOutput')
var boxSize=500
var outside=0
var inside=0 
start.onclick=function(){

    const PosArray=[]
    const DistArray=[]
    setInterval(() => {
        for (let i = 0; i < 1; i++) {
        const dart = document.createElement('div')
        dart.id='dart'
        square.appendChild(dart)
        var X=Math.floor(Math.random()*(boxSize))
        var Y=Math.floor(Math.random()*(boxSize))
        var Xcord=X-boxSize/2
        var Ycord=Y-boxSize/2
        dart.style.top=X+'px'
        dart.style.left=Y+'px'
        PosArray.push(Xcord,Ycord)
        
    }
    for (let j = 0; j < PosArray.length; j+=2) {
            var Distance=Math.round(Math.sqrt(PosArray[j]**2+PosArray[j+1]**2))
            DistArray.push(Distance)
        }
    for (let k = 0; k < DistArray.length; k++) {
        if(DistArray[k]>=250){
            outside+=1
        }
        if(DistArray[k]<250){
            inside+=1
        }
    }
    var pi=4*(inside/(inside+outside))
    output.innerHTML="Your Value of Pi is: "+pi

    }, 1);
    
}