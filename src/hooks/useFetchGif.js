import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGif = (category) => {
    const [images, setImages] = useState([]);
    const [isLoadinig, setIsLoadinig] = useState(true);
    useEffect(() => {
        getGifs(category).then(res => {
            setImages(res);
            setIsLoadinig(false);
        })
    }, [])
    return {
        images, 
        isLoadinig
    }
}
