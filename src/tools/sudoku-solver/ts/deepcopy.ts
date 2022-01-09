/* オブジェクトをdeepcopyするモジュール */

export const deepcopy_ArraySet = (origin: Array<Set<number>>): Array<Set<number>> => {
    const N: number = origin.length;
    let res: Array<Set<number>> = new Array(N);
    for(let i=0; i<N; i++) {
        res[i] = new Set();
        for(let u of origin[i]) {
            res[i].add(u);
        }
    }
    return res;
};

export const deepcopy_ArrayArraySet = (origin: Array<Array<Set<number>>>): Array<Array<Set<number>>> => {
    let res: Array<Array<Set<number>>> = new Array(origin.length);
    for(let i=0; i<res.length; i++) {
        res[i] = new Array(origin[i].length);
        for(let j=0; j<res[i].length; j++) {
            res[i][j] = new Set();
            for(let u of origin[i][j]) {
                res[i][j].add(u);
            }
        }
    }
    return res;
};