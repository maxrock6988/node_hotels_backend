const express = require("express")
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();

        console.log('Data saved successfully');
        res.status(200).json(savedPerson);

    } catch (error) {
        console.log('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data saved');
        res.status(200).json(data);

    } catch (error) {
        console.log('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//update have both criteria it use get to find tha data and send like post that updated data
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;//extract id from url
        const updatePersonData = req.body;//run mongoose validation

        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return res.status(404).json({ error: 'person not found' });
        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (err) {
        console.log('Error saving person:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            return res.status(404).json({ error: 'person not found' });
        }
        console.log('data deleted');
        res.status(200).json({ message: 'person Deleted succesfully' });

    } catch (error) {
        console.log('Error saving person:', err);
        res.status(500).json({ error: 'Internal server error' });

    }
})

router.get("/:worktype", async (req, res) => {
    try {
        const worktype = req.params.worktype;

        if (worktype === "chef" || worktype === "waiter" || worktype === "manager") {

            const response = await Person.find({ work: worktype });

            console.log("Response fetched");
            res.status(200).json(response);

        } else {
            res.status(404).json({ error: "Invalid work type" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
