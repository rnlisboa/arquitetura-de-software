export default class Shape {
    private width: number;
    constructor(width: number) {
        this.width = width;
    }

    public getLine(){
        return this.width;
    }
}