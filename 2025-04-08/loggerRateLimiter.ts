class LoggerRateLimitter {
    messages: { [key: string]: number };
    constructor() {
        this.messages = {};
    }
    logMessage(message: string, timestamp: number): boolean {
        if (this.messages[message] + 10 > timestamp) {
            return false;
        }

        this.messages[message] = timestamp;
        return true;
    }
}

const logger = new LoggerRateLimitter();

console.log(logger.logMessage("test", 1)); // true
console.log(logger.logMessage("test", 5)); // false
console.log(logger.logMessage("1234", 1)); // true
console.log(logger.logMessage("test", 11)); // true
console.log(logger.logMessage("1234", 12)); // true
console.log(logger.logMessage("1234", 15)); // false
console.log(logger.logMessage("1234", 22)); // true
