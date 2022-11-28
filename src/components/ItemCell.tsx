

export default function ItemCell (
    { imageUrl, title = '', onClick }
    : { imageUrl: string, title: string, onClick: () => void }) {
    return (
        <div onClick={onClick} className="flex flex-col items-center">
            <div>
                <img src={imageUrl} className="w-48 rounded-lg" alt=""/>
            </div>
            <p>{title}</p>
        </div>
    )
}