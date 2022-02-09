import Filme from "../model/filmes.model.js";

const getAll = async () => {
    const filmes = await Filme.find();
    return filmes;
};

const getById = async (id) => {
    const filme = await Filme.findById(id)
    return filme;
};

const updateFilme = async (id, filme) => {
    return await Filme.findByIdAndUpdate(id, filme);
};

const createFilme = async (filme) => {
    return await Filme.create(filme);
};

const deleteFilme = async (id) => {
    return await Filme.findByIdAndDelete(id);
};

export { getAll, getById, updateFilme, deleteFilme, createFilme };