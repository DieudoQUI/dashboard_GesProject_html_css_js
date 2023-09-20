/* ==============> Recuperation depuis le DOM <===============*/
const header__content__right__show__dropdown = document.querySelector(
  ".header__content__right__show__dropdown"
);
console.log(header__content__right__show__dropdown);
const deconnexion__dropdown = document.querySelector("deconnexion__dropdown");
console.log(deconnexion__dropdown);
if (header__content__right__show__dropdown)
  header__content__right__show__dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    if (!header__content__right__show__dropdown.classList.contains("active")) {
      header__content__right__show__dropdown.classList.add("active");
    }
  });

const buttonAddProject = document.querySelector(".addProject");

const addProjectFormModal = document.getElementById("addProjectFormModal");
const addMemberFormModal = document.getElementById("addMemberFormModal");

const buttonFormSaveProject = document.getElementById("form--saveProject");
const buttonFormSaveMember = document.getElementById("form--saveMember");
const buttonFormSaveTask = document.getElementById("form--saveTask");


const dashboard__main__project__table = document.getElementById(
  "dashboard__main__project__table"
);
let dashboard__main__project__table__tbody = document.querySelector(
  ".dashboard__main__project__table__tbody"
);

const buttonCloseModal = document.querySelector(".buttonCloseModal");

const dashboard__main__member__title = document.querySelector(
  ".dashboard__main__member__title a"
);
const main = document.querySelector("main");
const addProjectFormModal__error__tag = document.querySelector(
  ".addProjectFormModal__error__tag"
);
let dataBaseTabStore = "";

let idProjet = document.getElementById("idProject");
idProjet = 1;
let idMember = document.getElementById("idMember");
idMember = 1;
let idTask = document.getElementById("idTask");
idTask = 1;

let dataBaseObjet = {
  project: [],

  member: [],

  tasks: [],

  forum: [],
};



/* let dataBaseTab = [
  {
    project:[{tt:1}]
  },
  {
    member:[{fr:2}]
  },
  {
    tasks:[{fc:"fd"}]
  },
  {
    forum:[{df:"ff"}]
  }
] */
/*  dataBaseTab.forEach(item=>{
  Object.keys(item).forEach(el=>{
    let key = el
    item[el].forEach(em=>{
      console.log(em)
    })
  })
})  */
/*
                 
/* ================Projet=================== */
const showProjectdata = () => {
  let dataBaseTabStore = JSON.parse(localStorage.getItem("dataBaseObjetKey"));
  console.log(dataBaseTabStore);
  if (dataBaseTabStore) {
    if (dashboard__main__project__table__tbody) {
      dashboard__main__project__table__tbody.innerHTML = "";
    
    dataBaseTabStore?.project?.forEach((item) => {
      console.log(item);

      if (dataBaseTabStore.project[0] != -1) {
        let tableProjectScreen = `<tr>
            <td>${item.idProjet++}</td>
            <td>${item.projectDescription}</td>
            <td>${item.startDate}</td>
            <td>${item.endDate}</td>
            <td>${item.budget}</td>
            <td>    
              <a href="#" class="edit">
                <span class="mdi mdi-pencil"></span>
              </a>
              <a href="#" class="delete">
                <span class="mdi mdi-delete"></span>
              </a>
            </td>
            </tr>`;
        dashboard__main__project__table__tbody.innerHTML += tableProjectScreen;
        
        /* dashboard__main__project__table__tbody.insertAdjacentHTML("afterend", tableProjectScreen); */
      }
    });
  }
  }

  // dashboard__main__project__table__tbody.innerHTML = "";
};
showProjectdata();

