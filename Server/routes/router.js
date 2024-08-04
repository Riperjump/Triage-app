const express = require('express');
const router = express.Router();
const Patient = require('../db/Patients');

router.post('/', async (req, res) => {
    const { name, code } = req.body;
    
    // Check if the name is 'admin' and the code is 'adm'
    if (name === 'admin' && code === 'adm') {
        return res.status(200).json({ message: 'Admin access granted' });
    }

    try {
        const newPatient = await Patient.create(req.body);
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPatient = await Patient.update(req.body, {
            where: { id: req.params.id },
            returning: true
        });
        res.json(updatedPatient[1][0]);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/wait-time', (req, res) => {
    // Mock wait time data
    res.json({ waitTime: 300 }); // Returning 300 seconds as a mock wait time
});
router.delete('/:id', async (req, res) => {
    try {
        const result = await Patient.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(200).json({ message: 'Patient deleted successfully' });
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
