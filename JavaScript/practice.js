// JavaScript基本文法まとめ

// 変数・定数
let num1 = 5;
const fruits = "りんご";

console.log(num1);
console.log(fruits);
console.log('りんごを3個食べました');
console.log(`${fruits}を${num1}個食べました`);



// if文
let num2 = 5;
if (num2 == 1) {
    console.log("1です");
} else if (num2 == 5) {
    console.log("5です");
} else {
    console.log("上記以外です");
}



// switch文
let num3 = 5;
switch (num3) {
    case 1:
        console.log("1です");
        break;

    case 5:
        console.log("5です");
        break;

    default:
        console.log("上記以外です");
        break;
}



// while文
let num4 = 0
while (num4 <= 5) {
    console.log(num4);
    num4 += 1;
}



// for文
for (let num5 = 0; num5 <= 5; num5++) {
    console.log(num5);
}



// 配列
const animals1 = ["dog", "cat", "sheep"];
console.log(animals1);
console.log(animals1[0]);
console.log(animals1[2]);



// 配列ループ
const animals2 = ["dog", "cat", "sheep"];
for (let i = 0; i < 3; i++) {
    console.log(animals2[i]);
}



  // 配列要素数でループ
const animals3 = ["dog", "cat", "sheep"];
console.log(animals3.length);

for (let i = 0; i < animals3.length; i++) {
    console.log(animals3[i]);
}



// オブジェクト
const character = {name: 'にんじゃわんこ', age: 14};
console.log(character);
console.log(character.name);



// オブジェクト配列
const characters1 = [
    {name: "jack", age: 50},
    {name: "haru", age: 20}
];

console.log(characters1[0]);
console.log(characters1[0].name);
console.log(characters1[0].age);
console.log(characters1[1]);
console.log(characters1[1].name);
console.log(characters1[1].age);



// オブジェクト配列と繰り返し
const characters2 = [
    { name: "jack", age: 50 },
    { name: "haru", age: 20 },
    { name: "yasu", age: 30 }
];

for (let i = 0; i < characters2.length; i++) {
    const character = characters2[i];

    console.log("--------------------");
    console.log("名前は" + character.name + "です");
    console.log(character.age + "歳です");
}



// 関数
const hello1 = function () {
    console.log("こんにちは！");
    console.log("私の名前はharuです");
}

hello1();

const hello2 = () => {
    console.log("こんにちは！");
    console.log("私の名前はharuです");
}

hello2();



// 引数
const hello3 = (name) => {
    console.log(`こんにちは、${name}さん`);
};

hello3("jack");



// 戻り値
num6 = 100
const half = (num) => {
    return num / 2;
};

const result = half(num6);

console.log(`${num6}の半分は${result}です`);



// スコープ
if (true) {
    const blockVar1 = 'myBlockVar1-true'; // これがブロックスコープの変数です
    console.log(blockVar1);
} else {
    const blockVar2 = 'myBlockVar1-false'; // これがブロックスコープの変数です
    console.log(blockVar2);
}



// クラス
class Animal {
    constructor(name, age) {
        this.name = name;  // コンストラクト内でプロパティを設定
        this.age = age;
    }
}

const animal1 = new Animal("haru", 20);

console.log(`名前: ${animal1.name}`);
console.log(`年齢: ${animal1.age}`);



// メソッド
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("こんにちは");
    }

    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }

}

const animal = new Animal("haru", 20);  // インスタンス生成
animal.info();  // Animalクラスのinfoメソッド呼び出し



// 継承
class Animal {
    constructor(name, age) {
        this.name = name;  // コンストラクト内でプロパティを設定
        this.age = age;
    }

    info() {
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }
}

class Dog extends Animal {
    getHumanAge() {
        return this.age * 7;
    }

}

const dog1 = new Dog("haru", 20);
dog1.info();



// オーバーライド
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("こんにちは");
    }

    // ここは呼ばれない
    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }
}

class Dog extends Animal {
    // ここが呼ばれる
    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);

        const humanAge = this.getHumanAge();
        console.log(`人間年齢で${humanAge}歳です`);
    }
    getHumanAge() {
        return this.age * 7;
    }
}

const dog2 = new Dog("レオ", 4);
dog2.info();
