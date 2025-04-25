function createActivityCard(activity) {
    const { title, description, imageUrl } = activity;

    // Creando elementos HTML
    const cardDiv = document.createElement('div');
    const titleHeading = document.createElement('h3');
    const descriptionPara = document.createElement('p');
    const image = document.createElement('img');

    // Asignando valores a las propiedades de los elementos HTML
    titleHeading.innerHTML = title;
    descriptionPara.innerHTML = description;
    image.src = imageUrl;

    // Agregando clases CSS a los elementos
    cardDiv.classList.add('activity-card');
    titleHeading.classList.add('activity-title');
    descriptionPara.classList.add('activity-description');
    image.classList.add('activity-image');

    // Agregando elementos al div de la tarjeta
    cardDiv.appendChild(titleHeading);
    cardDiv.appendChild(descriptionPara);
    cardDiv.appendChild(image);

    // Retornando el div finalizado
    return cardDiv;
}