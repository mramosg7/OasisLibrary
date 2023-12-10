import { useEffect, useState } from "react";
import { fetchLibros, fetchCategory, fetchSearch, fetchDetailsBooks, fetchDetailsWorks} from "../servicios/api";
import { useBookContext } from "../context/BookContext";

export function useBook (){
    const { updateLibros, updateLoading } = useBookContext();
    const [loadingDetails, setLoadingDetails] = useState(false)


    useEffect(() => {
        console.log('use')
        updateLoading(true);
        fetchLibros()
            .then((libros) => {
              
                updateLibros(libros);
            })
            .finally(() => {
                updateLoading(false);
            });
        
    }, []);

    const handleSearchCategory = (category)=>{
        updateLoading(true);
        fetchCategory(category)
            .then(Flibros =>{
                console.log(Flibros)
                updateLibros(Flibros)
            })
            .finally(()=>{
                updateLoading(false)
            })
    }

    const handleSearch = (key) =>{
        updateLoading(true);
        fetchSearch(key)
            .then(libros =>{
                console.log("libros search", libros)
                updateLibros(libros)
            })
            .finally(()=>{
                updateLoading(false)}
            )
    }

    const handleDetails = async(id,key) =>{
        setLoadingDetails(true)
        console.log('id', id)
        
        const d1 = await fetchDetailsBooks(id)
        const d2 = await fetchDetailsWorks(key)
        console.log('d1:', d1)
        const details = {
            title : d1.title,
            pages: d1.number_of_pages,
            date: d1.publish_date,
            author: d1.authors[0].name,
            cover: d1.cover ? d1.cover.large : null,
            subjects: d2.subjects,
            description: d2.description,
        }
        return details

    }
    return {handleSearchCategory, handleSearch, loadingDetails, handleDetails}
}