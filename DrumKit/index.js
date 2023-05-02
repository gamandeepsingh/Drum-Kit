
   var numberOfDrumButton = document.querySelectorAll(".drum").length;

   for(var i=0;i<numberOfDrumButton;i++){
   document.querySelectorAll("button")[i].addEventListener("click",function(){

      var buttonInnerHTML=this.innerHTML;
      makeSound(buttonInnerHTML);
      btnAnimation(buttonInnerHTML);
   }); 
   }


   document.addEventListener("keypress",function(event){
      makeSound(event.key);
      btnAnimation(event.key);
   })

   function makeSound(key){
      switch(key){
            case "w":
               var tom1=new Audio("musics/tom-1.mp3");//adding music
               tom1.play();
               break;
         
               case "a":
               var tom2=new Audio("musics/tom-2.mp3");//adding music
               tom2.play();
               break;
         
               case "s":
               var tom3=new Audio("musics/tom-3.mp3");//adding music
               tom3.play();
               break;
         
               case "d":
               var tom4=new Audio("musics/tom-4.mp3");//adding music
               tom4.play();
               break;
         
               case "j":
               var snare=new Audio("musics/snare.mp3");//adding music
               snare.play();
               break;
         
               case "k":
               var crash=new Audio("musics/crash.mp3");//adding music
               crash.play();
               break;
         
               case "l":
               var kickBass=new Audio("musics/kick-bass.mp3");//adding music
               kickBass.play();
               break;
         
               default:
               console.log(buttonInnerHTML);  
            }
   }

   function btnAnimation(currentKey){
      
      var activeBtn=  document.querySelector("."+ currentKey);
      activeBtn.classList.add("pressed");

      setTimeout(function(){
      activeBtn.classList.remove("pressed");
      },100)

   }
