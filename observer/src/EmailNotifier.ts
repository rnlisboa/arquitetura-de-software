import { EventObserverInterface } from "./interfaces/EventObserverInterface";

export default class EmailNotifier implements EventObserverInterface {
    public update(): void {
        console.log("Insicrito por email")
    }
}