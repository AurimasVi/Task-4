/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const carsData = "./cars.json";
let savedData = [];
const outputContainer = document.querySelector("#output");

const getData = async () => {
  try {
    const response = await fetch(carsData);
    let data = await response.json();

    data.forEach((element) => savedData.push(element));
    console.log(savedData);
    displayInfo();
  } catch (error) {
    console.error(error);
  }
};

getData();

const displayInfo = () => {
  savedData.forEach((element) => {
    const brandCard = document.createElement("div");
    brandCard.classList.add("brandCard");

    const brandName = document.createElement("h2");
    brandName.classList.add("brandName");
    brandName.textContent = element.brand;
    outputContainer.append(brandCard);
    brandCard.append(brandName);

    const modelsWrapper = document.createElement("div");
    modelsWrapper.classList.add("modelsWrapper");
    brandCard.append(modelsWrapper);

    element.models.forEach((modelsList) => {
      const modelName = document.createElement("p");
      modelName.classList.add("model");
      modelName.textContent = modelsList;

      modelsWrapper.append(modelName);
    });
  });
};
