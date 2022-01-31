   
     const carsContainer = document.querySelector('.cars-container')
     
     const baseURL = `http://localhost:4000/api/cars`
 
     const carsCallback = ({ data: cars }) => displayCars(cars)
     const errorCallback = error => console.log(error)
 
     const getCars = () => axios.get(baseURL).then(carsCallback).catch(errorCallback)
     const createCar = () => axios.post(baseURL).then(carsCallback).catch(errorCallback)
     const deleteCar = (id) => axios.delete(baseURL).then(carsCallback).catch(errorCallback)
     const updateHouse = (id) => {
 
       
       axios.put(`${baseURL}/${id}`, { updatedPrice }).then(housesCallback).catch(errCallback)
 
     }
 
     function submitHandler(event) {
       event.preventDefault()
 
       
       let year = document.querySelector('#year')
       let make = document.querySelector('#make')
       let model = document.querySelector('#model')
       let cost = document.querySelector('#price')
 
       let bodyObj = {
         year: year.value,
         make: make.value,
         model: model.value,
         cost: cost.value
 
       }
 
       createCar(bodyObj)
 
       
       year.value = ''
       make.value = ''
       model.value = ''
       cost.value = ''
     }
 
 
 
     function createCarCard(car) {
       const carCard = document.createElement('div')
       carCard.classList.add('car-card')
 
       carCard.innerHTML = `<h1>${car.year}</h1>
         <h2>${car.make} ${car.model}</h2>
         <h3>$${car.cost}</h3>
         <button onclick="deleteCar(${car.id})">Delete Car</button>
         <br>
         <button onclick="updateCar(${car.id})"">changes Price</button>`
 
 
         carsContainer.appendChild(carCard)
     }
 
     function displayCars(arr) {
       
       carsContainer.innerHTML = ``
 
       for (let i = 0; i < arr.length; i++) {
         createCarCard(arr[i])
       }
     }
 
 
 
 
 
 
     document.getElementById("complimentButton").onclick = function () {
       axios.get("http://localhost:4000/api/compliment/")
         .then(function (response) {
           const data = response.data;
           alert(data);
         });
     };
 
     document.getElementById('fortuneButton').onclick = function () {
       axios.get("http://localhost:4000/api/fortune/")
         .then(function (response) {
           const data = response.data;
           alert(data);
         })
     };
 
     document.getElementById('SubmitButton').onclick = function () {
       axios.get("http://localhost:4000/api/cars/")
         .then(function (response) {
           const data = response.data;
           res.status(200).send(cars)
 
         })
     }
 
     
 
     getCars()