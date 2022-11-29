import { Item } from "./Item";


export class MemeItem implements Item {

    private json: any;

    constructor (json: any) {
        this.json = json;
    }
    
    getImageUrl (): string {
        return this.json.image.url;
    }
    
    getTitle (): string {
        return this.json.description;
    }
    
    getJson (): object {
        return this.json;
    }
}