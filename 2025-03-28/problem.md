Question 20250328 - Exercise จบ week แรก
สามารถทำได้ทุกคนนะครับ หวังว่าจะสนุกกับสัปดาห์แรก

**Design fulfillment center**
ออกแบบ class ที่ใช้ในการขนส่ง รูปแบบ Input จะรับเข้ามาแบบไม่มีกำหนด
โดยที่ Fulfillment center นี้จะใช้การขนส่งในรูปแบบของ cargo หรือ container

โดยจะมี Operation หลัก ๆ 2 ตัว

1. `Load` - จะเป็นการรับสินค้าเข้ามาเอาไว้ในระบบ โดยจะรับเข้ามาเป็นนำ้หนักของรายการนั้น ๆ - assume ว่าของที่โหลดเข้ามาถูกรวมน้ำหนักไว้แล้ว แล้วเป็นเพียง 1 entity สมมุติว่า กาแฟ + ผงซักฟอก รวมกันทั้งหมด 3 กิโลกรัม ก็ให้ assume ว่าของที่เข้ามาเป็น 3 กิโลกรัมได้เลย
2. `Deliver` - เป็นคำสั่งที่บอกให้ทาง Fulfillment center ดึง cargo ที่พร้อมส่งแล้ว ส่งมอบออกจากระบบ โดยการส่งมอบ จะยึดจากจำนวนการร้องขอของต้นทาง เช่นถ้าต้นทางขอ 2 cargo ก็จะดึงไป 2 cargo จากทั้งหมด

**Constraints**

-   Cargo จะบรรจุได้มากที่สุดที่ 100 กิโลกรัม หากเกิน ของใหม่ ต้องไปอยู่ที่ cargo ใหม่
-   การส่งมอบออกจากระบบ สินค้าที่เข้ามาก่อน การส่งมอบจะต้องออกไปก่อนสินค้าที่ถูก Load เข้ามาทีหลังเสมอ
-   ถ้าจำนวน cargo ที่พร้อมส่งมีไม่พอ ให้ส่งเท่าที่มี
-   หากสินค้าน้ำหนักเกิน cargo, ให้ drop ทิ้งได้เลย เพราะศูนย์เราไม่ส่ง
