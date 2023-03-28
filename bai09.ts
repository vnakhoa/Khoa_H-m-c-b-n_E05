import {question} from "readline-sync";

// Nhập số nguyên từ bàn phím
function nhapSo(): number {
    let n: number = Number(question('Nhap so nguyen n: '));
    return n;
}

/**
 * Kiểm tra Số nguyên tố
 * @param n số nguyên n
 * @returns kết quả có hoặc không
 */
function soNguyento(n: number): string {
    let count: number =0;
    let result: string = "";
    for(let i: number = 1; i<=n ; i++) {
        if(n%i == 0 && n>=2) {
            count+=1;
        }
    }
    if(count <= 2 && n>=2) {
        result = "Yes";
        return result;
    }
    else 
        result = "No";
        return result;
}

/**
 * Chạy hàm kiểm tra số nguyên tố
 */
function funct_soNguyento() {
    let n: number = nhapSo();
    let t: string = soNguyento(n);
    console.log(t);
}

funct_soNguyento();