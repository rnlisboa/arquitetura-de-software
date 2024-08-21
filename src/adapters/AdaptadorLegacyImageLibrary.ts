import { ImageLibraryInterface } from "../interfaces/ImageLibraryInterface";
import ModernImageLibrary from "../modules/ModernImageLibrary/ModernImageLibrary";

export class AdaptadorLegacyImageLibrary implements ImageLibraryInterface {
    private modernImageLibrary: ModernImageLibrary;
    
    constructor(modernImageLibrary: ModernImageLibrary){
        this.modernImageLibrary = modernImageLibrary;
    }

    public loadFile(filename: string): void {
        this.modernImageLibrary.load(filename);
    }

    public displayImage(): void {
        this.modernImageLibrary.render();
    }
}