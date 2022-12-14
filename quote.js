 const quoteText = document.querySelector('.quote'),
authorName =document.querySelector('.author  .name'),
 quoteBtn = document.querySelector('button'),
 soundBtn = document.querySelector('.sound'),
 copyBtn = document.querySelector('.copy'),
 twitterBtn = document.querySelector('.twitter');

//random quotes function
function randomQuote(){
   quoteBtn.classList.add('loading');
   quoteBtn.innerText ="Loading Quote...";
   //fetching random quote data from the API and parsing it into JS object
   fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{

      // console.log(result);

       quoteText.innerText =result.content;
       authorName.innerText =result.author;
       quoteBtn.innerText = "New Quote";
       quoteBtn.classList.remove('loading');

   });
}

soundBtn.addEventListener("click", ()=>{
   //speechSynthesisUtterance is a web speech api that reps speech request
   let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
   speechSynthesis.speak(utterance); //speak method of speechSynthesisUtterance
});

copyBtn.addEventListener('click', ()=>{
  //this is to copy quote when copyBtn is clicked
  
  //writeText() property writes the specified text string to the clipboard
  navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener('click', ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");  //open a new twitter tab with passing quote in te url
});

quoteBtn.addEventListener("click", randomQuote);