class SingleTonLogger {
  private static instance: SingleTonLogger;
  private logs: string[] = [];

  private constructor() {
    console.log("Singleton Logger created!!");
  }

  public static getInstance() {
    if (!SingleTonLogger.instance) {
      SingleTonLogger.instance = new SingleTonLogger();
    }
    return SingleTonLogger.instance;
  }

  public log(message: string) {
    this.logs.push(message);
  }

  public getLogs(): string[] {
    return [...this.logs];
  }

  public clearLogs(): void {
    this.logs = [];
  }
}

const logger1 = SingleTonLogger.getInstance();
const logger2 = SingleTonLogger.getInstance();

logger1.log("logger1");
logger2.log("logger2");

console.log("=================", logger1.getLogs());
