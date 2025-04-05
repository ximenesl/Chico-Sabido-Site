const getImages = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Erro ao buscar imagens da rota ${url}:`, error);
        return [];
    }
};

const renderImages = async (containerId, url) => {
    const area = document.getElementById(containerId);
    if (!area) {
        console.error(`Elemento #${containerId} não encontrado!`);
        return;
    }

    const images = await getImages(url);
    area.innerHTML = images.map(image =>
        `<img src="${image.url}" id="fotos-chico-vision" alt="Foto de ${containerId}">`
    ).join("");
};

renderImages("recnplay", "https://visao.pythonanywhere.com/latest_image");
renderImages("startupday", "https://visao.pythonanywhere.com/imagens/all");
renderImages("transforma", "https://visao.pythonanywhere.com/imagenstransforma/all");
