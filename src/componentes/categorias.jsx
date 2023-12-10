import { useBook } from "../hooks/useBook";
import categorias from '../categorias.json';
import { useState } from "react";
import { StyleDivCategorias, StyledPCategory, StyledUl } from "../styled-components/styled";

export default function Categorias(){ 
    const { handleSearchCategory, handleSearch} = useBook()
    const [ search, setSearch ] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        handleSearch(search)
        setSearch('')
    }
    return(
        <>
            <StyleDivCategorias className="p-3 rounded">
                <form onSubmit={handleSubmit}> 
                    <div className="input-group">
                        <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} className="form-control" placeholder="Buscar..." aria-label="Buscar" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Buscar</button>
                        </div>
                    </div>
                </form>
                <h2 className="mt-2">Categorias populares</h2>
                <StyledUl className="w-50">
                    {categorias.populares.map((categoria, index) =>(
                        <li  key={index} className="">
                            <StyledPCategory onClick = {()=>handleSearchCategory(categoria.value)} >{categoria.nombre}</StyledPCategory>
                        </li>
                    ))}
                </StyledUl>
                <h2>Ficción</h2>
                <StyledUl>
                    {categorias.ficción.map((categoria, index) =>(
                        <li  key={index} className="w-50">
                            <StyledPCategory onClick = {()=>handleSearchCategory(categoria.value)} >{categoria.nombre}</StyledPCategory>
                        </li>
                    ))}
                </StyledUl>
                <h2>No Ficción</h2>
                <StyledUl>
                    {categorias.no_ficción.map((categoria, index) =>(
                        <li  key={index} className="w-50">
                            <StyledPCategory  onClick = {()=>handleSearchCategory(categoria.value)}>{categoria.nombre}</StyledPCategory>
                        </li>
                    ))}
                </StyledUl>
            </StyleDivCategorias>
        </>
    )
}