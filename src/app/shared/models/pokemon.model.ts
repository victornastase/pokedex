export class  Pokemon {
    constructor(public name:string, private types:Array<string>,private imgURL:string, private favorite: boolean){}

    getFavorite():boolean {
        return this.favorite;
    }

    setFavorite(favorite: boolean) {
        this.favorite = favorite;
    }
}