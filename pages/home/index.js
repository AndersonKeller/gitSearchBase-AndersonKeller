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
            
          })
     }
    
     
    
   //let listJson = [];
   renderRecently();
function getRecentlyList(){
    
    const recentUser = localStorage.getItem("user");
   console.log(recentUser)
    const recentUserJson = JSON.parse(recentUser);
    console.log(recentUserJson)
    let listJson = [...recentUserJson];
    //console.log(listJson)
    return listJson;
}

async function renderRecently(){
    let recentUserJson = await getRecentlyList();
    console.log(recentUserJson)
    const ulRecently = document.querySelector(".ul-recently");
    recentUserJson.forEach((user)=>{
    ulRecently.insertAdjacentHTML("afterbegin",`
    <li class="li-recently">
    <img src="${user.avatar_url}" alt="">
    </li>
    `)
   })
}
