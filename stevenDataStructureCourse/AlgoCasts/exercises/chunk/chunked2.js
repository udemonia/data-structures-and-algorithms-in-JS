const chunk = require(".");

const letters = [a,b,c,d,e,f,g,h,i]

const chunked = (array, size) => {

    const chunks = [];
    let index = 0;
    //* while loop - increment by size
    while (index < array.length) {
        chunk.push(array.slice(index, index + size));
        index += size;
    }
    return chunks
}

console.log(chunks(letters))