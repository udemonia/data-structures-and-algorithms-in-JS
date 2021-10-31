const steps = (n) => {
    if (n === 0) {
        return;
    }
    console.log(n)
    n --;
    steps(n)
}

steps(10)
