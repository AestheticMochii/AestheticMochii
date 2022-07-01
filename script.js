/* .js files add interaction to your website */
// for the random fact generator

var quoteList = [" In the UK, animal cruelty charity the RSPCA receives a phone call every 30 seconds","Every 60 seconds, one animal suffers abuse ", " There are over 10,000 puppy mills in the United States ", " Every year, more than 10 million animals die from abuse in the US alone "," Every year, US labs abuse more than 19,000 cats"];

var quote = document.getElementById("quote");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayQuote);
function displayQuote()
  {
    quote.innerHTML = quoteList[count];
    count++;

    if(count == quoteList.length)
    {
      count = 0;
    }
  }