if (buttonFormSaveProject) {
  buttonFormSaveProject.addEventListener("click", (e) => {
    e.preventDefault();
    const projectDescription = document.getElementById("nameProject").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const addDate = document.getElementById("addDate").value;
    const budget = document.getElementById("budget").value;

    if (
      projectDescription == "" ||
      startDate == "" ||
      endDate == "" ||
      addDate == "" ||
      budget == ""
    ) {
      addProjectFormModal__error__tag.innerHTML =
        "Veuillez remplir tous les champs";
      addProjectFormModal__error__tag.style.color = "red";
      addProjectFormModal__error__tag.style.fontSize = "20px";
      addProjectFormModal__error__tag.style.fontWeight = "500";
    } else {
      const projectObject = {
        idProjet: `${idProjet++}`,
        projectDescription: projectDescription,
        startDate: startDate,
        endDate: endDate,
        addDate: endDate,
        budget: budget,
      };

      let dataBaseTabStore = JSON.parse(
        localStorage.getItem("dataBaseObjetKey")
      );
      /*     dataBaseTabStore.project.push(projectObject); */
      console.log("reste", dataBaseTabStore);

      if (dataBaseTabStore) {
        dataBaseTabStore.project.push(projectObject);
        localStorage.setItem(
          "dataBaseObjetKey",
          JSON.stringify(dataBaseTabStore)
        );
      } else {
        dataBaseObjet.project.push(projectObject);
        localStorage.setItem("dataBaseObjetKey", JSON.stringify(dataBaseObjet));
        
      }
      showProjectdata();
      addProjectFormModal.reset()
    }
  });
}

/* =========> Show modal form to add project <========== */
const showModalAddProject = () => {
  if (buttonAddProject)
    buttonAddProject.addEventListener("click", (e) => {
      e.preventDefault();
      if (addProjectFormModal) {
        addProjectFormModal.style.display = "block";
        main.style.overflowY = "scroll";
        /*   main.style.backdropFilter='blur(25px)' */
      }
    });
};
showModalAddProject();

/* =========Close modal form to add project========== */
function closeModalFormAddProject() {
  if (buttonCloseModal)
    buttonCloseModal.addEventListener("click", (e) => {
      e.preventDefault();
      addProjectFormModal.style.display = "none";
    });
}
closeModalFormAddProject();
let dataBaseTabStoreTab=""
 let projects = document.getElementById('projets') 
let budget = document.getElementById('budget')
console.log(budget);
console.log(projects);

  dataBaseTabStoreTab = JSON.parse(localStorage.getItem("dataBaseObjetKey"));
  console.log(dataBaseTabStoreTab);
  let dashboardProjectShow= dataBaseTabStoreTab.project.length 

console.log(projects);

if (projects) {
  projects.innerHTML += dashboardProjectShow
}
let sommeBudget=0

dataBaseTabStoreTab.project.forEach(item=>{
  sommeBudget = Number(sommeBudget) + Number(item.budget)
  console.log(sommeBudget);
  budget.innerHTML=sommeBudget + " F CFA"
}) 



/* ================End Projet=============== */

/* const addMemberFormModal = document.getElementById('addMemberFormModal')
const dashboard__main__member__title = document.querySelector('.dashboard__main__member__title a')
const main = document.querySelector('main')
const buttonCloseModal = document.querySelector('.buttonCloseModal')
const buttonFormSave = document.getElementById('form--save') */

const dashboard__main__member__table__tbody = document.querySelector(
  ".dashboard__main__member__table__tbody"
);
console.log(dashboard__main__member__table__tbody);
const addMemberFormModal__error__tag = document.querySelector(
  ".addMemberFormModal__error__tag"
);
/* addMemberFormModal__error__tag="" 

/* =========Get value of modal form add member========== */
/* const getValueModalFormMember = () => {
  if (buttonFormSaveMember)
    buttonFormSaveMember.addEventListener("click", (e) => {
      e.preventDefault();
      let idMember = document.getElementById("identify");
      idMember = 1;
      const lastName = document.getElementById("lastName").value;
      const firstName = document.getElementById("firstName").value;
      const dateAdd = document.getElementById("dateAdd").value;

      if (lastName == "" || firstName == "" || dateAdd == "") {
        addMemberFormModal__error__tag.innerHTML =
          "Veuillez remplir tous les champs";
        addMemberFormModal__error__tag.style.color = "red";
        addMemberFormModal__error__tag.style.fontSize = "20px";
        addMemberFormModal__error__tag.style.fontWeight = "500";
      } else {
        const addMemberFormModalObj = {
          idMember: idMember++,
          lastName: lastName,
          firstName: firstName,
          dateAdd: dateAdd,
        };
        console.log("ok");
        console.log(addMemberFormModalObj);
        let position = 1;
        addMemberFormModalTab.push(addMemberFormModalObj);
        let memberTableTbodyAdded = `<tr>
                                          <td>${position++}</td>
                                          <td>${
                                            addMemberFormModalObj.lastName
                                          }</td>
                                          <td>${
                                            addMemberFormModalObj.lastName
                                          }</td>
                                          <td>${
                                            addMemberFormModalObj.firstName
                                          }</td>
                                          <td>${
                                            addMemberFormModalObj.dateAdd
                                          }</td>
                                          <td>    
                                            <a href="#" class="edit">
                                              <span class="mdi mdi-pencil"></span>
                                            </a>
                                            <a href="#" class="delete">
                                              <span class="mdi mdi-delete"></span>
                                            </a>
                                          </td>
                                        </tr>`;
        dashboard__main__member__table__tbody.innerHTML +=
          memberTableTbodyAdded;
        console.log("ok");
        console.log(addMemberFormModalTab);
        localStorage.setItem(
          "addMemberFormModalTab",
          JSON.stringify(addMemberFormModalTab)
        );
        addMemberFormModal__error__tag.innerHTML =
          "Toutes les informations sont bien enregistrées !";
        addMemberFormModal__error__tag.style.color = "green";
        addMemberFormModal__error__tag.style.fontSize = "18px";
        addMemberFormModal__error__tag.style.fontWeight = "500";
        addMemberFormModal.reset();
      }
    });
};

getValueModalFormMember(); */

