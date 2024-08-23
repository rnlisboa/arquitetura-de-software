import { AdaptadorLegacyImageLibrary } from "./adapters/AdaptadorLegacyImageLibrary";
import LegacyImageLibrary from "./modules/LegacyImageLibrary/LegacyImageLibrary";
import ModernImageLibrary from "./modules/ModernImageLibrary/ModernImageLibrary";

const modernImageLibrary: ModernImageLibrary = new ModernImageLibrary()

const legacyImage: AdaptadorLegacyImageLibrary = new AdaptadorLegacyImageLibrary(modernImageLibrary);

legacyImage.loadFile("teste");

legacyImage.displayImage();
