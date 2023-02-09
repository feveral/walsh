import { Item } from "./Item";


export class TemplateItem implements Item {

    private json: any;

    constructor (json: any) {
        this.json = json;
    }
    
    getImageUrl (): string {
        return this.json.image.url;
    }
    
    getTitle (): string {
        return this.json.name;
    }
    
    getJson (): object {
        return this.json;
    }
}