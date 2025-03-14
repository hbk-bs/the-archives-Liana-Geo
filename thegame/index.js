const button = document.querySelector("button");
if(button){
  button.addEventListener("click", ()=>{
    document.write("you just lost the game");
    const myPElement =document.createElement ("p")
    myPElement.textContent = ":P"
    document.body.appendChild(myPElement)
  });
  
}else{
  alert("Button not found")
}