import { useFetchGif } from "../hooks/useFetchGif";
import GifItem from "./GifItem";

export default function GifGrid({category}) {
    const {images, isLoading} = useFetchGif(category);

    return (<div className="card-grid">
        <h3>{category}</h3>
        {
            images.map(img => <GifItem key={img.id} imgData={img}/>)
        }
    </div>
  )
}
