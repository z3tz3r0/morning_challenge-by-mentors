## Question 20250418

---

## Is correct tech abbreviation

ถ้าเราทำงานสายเทคอาจจะเจอคำย่อที่ใช้ในสายงานนี้บ่อยๆ เช่น k8s, i18n, a11y มันคือการย่อคำ โดยใช้อักษรตัวแรก + จำนวนอักษรที่อยู่ตรงกลาง (ไม่มีเลข 0 นำหน้า) + อักษรตัวสุดท้าย เช่น

-   i18n = internationalization (การทำให้เป็นสากล)
-   l10n = localization (การแปลภาษา/ปรับให้เหมาะกับท้องถิ่น)
-   a11y = accessibility (การเข้าถึงได้)
-   k8s = Kubernetes (ระบบจัดการคอนเทนเนอร์)
-   g11n = globalization (คล้าย i18n แต่เน้นการปรับใช้ทั่วโลก)
-   o11y = observability (การตรวจสอบระบบใน DevOps)
    แต่สำหรับคำถามวันนี้ จะรวมแบบนี้เข้าไปด้วย เช่น คำว่า substitution
    แบบนี้เป็นคำย่อที่ถูกต้อง (คำจริงๆจะไม่มี space นะครับ อันนี้ใส่เพื่อให้สังเกตุได้ชัดเจนครับ)
-   s10n - "s ubstitutio n"
-   sub4u4 = "sub stit u tion"
-   12 = "substitution"
-   su3i1u2on = "su bst i t u ti on"
-   substitution = "substitution"
    และแบบนี้คือไม่ถูกต้อง
-   s55n (55 ยาวเกินไป)
-   s010n (มีเลข 0 อยู่ข้างหน้า)
-   s0ubstitution (จำนวนตัวอักษรเป็น 0)
    จงหาว่า คำย่อ ถูกต้องหรือไม่

เช่น

```
input: word = "internationalization", abbr = "i12iz4n"
output: true
```

```
input: word = "apple", abbr = "a2e"
output: false
```
