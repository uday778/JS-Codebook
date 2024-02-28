const  randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
      color +=hex[Math.floor(Math.random()*16)]
    }
    return color;
  }
  console.log(randomcolor())
  let intervalId
  const startchangingColor=function(){
    if(!intervalId){
      intervalId=setInterval(changeBgcolor ,1000)
    }
    function changeBgcolor(){
      document.body.style.backgroundColor=randomcolor()
    }
  }
  const stopchangingColor=function(){
    clearInterval(intervalId)
    intervalId=null
  }
  
  document.querySelector('#start').addEventListener('click',startchangingColor)
  
  document.querySelector('#stop').addEventListener('click',stopchangingColor)