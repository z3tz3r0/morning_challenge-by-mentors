interface ATM {
  availableNote: number[];
}

class ATM {
  constructor() {
    this.availableNote = [1000, 500, 100];
  }

  withdraw(amount: number) {
    if (
      typeof amount !== "number" ||
      !this.canDispenseExactAmount(amount) ||
      amount < 0 ||
      !Number.isInteger(amount)
    ) {
      console.log("ไม่สามารถทำรายการได้");
      return;
    }

    let tempAmount = amount;
    const map = new Map();

    for (const validNote of this.availableNote) {
      while (tempAmount >= validNote) {
        map.set(validNote, (map.get(validNote) || 0) + 1);
        tempAmount -= validNote;
      }
    }

    const totalNotes = Array.from(map.values()).reduce(
      (sum, notes) => (sum += notes),
      0
    );

    if (totalNotes > 20) {
      console.log("ไม่สามารถทำรายการได้");
      return;
    }

    return Array.from(map.entries()).forEach(([key, val]) =>
      console.log(`${key} บาท ${val} ใบ`)
    );
  }

  canDispenseExactAmount(amount: number): boolean {
    let checkAmount = amount;
    for (const validNote of this.availableNote) {
      while (checkAmount >= validNote) {
        checkAmount -= validNote;
      }
    }
    return checkAmount === 0;
  }
}

const atm = new ATM();

atm.withdraw(901); // ไม่สามารถทำรายการได้
atm.withdraw(900); // 500 บาท 1 ใบ 100 บาท 4 ใบ
atm.withdraw(2700); // 1000 บาท 2 ใบ 500 บาท 1 ใบ 100 บาท 2 ใบ
atm.withdraw(35000); // ไม่สามารถทำรายการได้
