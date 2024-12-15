const express = require('express')
const router = express.Router()

// Dummy data for testing
const animals = [
    { id: 341, name: 'Lion' },
    { id: 342, name: 'Tiger' },
    { id: 343, name: 'Elephant' },
    { id: 344, name: 'Giraffe' },
    { id: 345, name: 'Zebra' }
];

router.get('/test', (req, res) => {
    res.send("This is Animals Route")
})

// GET /animals: Return all animals
router.get('/', (req, res) => {
    res.send({
        status: "success",
        data: animals
    })
})

// GET /animals/:id: Return a single animal by ID
router.get('/:id', (req, res) => {
    // Step 1: Get ID from req.params
    const { id } = req.params
    // console.log(id);

    // Find Animal with matching id
    animals.forEach(animal => {
        // console.log(animal);
        if (animal.id == id) {
            return res.send(animal)
        }
    });

    // if id not found, then return and error
    res.status(404).send(`Animal with id: ${id} does not exsit`)

})

module.exports = router