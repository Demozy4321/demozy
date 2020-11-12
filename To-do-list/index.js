const input = document.querySelector('input');
const btn = document.querySelector('.add-task > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
  (e.keyCode === 13? addList(e):null);
});

function addList(e){
  const notCompleted = document.querySelector('.not-completed');
  const completed = document.querySelector('.completed');
  const newLi = document.createElement('li');
  const checkBtn = document.createElement('button');
  const delBtn = document.createElement('button');

  checkBtn.innerHTML = '<i class="fas fa-check">';
  delBtn.innerHTML = '<i class="fa fa-trash"></i>';

  if(input.value !== ''){
    newLi.textContent = input.value;
    input.value= '';
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
    notCompleted.appendChild(newLi);
  }

  checkBtn.addEventListener('click', function(){
    const parent = this.parentNode;
    parent.remove();
    completed.appendChild(parent);
    checkBtn.style.display = 'none';
  });

  delBtn.addEventListener('click', function(){
    const parent = this.parentNode;
    parent.remove();
  });
}
