// Components of the Observer Pattern
// Component	Description
// Subject (Observable)	The object being observed. It keeps track of its observers.
// Observer	An object that wants to be notified when the subject changes.
// ConcreteSubject	A specific implementation of the subject.
// ConcreteObserver	A specific observer that reacts to updates.

interface Observer<T> {
  update(data: T): void;
}

interface Subject<T> {
  attach(observer: Observer<T>): void;
  detach(observer: Observer<T>): void;
  notify(): void;
}

class WeatherStation<T> implements Subject<T> {
  private static instance: WeatherStation<any>;
  private observers: Observer<T>[] = [];
  private data!: T;

  private constructor() {
    console.log("Singleton WeatherStation has been initialized! \n");
  }

  public static getInstance() {
    if (!WeatherStation.instance) {
      WeatherStation.instance = new WeatherStation();
    }

    return WeatherStation.instance;
  }

  public attach(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer<T>): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  public notify(): void {
    for (const obs of this.observers) {
      obs.update(this.data);
    }
  }

  public setData(data: T): void {
    this.data = data;
    this.notify();
  }
}

class AndroidApp implements Observer<number> {
  update(data: number): void {
    console.log(
      "The weather value has been updated! ==> ",
      data,
      "\n ~ Android App \n \n",
    );
  }
}

class DesktopApp implements Observer<number> {
  update(data: number): void {
    console.log(
      "The weather value has been updated! ==> ",
      data,
      "\n ~ Desktop App \n \n",
    );
  }
}

const Server1 = WeatherStation.getInstance();
const Server2 = WeatherStation.getInstance();
const mobileApp = new AndroidApp();
const WindowsApp = new DesktopApp();

Server1.attach(mobileApp);
Server2.attach(WindowsApp);

Server1.setData(12);
Server2.setData(69);
