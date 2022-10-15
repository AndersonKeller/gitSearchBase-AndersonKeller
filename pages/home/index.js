/* Desenvolva sua lógica aqui...*/


mainFunction()

async function mainFunction(){
    const input = document.querySelector(".input-section");
     const btnSection = document.querySelector(".btn-section");
     input.addEventListener("input",()=>{
        
        if(input.value != ""){
                getAPIdata(); 
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
    
    const ulRecently = document.querySelector(".ul-recently");
    recentUserJson.forEach((user)=>{
    ulRecently.insertAdjacentHTML("afterbegin",`
    <li class="li-recently">
    <img src="${user.avatar_url}" alt="">
    </li>
    `)
   })
}
