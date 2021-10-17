export function arrayRemove(arr: Array<any>, value: any) {
    return arr.filter((ele: any) => {
        return ele !== value;
    });
}
