import React,{useState} from "react";

function Musico1(props) {
     const [mostrarVideo, setMostrarVideo] = useState(false);
     const toggleVideo = () => {
        setMostrarVideo(!mostrarVideo);
    };
    return(
        <div className="musico1-container">
            <h2>{props.nome}</h2>
            <p>Data de integração: {props.dataintegracao}</p>
          <div className="imagem-container" onClick={toggleVideo}>
                <img 
                    src={props.foto} 
                    alt={props.nome} 
                    width="200" 
                    className="imagemclicavel"
                />
                <div className="overlay-text">
                    {mostrarVideo ? "▲" : "▼ "}
                </div>
            </div>
            <p>Instrumentos/estilos: {props.instrumentosestilos}</p>
            <p>Descrição: {props.descricao}</p>
            {mostrarVideo && props.youtubeUrl && (
                <div className="youtube-container">
                    <iframe 
                        width="300" 
                        height="169" 
                        src={props.youtubeUrl}
                        title={`Vídeo de ${props.nome}`}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            )}
        </div>
    )
}

        

    

export default Musico1;
