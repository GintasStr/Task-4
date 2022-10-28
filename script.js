/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "./cars.json";

async function getCarsData(url) {
  try {
    const response = await fetch(url);
    const responseCars = await response.json();
    return responseCars;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getCarsDataFromJson(url) {
  const data = await getCarsData(url);
  drawCarsTable(data);
  console.log(data);
}

function drawCarsTable(data) {
  const carsTable = document.getElementById("output");

  data.forEach((dataItem) => {
    const carsContainer = document.createElement("div");
    carsContainer.className = "cars-container";

    const carBrand = document.createElement("div");
    carBrand.textContent = dataItem.brand;
    carBrand.className = "car-brand";

    const carModels = document.createElement("div");
    carModels.textContent = dataItem.models;
    carModels.className = "car-models";

    carsContainer.append(carBrand, carModels);
    carsTable.append(carsContainer);
  });
}

getCarsDataFromJson(ENDPOINT);
