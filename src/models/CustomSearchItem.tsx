import { Item } from "./Item";

export class CustomSearchItem implements Item {

    private json: any;

    constructor (json: any) {
        this.json = json;
    }
    
    public getImageUrl (): string {
        return this.json.link;
    }
    
    public getTitle (): string {
        return this.json.title;
    }
    
    public getJson (): object {
        return this.json;
    }

}
