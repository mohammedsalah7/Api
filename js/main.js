const search = document.querySelector('#search');
const form = document.querySelector('#form');
const removeBtn = document.querySelector('#remove');
const imgArea = document.querySelector('#imgArea');
const contanier = document.querySelector('#contanier');
const firstBtn = document.querySelector('#fristColor');
const secondBtn = document.querySelector('#secondColor');
const theredBtn = document.querySelector('#theredColor');
const fourthBtn = document.querySelector('#fourthColor');
const fivethBtn = document.querySelector('#fivethColor');

form.addEventListener('submit', e =>{
    e.preventDefault();
     const searchVal = search.value;
     console.log(searchVal)
     fetch(`https://picsum.photos/id/${searchVal}/info` ,{

            method: 'GET',
            credentials:'same-origin',
            headers:{
                'Content-Type' :'application/json',
            },
     })
            .then(res => res.json())
            .then(res => {
                const url = res.download_url;
                const img = document.createElement('img');
                img.src = url ;
                img.setAttribute( "class","image");
                imgArea.appendChild(img);
            })
                .catch(console.log);
                
});

removeBtn.addEventListener('click' ,()=>{
    imgArea.textContent='';
    search.value='';
})

firstBtn.addEventListener('click' , function(){
   contanier.style.background='#ffc300';
})
secondBtn.addEventListener('click' , function(){
    contanier.style.background='#91eec1';
})
theredBtn.addEventListener('click' , function(){
    contanier.style.background='#00bec3';
})
fourthBtn.addEventListener('click' , function(){
    contanier.style.background='#94ecff';
})
fivethBtn.addEventListener('click' , function(){
    contanier.style.background='#6ab26c';
})
