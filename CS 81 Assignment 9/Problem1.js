
var wordItems = document.getElementsByTagName("strong");

function highlightOn() 
{
   for (var i=0; i<wordItems.length; i++)
   {                                                    
    wordItems[i].style.color = "red";
    }
}

function highlightOff()
{
  for (var i=0; i<wordItems.length; i++) 
  {
       wordItems[i].style.color = "black";
  }
}