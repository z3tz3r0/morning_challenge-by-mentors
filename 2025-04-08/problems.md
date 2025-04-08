## Question 20250408

---

## Logger Rate Limiter

ออกแบบ Logger Rate Limiter ให้รับ message เข้ามาเรื่อยๆ แต่ทุกๆ unique message จะแสดงเพียงครั้งเดียวในทุกๆ 10วินาที (ข้อความที่แสดงแล้วที่วินาทีที่ 1 จะสามารถแสดงได้อีกทีตอนวินาทีที่11)
ข้อความจะนำเข้าระบบเรียงตามลำดับเวลาเสมอ ข้อความสามารถเข้ามาพร้อมกันในวินาทีเดียวกันได้
สร้าง method ชื่อ logMessage รับ parameter message: string และ timestamp: number

-   return true ถ้าข้อความที่เข้ามาสามารถ print ได้ ณ timestamp นั้นๆ
-   return false ถ้าไม่สามารถ print ข้อควมนั้นซ้ำได้
    เช่น

```js
const logger = new LoggerRateLimitter();

logger.logMessage("test", 1); // true
logger.logMessage("1234", 1); // true
logger.logMessage("test", 5); // false
logger.logMessage("test", 11); // true
logger.logMessage("1234", 12); // true
logger.logMessage("1234", 15); // false
logger.logMessage("1234", 22); // true
```
