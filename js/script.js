document.addEventListener("DOMContentLoaded", function(){
    //Url de una api de cartas de yu gi oh
    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
    //Div del html
    const container = document.getElementById("container");

    //Llamado a la url
    fetch(url)
    .then(res => res.json())
    .then(datos => {

        let cartas = datos.data

        //Array con las cartas que quiero mostrar
        const cartasBuscadas = ["Right Arm of the Forbidden One", "Exodia the Forbidden One", "Left Arm of the Forbidden One", "Right Leg of the Forbidden One",  "Left Leg of the Forbidden One"];
        
        //Filtro por nombre
        const exodia = cartas.filter(card => cartasBuscadas.includes(card.name));

        //Órden de las imágenes segun el criterio en el que las puse en cartasBuscadas
        exodia.sort((a, b) => cartasBuscadas.indexOf(a.name) - cartasBuscadas.indexOf(b.name));

       //Iteración y creacion del html
        exodia.forEach(element => {

            container.innerHTML += 
            `
                <img id="imagenCarta" src="${element.card_images[0].image_url}">
            `;
        });
    })
    .catch(error => {
        console.error("Error al cargar los datos", error);
    })

});