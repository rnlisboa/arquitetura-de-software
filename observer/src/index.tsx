import EmailNotifier from "./observers/EmailNotifier";
import PushNotifier from "./observers/PushNotifier";
import EventManager from "./managers/EventManager";

const email: EmailNotifier = new EmailNotifier();
const push: PushNotifier = new PushNotifier();

const observer: EventManager = new EventManager();
observer.subscrib(email);
observer.subscrib(push);

observer.notifyAll();