/* Desenvolva sua lógica aqui...*/


mainFunction()

async function mainFunction(){
    const input = document.querySelector(".input-section");
     const btnSection = document.querySelector(".btn-section");
     input.addEventListener("input",()=>{
        let userFetch = input.value
        if(input.value != ""){
                getAPIdata(userFetch); 
        }
        else if(input.value == ""){
            btnSection.setAttribute("disabled",true)
        }
     })
        btnSection.addEventListener("click",(e)=>{
            e.preventDefault();
            pushLocalUser();
          })
     }
    
     
    
   let listJson = [];
   renderRecently();
 function getRecentlyList(){
    
    const recentUser = localStorage.getItem("user");
  
    const recentUserJson = JSON.parse(recentUser);
    
    let listJson = [...recentUserJson];
    
    return listJson;
}

async function renderRecently(){
    let recentUserJson =  getRecentlyList();
    const input = document.querySelector(".input-section")
    const ulRecently = document.querySelector(".ul-recently");
    recentUserJson.forEach((user)=>{
        
    ulRecently.insertAdjacentHTML("afterbegin",`
    <li class="li-recently">
    <a id="${user.login}" class="a-link-rec" href ="../profile/index.html">
    <figure>
    <img src="${user.avatar_url}" alt="">
    <legend hidden>Acessar esse perfil</legend>
  </figure> 
    
    </a>
    </li>
    `)
 
   });
  
}


function eventRecentlyList(){
    const link = document.querySelectorAll(".a-link-rec");
    link.forEach((user)=>{
        user.addEventListener("click",()=>{
           getAPIdata(user.id);
           
        })
       // setTimeout(user.href ="../profile/index.html",3000)
       // 
    })
}
function setInputValue(value){
    const input =document.querySelector(".input-section");
    input.value = value;
    getAPIdata()
    return input.value
}