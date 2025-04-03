## Question 20250403

---

## Whether two given strings are anagrams
- จงตรวจสอบว่า String ที่กำหนดให้ 2 ตัวเป็นแอนนาแกรม (anagrams) ของกันและกันหรือไม่
- String 2 ตัว จะถือว่าเป็น anagram หากประกอบด้วยอักขระเดียวกันและมีความถี่ของแต่ละอักขระเท่ากัน โดยไม่คำนึงถึงลำดับ
ตัวอย่าง

```
Input: str1 = "listen", str2 = "silent"
Output: true

Input: str1 = "hello", str2 = "world"
Output: false
```
---

## Group anagrams
จาก array of string ที่กำหนด ให้จัดกลุ่ม string ที่เป็น anagram ของกันและกันไว้ในกลุ่มเดียวกัน
- ใครทำได้ก็ทำ เพราะ LeetCode Medium
- ไม่ต้องทำ optimize version ก็ได้ ถ้าทำได้ ยื่น Resume ได้เลย
```
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```