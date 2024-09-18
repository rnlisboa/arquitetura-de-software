interface Worker {
    work(): void;
    eat(): void;
}

class HumanWorker implements Worker {
    public work(): void {
        console.log("Working hard!");
    }

    public eat(): void {
        console.log("Eating lunch!");
    }
}

class RobotWorker implements Worker {
    public work(): void {
        console.log("Working non-stop!");
    }

    public eat(): void {
        throw new Error("Robots don't eat!");
    }
}
