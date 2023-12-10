import { Link } from 'react-router-dom';


import { StyledButton } from '../styled-components/styled';
import imgDefault from '../imagenes/default.png'
export default function Libros({ libros}) {
    
    return (
        <>
            <div className="row alaing-items-center justify-content-center">
                {libros.map((libro, index) => (
                    <div className="col-auto" key={index}>
                        <div className="card mb-3" style={{ width: '400px' }}>
                            <div className="row g-0">
                                <div className="col-auto">
                                    <img
                                        src={libro.cover_i || libro.cover_id ? `https://covers.openlibrary.org/b/id/${libro.cover_i ? libro.cover_i : libro.cover_id}-M.jpg` : imgDefault}
                                        className="rounded-start"
                                        alt="..."
                                        style={{ height: '300px', width: '200px' }}
                                    />
                                </div>
                                <div className="col-auto" style={{ width: '49%' }}>
                                    <div className="card-body h-100 d-flex flex-column">
                                        <h5 className="card-title fw-lighter mb-3">{libro.title}</h5>
                                        <p className="card-text">{libro.author_name ? libro.author_name[0] : libro.authors[0].name}</p>
                                        <Link to={`/book/${libro.title}`} state={{ state: libro }} className='mt-auto'>
                                            <p className="card-text"><StyledButton className="btn btn-dark">Ver Detalles</StyledButton></p>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}