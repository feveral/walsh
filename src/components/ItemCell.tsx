

export default function ItemCell (
    { imageUrl, title = '', onClick }
    : { imageUrl: string, title: string, onClick: () => void }) {
    return (
        <div onClick={onClick} className="flex flex-col items-center">
            <div>
                <img src={imageUrl} className="w-48 h-48 object-cover rounded-lg" alt=""/>
            </div>
            <p className="break-normal w-48">{title}</p>
        </div>
    )
}