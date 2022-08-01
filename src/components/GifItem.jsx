
export default function GifItem({imgData}) {
  return (
    <div className="card">
        <img src={imgData.url} alt={imgData.title} />
        <p>{imgData.title}</p>
    </div>
  )
}
