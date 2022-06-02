let comments = [];

const container = document.getElementById('container');

const displayComments = () => {
  comments.forEach(el => {
  const comment = document.createElement('div');
  const image = document.createElement('img');
  const textContainer = document.createElement('div');
  const name = document.createElement('p');
  const message = document.createElement('p');
  let deleteB = document.createElement('button');

  comment.className = 'comments-container';
  image.className = 'image';
  name.className = 'name';
  deleteB.className = 'delete-button';
  name.innerHTML = el.name;
  image.src = el.image;
  message.innerHTML = el.message;
  deleteB.innerHTML = 'Delete';
  deleteB.onclick = function(){deleteComment(el.id)};

  textContainer.className = 'text-container';
  textContainer.appendChild(name);
  textContainer.appendChild(message);
  
  comment.appendChild(image);
  comment.appendChild(textContainer);
  comment.appendChild(deleteB);
  container.appendChild(comment)
  })
}

const emptyComments = () => {
  if(container.children)
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

window.deleteComment = (id) => { 
  comments = comments.filter((com) => com.id !== id); 
   
  emptyComments();
  displayComments(comments) 
};

const btnAdd = document.getElementById("form-button");
btnAdd.addEventListener("click", function (e) {
  e.preventDefault();

  let randomItem = Math.floor(Math.random() * 1111);
  let userInput = document.querySelector("#form-input").value;

  comments.push({
    id: randomItem,
    image: "https://www.w3schools.com/css/paris.jpg",
    name: "alex@gmail.com",
    message: userInput,
  });
  emptyComments();
  displayComments();
});