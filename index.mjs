const processTail = (tail, length) => length <= 2 ? tail.join(',') : `${tail[0]}-${tail[length - 1]}`;

export default (array) => new Promise(resolve => {
    const result= array.reduce((result, item) => {
        const {length} = result.tail;
        if (length && item !== result.tail[length - 1] + 1) {
            result.string += `${processTail(result.tail, length)},`;
            result.tail = [item];
        } else {
            result.tail.push(item)
        }
        return result;
    }, {
        string: '',
        tail: []
    });
    if (result.tail.length) {
        result.string += processTail(result.tail, result.tail.length)
    }
    resolve(result.string);
});
