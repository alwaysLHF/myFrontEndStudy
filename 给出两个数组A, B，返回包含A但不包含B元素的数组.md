    /**
     * 给出两个数组A, B，返回包含A但不包含B元素的数组
     */
    arrayCut(arr: any, brr: any[]) {
        if (arr.length === 0 || brr.length === 0) {
            return arr;
        } else {
            let temp = [];
            let temparray = [];
            for (let i = 0; i < brr.length; i++) {
                temp[brr[i]] = typeof brr[i];
            }
            for (let i = 0; i < arr.length; i++) {
                const type = typeof arr[i];
                if (!temp[arr[i]]) {
                    temparray.push(arr[i]);
                } else if (temp[arr[i]].indexOf(type) < 0) {
                    temparray.push(arr[i]);
                }
            }
            return temparray;
        }
    }
