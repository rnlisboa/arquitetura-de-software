import { EventObserverInterface } from "../interfaces/EventObserverInterface";

export default class EventManager {
    private subscribers: Array<EventObserverInterface> = [];

    public subscrib(subscriber: EventObserverInterface){
        this.subscribers.push(subscriber);
    }

    public notifyAll(){
        for(let subscriber of this.subscribers){
            subscriber.update()
        }
    }

}