import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
export default function GifExpertApp() {
    const [categories, setCategories] = useState(['Vegeta', 'Naruto']);
    const addCategories = function(newCategory){
        if(categories.includes(newCategory) )return;
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewValue = {addCategories}
            />
            {categories.map(function(e){
                return <GifGrid category={e} key={e}/>
            })}
            
        </>
    )
}
