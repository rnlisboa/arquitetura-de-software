import Shape from "./Shape";

export default class Rectangle extends Shape {
    private height: number;
    constructor(width: number, height: number){
        super(width)
        this.height = height;
    }

    public getWidth(){
        return this.getLine();
    }

    public getHeight(){
        return this.height;
    }
}