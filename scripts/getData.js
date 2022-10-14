const input = document.querySelector(".input-section");
async function getAPIdata(){
   
    const btnSection = document.querySelector(".btn-section");
    //btnSection.innerText = url
    btnSection.classList.add("btn-section-load");
    try{
     const baseUrl = "https://api.github.com/users/"
     
     let user = input.value;
      const data = await fetch(`${baseUrl}${user}`)
     .then(function(response){
        if(response.status == 200){
            btnSection.removeAttribute("disabled");
            btnSection.innerText ="Ver perfil no github"
            btnSection.setAttribute("onclick","window.location.href='../profile/index.html'");
            spanNot.innerText =""
            
        }else{
            btnSection.innerText = "Usuário não encontrado"
            btnSection.setAttribute("disabled", true);
            btnSection.classList.remove("btn-section-load");
            const spanNot = document.querySelector("#spanNotFound");
            spanNot.innerText = "Usuário não encontrado"
        }
        btnSection.classList.remove("btn-section-load");
         return response.json()
     }).then(function(responseJson){
        console.log(responseJson);
        listUSer.push(responseJson);
        localStorage.setItem("user",JSON.stringify(listUSer));
        listAvatar.push(responseJson.avatar_url);
        localStorage.setItem("userAvatar",JSON.stringify(listAvatar))
        listRepos.push(responseJson.repos_url)
        localStorage.setItem("repos",JSON.stringify(listRepos))
        //userMain = responseJson;
       // createUserHeader(responseJson)
        //return data
         return responseJson;
     })
     console.log(data)
     return data;
    }catch(error){
         
         
         return error

    }finally{
    }
   
 }
let listUSer = [];
let listAvatar = [];
let listRepos = [];
