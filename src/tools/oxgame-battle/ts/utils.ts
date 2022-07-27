/** time[ms] asyncで待つ */
export const wait_time = async (time: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve("");
        }, time);
    });
}