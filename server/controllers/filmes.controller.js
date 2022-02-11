import * as filmesService from "../services/filmes.service.js";
import mongoose from 'mongoose';

const getAll = async (req, res) => {

    const filmes = await filmesService.getAll();
    res.send(filmes);
};

const getById = async (req, res) => {

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({message: 'id inválido. Por favor, verifique as informações e tente novamente.'})
        return
    };

    const filme = await filmesService.getById(id);

    if(!filme) {
        res.status(404).send({message: "Filme não encontrado. Por favor, verifique as informações e tente novamente."})
        return
    };

    res.send(filme);
};

const updateFilme = async (req, res) => {

    const id = req.params.id;
    const updateFilme = req.body;

    await filmesService.updateFilme(id, updateFilme)
    .then(() => res.send({message: 'Filme editado com sucesso!'}))
    .catch(e => res.status(500).send({message: `Erro no servidor ${e}`}))
};

const createFilme = async (req, res) => {

    const filme = req.body;

    await filmesService.createFilme(filme)
    .then(() => res.send({message: 'Filme adicionado com sucesso!'}))
    .catch(e => res.status(500).send({message: `Erro no servidor ${e}`}))
};

const deleteFilme = async (req, res) => {

    const id = req.params.id;

    await filmesService.deleteFilme(id)
    .then(() => res.send({message: 'Filme deletado com sucesso!'}))
    .catch(e => res.status(500).send({message: `Erro no servidor ${e}`}))
};

export { getAll, getById, updateFilme, deleteFilme, createFilme };