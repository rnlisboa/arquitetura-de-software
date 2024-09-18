import Shape from "./Shape";

export default class Square extends Shape {
    constructor(width: number){
        super(width)
    }

    public getWidth(): number{
        return this.getLine();
    }
}