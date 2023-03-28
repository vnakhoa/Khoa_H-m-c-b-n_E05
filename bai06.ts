import {question} from "readline-sync";
/**
 * Nhập độ F từ bàn phím
 * @returns độ F
 */
function nhapdoF(): number {
    let F: number = Number(question('Nhap do F: '));
    return F;
}
/**
 * Chuyển độ F sang độ C
 * @param F độ F
 * @returns trả về độ C
 */
function chuyensangdoC(F: number): number {
    let C: number = (5/9)*(F -32);
    return C;
}
/**
 * Chạy hàm chuyển độ F sang độ C
 */
function funct_chuyensangdoC() {
    let doF: number = nhapdoF();
    let doC: number = chuyensangdoC(doF);
    console.log(doC);
}

funct_chuyensangdoC();
