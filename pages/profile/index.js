
createUserHeader()

function getUser(){
    let userJson = localStorage.getItem("user");
     let user = JSON.parse(userJson);
     
     return user[user.length-1];
}
function getReposLink(){
    let reposJson = localStorage.getItem("repos");
    let repos = JSON.parse(reposJson);
   
    return repos;
}
async function getReposList(){
   
    const listRepos = await fetch(getReposLink());
    const resp = await listRepos.json();
    //createLiUser()
    return resp

}

async function createUserHeader(){
    user = await getUser();
    document.title.innerText = user.name;

    const main = document.querySelector(".main-profile");
    const header = document.querySelector("#headerUser");
    const divUser = document.createElement("div");
    divUser.classList.add("div-user");
    const imgUser = document.createElement("img");
    imgUser.src  = `${user.avatar_url}`;

    const divInfos = document.createElement("div");
    divInfos.classList.add("div-infos");
    const h2Name = document.createElement("h2");
    h2Name.classList.add("user-name");
    h2Name.innerText = `${user.name}`;
    const pInfo = document.createElement("p");
    pInfo.classList.add("user-info");
    pInfo.innerText = `${user.company}`;
    
    divInfos.append(h2Name,pInfo);
    divUser.append(imgUser,divInfos);

    const divBtns = document.createElement("div");
    divBtns.classList.add("div-btns");
    const btnEmail = document.createElement("button");
    btnEmail.classList.add("btn-email");
    btnEmail.innerText = "Email";
    btnEmail.setAttribute("onclick","window.location.href='mailto'")
    const btnSwitch = document.createElement("button");
    btnSwitch.innerText = "Trocar de usuário"
    btnSwitch.classList.add("btn-switch");
    btnSwitch.setAttribute("onclick","window.location.href='../home/index.html'")

    divBtns.append(btnEmail,btnSwitch);
    header.append(divUser,divBtns);
    //main.appendChild(header)
   // return header;
   //getReposList()
   createLiUser()
  
}


async function createLiUser(){
    const ulRepos = document.querySelector(".ul-repos");
    const repoList = await getReposList();
        repoList.forEach((repo)=>{
            const liRepos = document.createElement("li");
        liRepos.classList.add("li-repos");
        const h2Name = document.createElement("h2");
        h2Name.classList.add("repo-title");
        h2Name.classList.add("title-1")
        h2Name.innerText = `${repo.name}`;
        const pContent  =document.createElement("p");
        pContent.classList.add("repo-content");
        pContent.innerText = `${repo.description}`;
        const divBtns = document.createElement("div");
        divBtns.classList.add("btns-repos");
        const btnRepo = document.createElement("a");
        btnRepo.classList.add("btn-repo");
        btnRepo.classList.add("fake-button")
        btnRepo.innerText = "Repo";
        btnRepo.href = `${repo.html_url}`;
        btnRepo.target = "_blank"
        const btnDemo = document.createElement("button");
        btnDemo.innerText = "Demo"
        btnDemo.classList.add("btn-demo");

        divBtns.append(btnRepo,btnDemo);
        liRepos.append(h2Name,pContent,divBtns);

        ulRepos.appendChild(liRepos);
        })
 }

