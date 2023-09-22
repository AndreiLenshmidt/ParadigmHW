let array1 = [4,2,7,5,6];
let array2 = [1,2,3];
// Пользовательская ошибка LengthError
class LengthError extends Error {
    constructor(message) {
        super(message);
        this.name = "LengthError";
      }
}
// Функция принимает 2 массива, а возвращает коэф корреляции Пирсона
function relation(arrX, arrY) {
    // Поиск средних значений
    let mx; 
    let my; 
    try {
        mx = arrX.reduce((sum,curr)=>sum+curr, 0) / arrX.length;
        my = arrY.reduce((sum,curr)=>sum+curr, 0) / arrY.length;
        if(isNaN(mx) || isNaN(my)) throw new Error("Вы ввели текст вместо числа введите пожалуйста число");
        else if(!isFinite(mx) || !isFinite(my)) throw new Error("Бескоечость не вычисляется, введите пожалуйста число");
        else if(arrX.length != arrY.length) throw new LengthError("Введите пожалйуста одинаковое колличество чисел, "+
                                                "иначе корреляция будет рассчитана для меньшего колличества элементов")
    } catch(err) {
        alert(err.message);
        if(err.name !== "LengthError") return 0;
    }
    // Рассчет минимальной длины массивов
    const length = Math.min(arrX.length, arrY.length);
    // Поиск x-Mx, y-My, для массивов по минимальой array.length
    const x = arrX.slice(0, length).map(xi => xi - mx);
    const y = arrY.slice(0, length).map(yi => yi - my);
    // Вычисление делителей формулы Пирсона
    const sum1 = x.reduce((sum,xi,i)=>(xi*y[i])+sum,0);
    const sum2 = Math.sqrt(x.reduce((sum2, xi, i)=>((Math.pow(xi,2)*Math.pow(y[i],2)))+sum2, 0));
    if (sum2 === 0) return 0;
    else return rxy = (sum1/sum2).toFixed(4);
}

alert(relation(array1, array2));