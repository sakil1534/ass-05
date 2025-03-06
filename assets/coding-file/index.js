document.getElementById('ShopEase').addEventListener('click',function(){
alert('Fix Mobile Button Issue')
const task=document.getElementById('task');
task.innerText='05'
const nav24=document.getElementById('nav-24');
nav24.innerText='25'
document.getElementById('ShopEase').disabled = true;


const history=document.getElementById('historyDiv');
const history2=document.createElement('p')
history2.innerText=('have Complete The Task Add Dark Mode at 12:48:15 PM');
history.appendChild(history2);
history.style.border='1px solid blue';
history.style.margin=' 10px';
history.style.padding=' 10px';



})
document.getElementById('CloudSync').addEventListener('click',function(){
   alert('Add Dark Mode')
   const task=document.getElementById('task');
   task.innerText='04'
   const nav24=document.getElementById('nav-24');
   nav24.innerText='26'
   document.getElementById('CloudSync').disabled = true;

   const history=document.getElementById('historyDiv');
const history2=document.createElement('p');
history2.innerText=('have Complete The Task Add Dark Mode at 12:48:15 PM');
history.appendChild(history2);
history.style.border='1px solid blue';
history.style.margin=' 10px';
history.style.padding=' 10px';
   
   })
   document.getElementById('SwiftPay').addEventListener('click',function(){
      alert('Add Dark Mode');
      const task=document.getElementById('task');
      task.innerText='03';
      const nav24=document.getElementById('nav-24');
      nav24.innerText='27'
      document.getElementById('SwiftPay').disabled = true;
      
      const history=document.getElementById('historyDiv');
const history2=document.createElement('p');
history2.innerText=('have Complete The Task Add Dark Mode at 12:48:15 PM');
history.appendChild(history2);
history.style.border='1px solid blue';
history.style.margin=' 10px';
history.style.padding=' 10px';
      })
      document.getElementById('Meta').addEventListener('click',function(){
         alert('Add new emoji 🤲');
         const task=document.getElementById('task');
         task.innerText='02';
         const nav24=document.getElementById('nav-24');
         nav24.innerText='28';
         document.getElementById('Meta').disabled = true;
         
         const history=document.getElementById('historyDiv');
const history2=document.createElement('p');
history2.innerText=('have Complete The Task Add Dark Mode at 12:48:15 PM');
history.appendChild(history2);
history.style.border='1px solid blue';
history.style.margin=' 10px';
history.style.padding=' 10px';
         })
         document.getElementById('GoogleLLC').addEventListener('click',function(){
            alert('Integrate OpenAI API');
            const task=document.getElementById('task');
            task.innerText='01';
            const nav24=document.getElementById('nav-24');
            nav24.innerText='29';
            document.getElementById('GoogleLLC').disabled = true;
            const history=document.getElementById('historyDiv');
const history2=document.createElement('p');
history2.innerText=('have Complete The Task Add Dark Mode at 12:48:15 PM');
history.appendChild(history2);
history.style.border='1px solid blue';
history.style.margin=' 10px';
history.style.padding=' 10px';
            
            })
document.getElementById('Glassdoar').addEventListener('click',function(){
 alert('Improve Job searching');
 const task=document.getElementById('task');
task.innerText='0';
const nav24=document.getElementById('nav-24');
nav24.innerText='30';
         
const history=document.getElementById('historyDiv');
const history2=document.createElement('p');
history2.innerText=('have Complete The Task Add Dark Mode at 12:48:15 PM');
history.appendChild(history2);
history.style.border='1px solid blue';
history.style.margin=' 10px';
history.style.padding=' 10px';
               
               })

document.getElementById('history-btn').addEventListener('click',function(){
  const story=document.getElementById('historyDiv')
  story.style.display='none'
})
document.getElementById('Discover').addEventListener('click',function(){
   window.location.href='./main.html';
})
