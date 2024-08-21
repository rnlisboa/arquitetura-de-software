export default class LegacyImageLibrary {
    public loadFile(filename: string): void {
        console.log(`Image loaded from file: ${filename}`);
    }

    public displayImage(): void {
        console.log("Image displayed.");
    }
}