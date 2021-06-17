document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.querySelector('#create-task-form')
  const newList = document.querySelector('#tasks')

  newForm.addEventListener('submit', e=>{
    e.preventDefault()
    const newTaskDescription = document.querySelector('#new-task-description').value
    const li = document.createElement('li')
    li.textContent = newTaskDescription
    

  const btn = document.createElement('button')
  btn.textContent = 'X'
  // btn.addEventListener('click', (e)=>{
  //   e.target.parentElement.remove()
  // })
  btn.addEventListener('click', ()=>{
    li.remove()
  })
  li.appendChild(btn)
  newList.appendChild(li)
  })
  
});