/* =========> Show modal form to add user <========== */
/* const showModalAddMember = () => {
  if (dashboard__main__member__title)
    dashboard__main__member__title.addEventListener("click", (e) => {
      e.preventDefault();
      if (dashboard__main__member__title) {
        addMemberFormModal.style.display = "block";
        main.style.overflowY = "scroll";
      
      }
    });
};
showModalAddMember(); */

/* =========Close modal form to add user========== */
function closeModalFormAdd() {
  if (buttonCloseModal)
    buttonCloseModal.addEventListener("click", (e) => {
      e.preventDefault();
      /*      addMemberFormModal.style.display = "none"; */
    });
}
closeModalFormAdd();

let asideDate = document.querySelector(".aside__date");
let asideHour = document.querySelector(".aside__hour");
const loadDate = () => {
  let D = new Date();
  let mt = [
    "Janvier",
    "Février",
    " Mars",
    "Avril",
    "Mai",
    " Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  let dayWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  let dWeek = D.getDay();
  let dDay = D.getDate();
  let month = D.getMonth();
  let fullyear = D.getFullYear();
  let h = D.getHours();
  let m = D.getMinutes();
  let s = D.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  let sep = ":";
  if (s % 2 == 0) {
    sep = ":";
  } else {
    sep = " ";
  }
  let time = h + sep + m + sep + s;
  let dateComplet =
    dayWeek[dWeek - 1] + " " + dDay + " " + mt[month] + " " + fullyear;
  let dateCompletTime = dateComplet + " " + time;
  /*  let dateHorloges= `${dayWeek[dWeek]} ${dDay} ${mt[month]} ${fullyear} ${h}${sep}${m}${sep}${s}` */
  asideDate.innerHTML = dateComplet;
  asideHour.innerHTML = time;
  //console.log(dateCompletTime);
};
loadDate();
setInterval(loadDate, 1000);

/* ========hambergeur active========= */
/*  const menuhambergeur = document.querySelector('.header__content__left__menu')
    if(menuhambergeur)
    menuhambergeur.addEventListener('click', ()=>{
        if(!menuhambergeur.classList.contains('active')){
            menuhambergeur.classList.add('active')
        }else{
            menuhambergeur.classList.remove('active')
        }
    }) */
/* ========Changement of sidebar to sidebar second========= */
const buttonMenuHambergeur = document.querySelector(
  ".header__content__left__menu"
);
const asidebar = document.querySelector(".aside__bar");
const asideSecond = document.querySelector(".aside__second");
const dashboardMain = document.querySelector(".dashboard__main");
if (buttonMenuHambergeur) {
  buttonMenuHambergeur.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      !buttonMenuHambergeur.classList.contains("active") &&
      !asidebar.classList.contains("active") &&
      !asideSecond.classList.contains("active") &&
      !dashboardMain.classList.contains("active")
    ) {
      buttonMenuHambergeur.classList.add("active");
      asidebar.classList.add("active");
      asideSecond.classList.add("active");
      dashboardMain.classList.add("active");
    } else {
      buttonMenuHambergeur.classList.remove("active");
      asidebar.classList.remove("active");
      asideSecond.classList.remove("active");
      dashboardMain.classList.remove("active");
    }
  });
}

