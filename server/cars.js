

let globalId = 0

module.exports = {
    getCars: (rew, res) => {
        console.log(cars)
        res.status(200).send(cars)
    },
    createCar: (req, res) => {
        const {id, year, make, model, cost} = req.body
        let newCar = {
            id: Id,
            year: year,
            make: make,
            model: model,
            cost: cost
        }
        cars.push(newCar)
        res.status(200).send(cars)
        globalId++
    },
    deleteCar: (req, res) => {
        let {id} = req.params
        let index = cars.findIndex(cars => cars.id === +id)
        house.splice(index,1)
        res.status(200).send(cars)
    },
    updateCar: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = cars.findIndex(cars => + cars.id === +id)
        if(cars[index].prices <= 1000 && type === 'minus') {
            cars[index].prices = 0 
            res.status(200).send(cars)
        }else if (type === 'plus') {
            cars[index].prices += 1000
            res.status(200).send(cars)
        } else if (type === 'minus') {
            cars[index].price -= 1000
            res.status(200).send(cars)
        }
    }
}