const getProjects = new Promise((resolve) => {
    setTimeout(() => {
    fetch("https://raw.githubusercontent.com/FedericoAnelli/ecologia/main/src/components/assets/initialConfig.json")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => console.log("No se pudieron cargar los datos.", error));
    }, 2000)
});

export default getProjects;