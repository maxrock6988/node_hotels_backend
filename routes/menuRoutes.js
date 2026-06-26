const express=require("express")
const router=express.Router()

const MenuItem = require('./../models/menuItem');

router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const newMenu = new MenuItem(data);
        const savedMenue = await newMenu.save();

        console.log('Data saved successfully');
        res.status(200).json(savedMenue);

    } catch (error) {
        console.log('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//get method to get the menu
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data saved');
        res.status(200).json(data);

    } catch (error) {
        console.log('Error saving person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})



module.exports=router; 
