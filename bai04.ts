import {question} from "readline-sync";

function Xinchao(a: string, b: number): number {
    console.log('Minh ten la', a);
    console.log(`Nam sinh ${b}`);
    let tuoi: number = 2023 -b;
    return tuoi;
}
// let t: number = Xinchao('Khoa', 2001);
// console.log(t);

function cnXinchao() {
    let ten: string = String(question('Nhap ten: '));
    let namSinh: number = Number(question('Nhap nam sinh: '));

    let t: number = Xinchao(ten, namSinh);
    console.log(t)
}
cnXinchao();