
const sum = () => {
    let x = 0;

    const  y = (num) => {
        x += num;
    };

    const answer = () => {
        return x;
    };

    return {
        y,
        answer
    };
};

const addSum = sum();
addSum.y(3)
console.log(addSum.answer())

addSum.y(5)
console.log(addSum.answer())

addSum.y(20)
console.log(addSum.answer())