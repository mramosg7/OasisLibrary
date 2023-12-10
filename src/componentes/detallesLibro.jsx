import { useLocation } from "react-router-dom";
import { useBook } from "../hooks/useBook";
import { useEffect, useState } from "react";
import Header from "../componentes/header"
import imgDefault from '../imagenes/default.png'

export default function DetallesLibro(){
    const {handleDetails} = useBook()
    const [details, setDetails] = useState(null)
    
    let { state } = useLocation();
    
        useEffect(()=>{
                const fetchData = async () => {
                    
                    const response = await handleDetails(state.state.cover_edition_key || state.state.edition_key[0], state.state.key);
                    setDetails(response);

                };
    
                fetchData();
                
            
        },[])

        
  
    
   
    return (
        <>  
            <header>
                <Header/>
            </header>
            <main className="container">
                {details && <div className="container">
                    <div className="row aling-item-center justify-content-center mt-3">
                        <div className="col-auto d-flex ">
                            <img src={details.cover || imgDefault} alt="sdfs" style={{width:'250px', height:'400px'}}/>
                        </div>
                        <div className="col">
                            <h1>{details.title}</h1>
                            <p>{details.author}</p>
                            <p>{details.description}</p>
                            <div className="d-flex flex-row flex-wrap">
                                <p className="me-1 fw-bold">Generos:</p>
                                {details.subjects.slice(0,5).map((genero, index) =>(
                                    <p key={index} className=" me-1">{genero}</p>
                                ))}
                            </div>
                            <p><span className="fw-bold">Pages:</span> {details.pages}</p>
                            <p><span className="fw-bold">Primera publicación:</span> {details.date}</p>
                            <a href={"https://www.amazon.es/s?k=" + details.title} className="btn btn-success" target="_blank">Comprar</a>
                        </div>
                    </div>
                </div>}
            </main>
            
        </>
    )
}