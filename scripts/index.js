class Activity {
    constructor(id, title, description, imgUrl) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.imgUrl = imgUrl;
    }
  }
  
  class Repository {
    constructor() {
      this.activities = [];
    }
  
    getAllActivities() {
      return this.activities;
    }
  
    createActivity(title, description, imgUrl) {
      const id = this.activities.length + 1; 
      const activity = new Activity(id, title, description, imgUrl);
      this.activities.push(activity);
    }
  
    deleteActivity(id) {
      this.activities = this.activities.filter(activity => activity.id !== id);
    }
  }
  
  const repository = new Repository();
  
  function agregarActividad() {
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    const imgUrl = document.getElementById('imgUrlInput').value;
    
    repository.createActivity(title, description, imgUrl);
    mostrarActividades();
  }
  
  function mostrarActividades() {
    const activitiesContainer = document.getElementById('activities-container');
    activitiesContainer.innerHTML = '';
  
    repository.getAllActivities().forEach(activity => {
      const activityElement = document.createElement('div');
      activityElement.innerHTML = `
        <h3>${activity.title}</h3>
        <p>${activity.description}</p>
        <img src="${activity.imgUrl}" alt="${activity.title}">
        <button onclick="eliminarActividad(${activity.id})">Eliminar</button>
      `;
      activitiesContainer.appendChild(activityElement);
    });
  }
  
  function eliminarActividad(id) {
    repository.deleteActivity(id);
    mostrarActividades();
  }
  
  // Mostrar actividades al cargar la página
  mostrarActividades();
