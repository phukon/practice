interface ScopedLoggerInstance {
  log(message: string): void;
  getLogs(): string[];
  clearLogs(scope?: string): void;
}

interface ScopedLoggerInterface {
  createScopedLogger(scope: string): ScopedLoggerInstance;
}

class ScopedLogger implements ScopedLoggerInterface {
  private static instance: ScopedLogger;
  private static scopedLogsMap: Map<string, string[]> = new Map();

  private constructor() {
    console.log("Scoped Logger Instance created!");
  }

  public static getInstance() {
    if (!ScopedLogger.instance) {
      ScopedLogger.instance = new ScopedLogger();
    }
    return ScopedLogger.instance;
  }

  public get_logs() {
    let logs: string[][] = [];
    for (const log of ScopedLogger.scopedLogsMap.values()) {
      logs.push(log);
    }
    return logs.flat();
  }

  private _log(scope: string, message: string): void {
    if (!ScopedLogger.scopedLogsMap.has(scope)) {
      ScopedLogger.scopedLogsMap.set(scope, []);
    }
    ScopedLogger.scopedLogsMap.get(scope)!.push(message);
  }

  private _getLogs(scope: string): string[] {
    return ScopedLogger.scopedLogsMap.get(scope) ?? [];
  }

  private _clearLogs(scope?: string): void {
    if (scope) {
      ScopedLogger.scopedLogsMap.delete(scope);
    }

    ScopedLogger.scopedLogsMap.clear();
  }

  public createScopedLogger(scope: string): ScopedLoggerInstance {
    return {
      log: (message: string) => this._log(scope, message),
      getLogs: () => this._getLogs(scope),
      clearLogs: () => this._clearLogs(),
    };
  }
}

const s_logger = ScopedLogger.getInstance();

const db_logger = s_logger.createScopedLogger("database");
const auth_logger = s_logger.createScopedLogger("auth");
const network_logger = s_logger.createScopedLogger("network");

network_logger.log("network connection established");
db_logger.log("db connection established");
auth_logger.log("user authenticated!");

console.log("network logger", network_logger.getLogs());
console.log("db logger", db_logger.getLogs());
console.log("auth logger", auth_logger.getLogs());

console.log("All logs: ", s_logger.get_logs());
