import {question} from "readline-sync";

function NhapA () :number {
    const A: number = Number(question('Nhap canh a: '));
    return A;
}

function NhapB () :number {
    const B: number = Number(question('Nhap canh b: '));
    return B;
}

function NhapC () :number {
    const C: number = Number(question('Nhap canh c: '));
    return C;
}

function laTamgiacdeu(a: number, b: number, c: number): boolean  {
    if (a==b && b==c)
        return true;
    else 
        return false;
}

function function_laTamgiacdeu() {
    const canhA: number = NhapA();
    const canhB: number = NhapB();
    const canhC: number = NhapC();

    if(laTamgiacdeu(canhA, canhB, canhC) == true)
        console.log('Yes');
    else
        console.log('No');
}

function_laTamgiacdeu();