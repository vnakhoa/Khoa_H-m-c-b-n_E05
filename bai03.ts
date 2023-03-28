
function Xinchao(a: string, b: number): number {
    console.log('Minh ten la', a);
    console.log(`Nam sinh ${b}`);
    let tuoi: number = 2023 -b;
    return tuoi;
}
let t: number = Xinchao('Khoa', 2001);
console.log(t);