/* const aside__bar__middle__menu__item = document.querySelector('.aside__bar__middle__menu__item')
if(aside__bar__middle__menu__item)
aside__bar__middle__menu__item.addEventListener('click',(e)=>{
  e.preventDefault
  if(!aside__bar__middle__menu__item.classList.contains('active')){
    aside__bar__middle__menu__item.add('active')
  }else{
    aside__bar__middle__menu__item.remove('active')
  }
}) */

/* ========> chart dashboard <========= */
var ctx1 = document.getElementById("chart1");
var myChartOne = new Chart(ctx1, {
  type: "line",
  data: {
    labels: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    datasets: [
      {
        label: "Solde disponible",
        data: [18, 15, 98, 40, 18, 15, 98, 45, 20, 15, 108, 40],
        backgroundColor: "#394095",
        borderColor: "#394095",
        borderWidth: 2,
      },
      {
        label: "Dépense",
        data: [12, 13, 20, 60, 24, 45, 65, 25, 47, 50, 70, 55],
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  },
  options: {
    tooltips: {
      mode: "index",
      bodySpacing: 5,
      bodyFontFamily: "Noto sans",
      bodyFontSize: 20,
    },
  },
});
var ctx2 = document.getElementById("chart2");
// Exemple de données JSON
var jsonData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "july"],
  data: [10, 15, 7, 12, 9, 50, 25],
};
// Création du graphique
var myChartTwo = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: jsonData.labels,
    datasets: [
      {
        label: "Budget annuel",
        data: jsonData.data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
var ctx3 = document.getElementById("chart3");
// Exemple de données JSON
var jsonData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "july"],
  data: [10, 15, 7, 12, 9, 50, 25],
};
// Création du graphique
var myChartTwo = new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: jsonData.labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
var ctx4 = document.getElementById("chart4");
// Exemple de données JSON
var jsonData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "july"],
  data: [10, 15, 7, 12, 9, 50, 25],
};
// Création du graphique
var myChartTwo = new Chart(ctx4, {
  type: "pie",
  data: {
    labels: jsonData.labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
/* ==========Extraction  des données depuis le fichier json========= */
let project = document.getElementById("projets");
let projectPourcent = document.getElementById("projetsPourcent");
let sommeTotalQuantity = 0;
fetch("gs-datas-projects.json")
  .then((resp) => resp.json())
  .then((datas) => {
  /*   let projectNumber = datas.projets.length;
    project.innerHTML = projectNumber;
    let projectNumberPourcentage = (projectNumber * 100) / projectNumber;
    console.log(projectNumberPourcentage);
    projectPourcent.innerHTML = projectNumberPourcentage + " %";
    console.log(datas.projects);
    console.log(projetTab);
    projetTab.push(datas.projects); */
    console.log(projetTab);
    projetTab.forEach((item) => {
      console.log(item.taches);
    });
    /* =========Partie chart=========== */
    /*   const ctx3 = document.getElementById('chart3') */
    // Extraire les noms des projets et leur avancement pour les utiliser dans le graphique
    const nomsProjets = dataFromJson.projets.map((projet) => projet.nom);
    console.log(nomsProjets);
    const avancements = dataFromJson.projets.map((projet) => projet.avancement);

    // Créer le graphique à barres
    var ctx = document.getElementById("chart1").getContext("2d");
    var chart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: nomsProjets,
        datasets: [
          {
            label: "Avancement des projets",
            data: avancements,
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(75, 192, 192, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
// Extraction des données depuis le JSON
var jsonData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "july"],
  data: categoryStockTab[totalStock],
};
var myChartThree = new Chart(ctx3, {
  type: "line",
  data: {
    labels: jsonData.labels,
    datasets: [
      {
        label: "Ventes mensuelles",
        data: dataUse,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Ventes mensuelles",
        data: categoryStockTab,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
/*  }); */
/* partie membre */
