let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,23,42];
// Функция поиска принимает массив и значение, возвращает индекс либо -1
function search (arr, value) {
    // Создаются перемнные, которые передают в binSearch начало и конец массива
    const first = 0;
    const last = arr.length - 1;
    let result = -1;
    function binSearch(arr, first, last, value) {
        // Вычисляется середина массива
        let half = parseInt(((last - first)/2).toFixed(0)) + first;
        // Т.к. 0.5 не округляется до 0, чтоб half = 0 равнялся нулю, используем условие
        if(last === 1) half = 0;
        // Бинарный поиск если value > либо < чем arr[half] рекурсивно вызываем binSearch
        if (arr[half] < value) {
            if(first===last) return result;
            binSearch(arr, half, last, value);
        } else if (arr[half] > value) {
            if(first===last) return result;
            binSearch(arr, 0, half, value);
        } else if (arr[half] === value) {
            result = half;
        } 
        return result;
    }

    return binSearch(arr, first, last, value);
}

alert(search(arr, 50));