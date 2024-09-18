import { IRest, IWorker } from "./interfaces";

class HumanWorker implements IWorker, IRest {
    eat(): void {
        console.log("humano come")
    }
    work(): void {
        console.log("humano trabaia")
    }
    
}

class RobotWorker implements IWorker {
    work(): void {
        console.log("robo trabaia")
    }
    
}