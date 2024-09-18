class Rectangle {
    protected width: number;
    protected height: number;

    public setWidth(width: number): void {
        this.width = width;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public calculateArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    public setWidth(width: number): void {
        this.width = width;
        this.height = width;
    }

    public setHeight(height: number): void {
        this.height = height;
        this.width = height;
    }
}
