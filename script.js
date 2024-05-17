document.addEventListener('DOMContentLoaded',()=>{
    const addItems= document.querySelector('#input').value;
    const removeItem = document.querySelector('list ul');
    const cross =document.querySelector('#cross');
    removeItem.addEventListener('Click', (e)=>{
     if(e.target.parentElement.classList==cross){
       const li =document.querySelector('.list ul')
       li.parentElement.removeChild(li);
     }
    })
    addItems.addEventListener('click', function addFunc(){
      if(e.target.parentElement.classList==cross){
        const li =document.querySelector('.list ul')
        li.parentElement.appendChildChild(li);}
      })
    });
     

    
