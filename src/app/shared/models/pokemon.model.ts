export class  Pokemon {
    constructor(
        public name:string, 
        private types:Array<string>,
        private imgURL:string, 
        private favorite: boolean, 
        private cp: number, 
        private hp: number,
        private minHeight: string,
        private maxHeight: string,
        private minWeight: string,
        private maxWeight: string
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