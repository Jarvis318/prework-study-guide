//<script src="./assets/script.js"></script> Make sure this is correct,
//and at the bottom of the index file below the footer and above the body.

var topics = ['HTML', 'CSS', 'Git','JavaScript'];
var x = 0;
var randomTopic = topics[Math.floor(Math.random() * topics.length)];



function listTopics()
{
  for(var x = 0; x < topics.length; x++)
    {
      console.log(topics[x]);
    }  
}

function selectTopics()
{
if (randomTopic === 'HTML') 
  {
 console.log("Let's study HTML!");
} 
else if (randomTopic === 'CSS') 
  {
 console.log("Let's study CSS!");
} 
else if (randomTopic === 'Git') 
  {
 console.log("Let's study Git!");
} 
else if (randomTopic === 'JavaScript') 
  {
 console.log("Let's study JavaScript!");
} 
else 
{
 console.log('Please try again!');
}

}
 

console.log('Here are the topics we learned through Prework:'); //List the string file.
listTopics(); //Runs the listTopics fuction

console.log('Which topic should we study first?');
selectTopics(); //Rune the selectTopics function.