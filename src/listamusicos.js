// src/ListaMusicos.js
import React from 'react';
import Musico1 from './musico1';
import dadosMusicos from './musicos.json';

function ListaMusicos() {
    return (
        <div className="lista-musicos">
            {dadosMusicos.musicos.map((musico, index) => (
                <Musico1
                    key={index}
                    nome={musico.nome}
                    dataintegracao={musico.dataintegracao}
                    foto={musico.foto}
                    instrumentosestilos={musico.instrumentosestilos}
                    descricao={musico.descricao}
                    youtubeUrl={musico.youtubeUrl}
                />
            ))}
        </div>
    );
}

export default ListaMusicos;