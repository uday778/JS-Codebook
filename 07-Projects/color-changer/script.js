const buttons= document.querySelectorAll('.button');
const body=document.querySelector('body')
buttons.forEach((coloredbtn)=>{
  // console.log(coloredbtn)
  coloredbtn.addEventListener("click",(event)=>{
    console.log(event.target)
    if(event.target.id==="grey"){
      body.style.backgroundColor=event.target.id;
    }
    else if(event.target.id==="white"){
      body.style.backgroundColor=event.target.id;
    }
    else if(event.target.id==="yellow"){
      body.style.backgroundColor=event.target.id;
    }
    else if(event.target.id==="blue"){
      body.style.backgroundColor=event.target.id;
    }
    else if(event.target.id==="purple"){
      body.style.backgroundColor=event.target.id;
    }
    else if(event.target.id==="green"){
      body.style.backgroundColor=event.target.id;
    }
  })
})