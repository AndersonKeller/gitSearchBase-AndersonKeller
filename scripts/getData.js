

async function getAPIdata(user){

    const btnSection = document.querySelector(".btn-section");
  
    const spanNot = document.querySelector("#spanNotFound")
    spanNot.innerText = ""
    try{
     const baseUrl = "https://api.github.com/users/"
     btnSection.classList.add("btn-section-load")
  
      const data = await fetch(`${baseUrl}${user}`)
     .then(function(response){
        if(response.status == 200){
            btnSection.removeAttribute("disabled");
            btnSection.innerText ="Ver perfil no github"
            btnSection.setAttribute("onclick","window.location.href='../profile/index.html'");
          
            spanNot.innerText =""
            btnSection.classList.add("btn-section-load");
            return response.json()
        }else{
            btnSection.innerText = "Usuário não encontrado"
            btnSection.setAttribute("disabled", true);
            const spanNot = document.querySelector("#spanNotFound");
            spanNot.innerText = "Usuário não encontrado"
        }
        console.log(response)
      return response.json()
     }).then(function(responseJson){
        console.log(responseJson);
           localStorage.setItem("user",JSON.stringify(responseJson));
           localStorage.setItem("repos",JSON.stringify(responseJson.repos_url))
          
         return responseJson;
     })
     
     btnSection.classList.remove("btn-section-load");
     return data;
    }catch(error){
         console.log(error)
         return error

    }finally{
       
    }
    
 }

 
let listAvatar = [];
let listRepos = [];
let listUSer = [];
listUSer = [...JSON.parse(localStorage.getItem("user"))]



async function pushLocalUser(){
    const input = document.querySelector(".input-section");
    let user = input.value
    let count =0
    const responseJson = await getAPIdata(user);
    console.log(responseJson.id)
    
    if(listUSer.length>0){
        listUSer.forEach((user)=>{
            if(user.id == responseJson.id){
                count++
            }
        })
    }
        if(count==0){
            listUSer.push(responseJson)
        }
    
        if(listUSer.length>3){
            listUSer.shift()
        }
        localStorage.setItem("user",JSON.stringify(listUSer));
        localStorage.setItem("userAvatar",JSON.stringify(responseJson.avatar_url))
        localStorage.setItem("repos",JSON.stringify(responseJson.repos_url))
        
        
}
