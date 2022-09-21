import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

/*RAFCE*/
    const Resultado = ({ inputValue }) => {
    const [linkCorto, setlinkCorto] = useState("");
    const [copiado, setCopiado] = useState (false);
    const [carga, setCarga] = useState(false);
    const [error, setError] = useState(false);

    const buscarDatos = async () => {
        try {
            setCarga(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?
            url=${inputValue}`);
            setlinkCorto(await res.data.result.full_short_link);

        } catch(error){
            setError(error);
        } finally{
            setCarga(false);
        }
    }

    useEffect(() => {
        if(inputValue.length) {
            buscarDatos();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopiado(false);
        }, 1000);

        return () => clearTimeout(timer)
    }, [copiado]);

    if(carga)
    {
        return <p className="sinDatos">Cargando...</p>
    }
    if(error)
    {
        return <p className="sinDatos">Algo salió mal... recarga la página</p>
    }
    
   

  return (
    <>
        {linkCorto && (
             <div className="resultado">
             <p>{linkCorto}</p> 
    
            <CopyToClipboard 
                text={linkCorto}
                onCopy={() => setCopiado(true)}
            >
             <button className={copiado ? "copiado" : ""}>Copiar</button>
            </CopyToClipboard>
    
           
        </div>
        )}
    </>
   
  )
}

export default Resultado