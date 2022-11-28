import ItemCell from "../components/ItemCell";
import SearchBar from "../components/SearchBar";


export default function MainPage () {

    const items = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]

    return (
        <div className="mt-10">
            <SearchBar 
                onSearch = { (text) => {console.log(text);} }
                placeholder = 'Type API URL ...'
            />
            <div className="flex flex-wrap justify-center mt-5">
                {
                    items.map(item => {
                        return <div key={item} className="flex-4 mx-3">
                            <ItemCell 
                                title="kqowkeop"
                                imageUrl="https://i.memery.app/hxRabWUS2vH1uCz5KBypJ.jpg"
                                onClick={ () => console.log('qweqwe') }
                            />
                        </div>
                    })
                }
            </div>
        </div>
    );
}
