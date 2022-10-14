/* Desenvolva sua lógica aqui...*/


mainFunction()

async function mainFunction(){
    const input = document.querySelector(".input-section");
     const btnSection = document.querySelector(".btn-section");
     input.addEventListener("input",()=>{
        
        if(input.value != ""){
               const res = getAPIdata(); 
        }
        else if(input.value == ""){
            btnSection.setAttribute("disabled",true)
        }
     })
        btnSection.addEventListener("click",(e)=>{
            e.preventDefault();
            
          })
     }
    
     
    
   let listJson = [];
   renderRecently();
async function getRecentlyList(){
    
    const recentUser = localStorage.getItem("userAvatar");
   // console.log(recentUser)
    const recentUserJson = await JSON.parse(recentUser);
    //console.log(list)
    //console.log(recentUserJson)
    listJson = [...recentUserJson];
    //console.log(listJson)
    return listJson;
}

function renderRecently(){
    let recentUserJson = listJson;
    //console.log(recentUserJson)
    const ulRecently = document.querySelector(".ul-recently");
    recentUserJson.forEach((user)=>{
    ulRecently.insertAdjacentHTML("afterbegin",`
    <li class="li-recently">
    <img src="${user}" alt="">
    </li>
    `)
   })
}
