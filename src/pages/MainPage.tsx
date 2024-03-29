import axios from "axios";
import { useState } from "react";
import ItemCell from "../components/ItemCell";
import SearchBar from "../components/SearchBar";
import { CustomSearchItem } from "../models/CustomSearchItem";
import { Item } from "../models/Item";
import { MemeItem } from "../models/MemeItem";
import Dialog from "../components/Dialog";
import ReactJson from 'react-json-view'
import Spinner from "../components/Spinner";
import { TemplateItem } from "../models/TemplateItem";

export default function MainPage () {

    const [items, setItems] = useState<Item[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item>();
    const [isLoading, setIsLoading] = useState(false);

    const fetchItems = async (urlString: string) => {
        setIsLoading(true);
        let url = new URL(urlString);
        const response = await axios.get(urlString);

        if ((url.hostname === 'memery.app' || url.hostname === 'dev.memery.app') && url.pathname.startsWith('/api/memes')) {
            setItems(
                response.data.map((json: any) => new MemeItem(json))
            );
        } else if ((url.hostname === 'memery.app' || url.hostname === 'dev.memery.app') && url.pathname.startsWith('/api/templates')) {
            setItems(
                response.data.map((json: any) => new TemplateItem(json))
            );
        } else if (url.hostname === 'www.googleapis.com') {
            setItems(
                response.data.items.map((json: any) => new CustomSearchItem(json))
            )
        }
        setIsLoading(false);
    }

    return (
        <div className="mt-10">
            <SearchBar 
                onSearch = { (text) => { fetchItems(text) } }
                placeholder = 'Type API URL ...'
            />
            {
                isLoading
                ?   <div className="flex justify-center mt-40">
                        <Spinner></Spinner>
                    </div>
                :   <div className="flex flex-wrap justify-center mt-5">
                    {
                        items.map((item: any, index) => {
                            return <div key={index} className="flex-4 mx-3">
                                <ItemCell 
                                    title={item.getTitle()}
                                    imageUrl={item.getImageUrl()}
                                    onClick={ () => {
                                        setSelectedItem(item)
                                        setDialogOpen(true)
                                    }}
                                />
                            </div>
                        })
                    }
                    </div>
            }
            <Dialog open={dialogOpen} setOpen={setDialogOpen}>
                <ReactJson src={selectedItem?.getJson() as object} />
            </Dialog>
        </div>
    );
}
