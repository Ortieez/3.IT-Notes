abstract class myStorage {
    protected data: myElement[] = [];

    public clear(): myStorage {
        this.data = [];
        return this;
    }

    public abstract store(Element: myElement): myStorage;

    public abstract load(): myElement;
}

class LIFO extends myStorage {
    public store(Element: myElement): myStorage {
        this.data.push(Element);
        return this;
    }

    public load(): myElement {
        return this.data.pop()!;
    }
}

class myElement {
    static count: number = 0;
    myId: number;
    value: string;

    constructor(value: string) {
        this.value = value;
        this.myId = myElement.count++;
    }

    public setValue(value: string): myElement {
        this.value = value;
        return this;
    }
    public getValue(): string {
        return this.value;
    }
    public getId(): number {
        return this.myId;
    }

    public static getCount(): number {
        return myElement.count;
    }
}

export { myElement, LIFO };
