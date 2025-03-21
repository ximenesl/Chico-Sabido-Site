const getImages = async () => {
    const response = await fetch(`https://visao.pythonanywhere.com/imagens/all`);
    
    const data = await response.json();
    console.log(data)
    return data;
};

const renderImages = async () => {
    const area = document.querySelector('.images-area');
    const images = await getImages();

    if (!area) {
        console.error("Elemento .images-area não encontrado!");
        return;
    }

    area.innerHTML = images.map(image => 
        `<img src="${image.url}" id="fotos-chico-vision" alt="Foto de exemplo do Chico">`
    ).join(""); 
};

renderImages();
