import axios from "axios";
import { useState } from "react";
import ItemCell from "../components/ItemCell";
import SearchBar from "../components/SearchBar";
import { Item } from "../models/Item";
import { MemeItem } from "../models/MemeItem";


export default function MainPage () {

    const [items, setItems] = useState<Item[]>([]);

    const fetchItems = async (urlString: string) => {
        let url = new URL(urlString);
        const response = await axios.get(urlString);
        
        if (url.hostname === 'memery.app') {
            setItems(
                response.data.map((json: any) => new MemeItem(json))
            );
        } else if (url.hostname === 'www.googleapis.com') {

        }
    }

    return (
        <div className="mt-10">
            <SearchBar 
                onSearch = { (text) => { fetchItems(text) } }
                placeholder = 'Type API URL ...'
            />
            <div className="flex flex-wrap justify-center mt-5">
                {
                    items.map((item: any, index) => {
                        return <div key={index} className="flex-4 mx-3">
                            <ItemCell 
                                title={item.getTitle()}
                                imageUrl={item.getImageUrl()}
                                onClick={ () => console.log('qweqwe') }
                            />
                        </div>
                    })
                }
            </div>
        </div>
    );
}
