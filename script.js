for(i = 1000; i >= 0; i--)
{
    if(i % 2 === 0)
    {
        console.log(i);
    }
  }
  
  for(i = 0; i <= 10000; i++)
  {
      if(i === 2500)
      {
          alert("A quarter of the way there!")
      }
      else if(i === 5000)
      {
           alert("Halfway there!")
      }
      else if (i === 10000)
      {
          alert("The loop is done!")
      }
  }


const myFaveShows = ["Merlin", "Parks and Rec", "Star Trek: Deep Space", "The Originals", "One Punch"];
var myShows = ["My #1 favorite show is", "My #2 favorite show is", "My #3 favorite show is","My #4 favorite show is","My #5 favorite show is"];
    
for(let i = 0; i < myFaveShows.length; i++) {
        console.log(myShows[i], (myFaveShows[i]));  
    }
        
        

       
   