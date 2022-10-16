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
        let login = user.login;
        //setInputValue(user.login)
        //console.log(input.value)
    ulRecently.insertAdjacentHTML("afterbegin",`
    <li class="li-recently">
    <a id="${user.login}" class="a-link-rec" href = "../profile/index.html" >
    <img src="${user.avatar_url}" alt="">
    </a>
    </li>
    `)
   });
  // eventRecentlyList()
}

function eventRecentlyList(){
    const link = document.querySelectorAll(".a-link-rec");
    link.forEach((user)=>{
        user.addEventListener("click",()=>{
            console.log(user.id)
           getAPIdata(user.id);
        })
       // user.href ="../profile/index.html"
    })
}
function setInputValue(value){
    const input =document.querySelector(".input-section");
    input.value = value;
    getAPIdata()
    return input.value
}