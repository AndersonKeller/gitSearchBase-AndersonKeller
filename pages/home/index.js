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
    const input = document.querySelector(".input-section")
    const ulRecently = document.querySelector(".ul-recently");
    recentUserJson.forEach((user)=>{
        //setInputValue(user.login)
        console.log(input.value)
    ulRecently.insertAdjacentHTML("afterbegin",`
    <li class="li-recently">
    <a href="../profile/index.html">
    <img src="${user.avatar_url}" alt="">
    </a>
    </li>
    `)
   })
}
function setInputValue(value){
    const input =document.querySelector(".input-section");
    input.value = value;
    getAPIdata()
    return input.value
}