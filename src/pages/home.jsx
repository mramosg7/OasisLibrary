import Categorias from '../componentes/categorias'
import Header from '../componentes/header'
import Libros from '../componentes/libros'
import PlaceholderLibros from '../componentes/placeholdersLibros';
import { useBookContext } from "../context/BookContext";
import { IoMenu } from "react-icons/io5";



export default function Home() {
    const { loading, libros } = useBookContext()

    return (
        <>
            <header>
                <Header />
            </header>
            <main className='m-3'>
                <div className="row">
                    <section className="col-auto" id='categorias'>
                        <div className="d-none d-md-block">
                            <Categorias/>
                        </div>
                        <div className="d-md-none position-absolute top-0 end-0" style={{marginTop: '1%', marginRight:'2%'}}>
                            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCa">
                                <IoMenu style={{fontSize:'40px' }}/>
                            </button>
                            
                            <div className="offcanvas offcanvas-start" id="offcanvasCa" tabIndex="-1" role="dialog" aria-labelledby="categoriasOffcanvasLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="categoriasOffcanvasLabel">Categorías</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <Categorias/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='col' id='libros'>


                        {loading && <PlaceholderLibros />}
                        {!loading && libros.length != 0 && <Libros libros={libros} />}
                        {!loading && libros.length === 0 && <h1>No se han encontrado libros</h1>}

                    </section>
                </div>
            </main>


        </>
    )
}