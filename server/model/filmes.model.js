import mongoose from "mongoose";

const filmeModel = new mongoose.Schema({

id: {type: Number},
titulo: {type: String},
imagem: {type: String},
genero: {type: String},
nota: {type: Number},
assistido: {type: Boolean}

});

const Filme = mongoose.model("filmes", filmeModel);

export default Filme;
