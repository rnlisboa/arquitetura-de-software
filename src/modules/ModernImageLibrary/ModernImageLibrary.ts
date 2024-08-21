export default class ModernImageLibrary {
    public load(filePath: string): void {
        console.log(`Image loaded from path: ${filePath}`);
    }

    public render(): void {
        console.log("Image rendered.");
    }
}