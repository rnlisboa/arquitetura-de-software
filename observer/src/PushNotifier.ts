import { EventObserverInterface } from "./interfaces/EventObserverInterface";

export default class PushNotifier implements EventObserverInterface {
    public update(): void {
        console.log("inscrito por push");
    }

}