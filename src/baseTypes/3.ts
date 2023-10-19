let some:unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
  str = some; // OK, тепер ми знаємо, що це рядок
}

export {};