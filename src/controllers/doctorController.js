const Doctor = require("../models/Doctors");

const createDoctor = async (req, res) => {
    const { name, crm, specialty, clinic, phone, favorite } = req.body;
    try {
        const doctor = await Doctor.create({ name, crm, specialty, clinic, phone, favorite });
        console.log(`Medico ${doctor.name} criado`);
        res.status(201).send(doctor);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getAllDoctors = async (req, res) => {
    const { favorite } = req.query;
    try {
        const where = favorite ? { where: { favorite } } : {}
        const doctors = await Doctor.findAll(where);
        if (doctors && doctors.length > 0) {
            res.status(200).send(doctors);
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getDoctor = async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await Doctor.findOne({
            where: { id: id }
        });
        if (doctor) {
            res.status(200).send(doctor);
        } else {
            res.status(404).send({ message: `Médico não encontrado com o id ${id}` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateDoctor = async (req, res) => {
    const { id } = req.params;
    const { name, crm, specialty, clinic, phone, favorite } = req.body;
    try {
        const rowsUpdated = await Doctor.update({ name, crm, specialty, clinic, phone, favorite }, {
            where: { id: id }
        });
        if (rowsUpdated && rowsUpdated > 0) {
            res.status(200).send({ message: `${rowsUpdated[0]} medico(s) atualizado(s)` });
        } else {
            res.status(404).send({ message: `Medico com id ${id} não encontrado para atualizar` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const { favorite } = req.body;
    console.log(`doctor${id}favorite${favorite}`)
    try {
        const rowsUpdated = await Doctor.update({ favorite }, { where: { id: id } });
        console.log(`rowsUpdated${rowsUpdated}`)
        if (rowsUpdated && rowsUpdated > 0) {
            res.status(200).send({ message: `${rowsUpdated[0]} medico(s) com informação de favorito atualizada com sucesso` });
        } else {
            res.status(404).send({ message: `Medico com id ${id} não encontrado para atualizar informação de favorito` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteDoctor = async (req, res) => {
    const { id } = req.params;
    try {
        const rowsDeleted = await Doctor.destroy({ where: { id: id } });
        if (`linhas ${rowsDeleted}`) {
            res.status(200).send({ message: `${rowsDeleted} medico(s) deletado(s) com sucesso` });
        } else {
            res.status(404).send({ message: `Medico com id ${id} não encontrado para deletar` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createDoctor,
    getAllDoctors,
    getDoctor,
    updateDoctor,
    updateFavorite,
    deleteDoctor,
}