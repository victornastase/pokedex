export class  Pokemon {
    constructor(
        public name:string, 
        public types:Array<string>,
        public imgURL:string, 
        public favorite: boolean, 
        public cp: number, 
        public hp: number,
        public minHeight: string,
        public maxHeight: string,
        public minWeight: string,
        public maxWeight: string
        ){}

    getFavorite(): boolean {
        return this.favorite;
    }

    setFavorite(favorite: boolean) {
        this.favorite = favorite;
    }

    getTypes(): Array<string> {
        return this.types;
    }
    
}