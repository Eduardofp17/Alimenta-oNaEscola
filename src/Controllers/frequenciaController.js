const Frequencia = require('../models/FrequenciaModel')

exports.AddFrequenciaIndex = async  (req, res)=> {
    const frequencias = new Frequencia(req.body);
    const frequencia = await frequencias.buscaPorID(req.params.id);
    
    res.render("addFrequencia", {frequencia});
    return;
}

exports.AdicionaFrequencia = async (req, res) => {
        const frequencia = new Frequencia(req.body);
        await frequencia.atualizaFrequencia(req.params.id);
        res.redirect('back')
        return;
}