

export const fetchLibros = async()=>{
    try{
        const response = await fetch('https://openlibrary.org/trending/monthly.json?limit=20')
        if(!response.ok) throw new Error("No se ha podido hacceder a los libros")

        const data = await response.json();
        const libros = data && data.works ? data.works : [];

        return libros;
    }catch(error){
        console.error(error)
        return null;
    }
}

export const fetchCategory = async(key) =>{
    try{
        const response = await fetch(`https://openlibrary.org/subjects/${key}.json`)
        if(!response.ok) throw new Error("Error al conseguir los libros")
        const data = await response.json()
        const libros = data && data.works ? data.works : [];
        return libros
    }catch(error){
        console.error(error)
        return null;
    }
}

export const fetchSearch = async(key) =>{
    try{
        const response = await fetch('https://openlibrary.org/search.json?q=' + key + '&limit=20')
        if(!response.ok) throw new Error("Error al conseguir los libros")
        const data = await response.json()
        
        const libros = data && data.docs ? data.docs : [];
        console.log("libros", libros)
        return libros

    }catch(error){
        console.error(error)
        return null;
    }
}

export const fetchDetailsWorks = async(key) =>{
    try{
        const response = await fetch(`https://openlibrary.org${key}.json?`)
        if(!response.ok) throw new Error("Error al buscar los detalles")
        const data = await response.json()
    
        return data
    }catch(error){
        console.error(error)
        return null;
    }
}

export const fetchDetailsBooks = async(id) =>{
    try{
        const response = await fetch(`https://openlibrary.org/api/books?bibkeys=${id}&jscmd=data&format=json`)
        if(!response.ok) throw new Error("Error al buscar los detalles")
        const data = await response.json()
        return data[id]
    }catch(error){
        console.error(error)
        return null;
    }
}

