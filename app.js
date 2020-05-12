const clear=document.querySelector(".clear");
const list=document.getElementById('list');
const  input=document.getElementById('input');

const CHECK="fa-check-circle";
const UNCHECK="fa-circle-thin";

function addArticle(article,done,trash){

  if(trash){
    return;
  }

  const DONE=done?CHECK:UNCHECK;

  const item= `<li class="item">
                  <i class="fa ${DONE} co" job="complete"></i>
                  <p class="text">${article}</p>
                  <i class="fa fa-trash-o de" job="delete"></i>
                  <i class="fa fa-arrow-up" vote="upvote"></i>
                  <i class="fa fa-arrow-down" vote="downvote"></i>
                  <p id="vote"></p>
              </li`;

  const position="beforeend";
  list.insertAdjacentHTML(position,item);
}

document.addEventListener("keyup",function(event){
  if(event.keyCode==13){
    const article=input.value;

    if(article){
      addArticle(article);
    }

    input.value="";
  }
});

function completeArticle(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
}

function removeArticle(element){
  element.parentNode.parentNode.removeChild(element.parentNode);
}

let score=0;
function addVote(){
  score++;
  console.log(score);
}

function decreasevote(){
  score--;
  console.log(score);
}

list.addEventListener("click",function(event){
  const element=event.target;
  const elementJob=element.attributes.job.value;
  //const elementVote=element.attributes.vote.value;

  console.log(element);
  if(elementJob=="complete"){
    completeArticle(element);
  }
  else if(elementJob=="delete"){
    removeArticle(element);
  }
});
