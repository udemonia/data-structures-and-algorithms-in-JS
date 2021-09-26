
const crossAdd = (input) => {
    let result = []
    for (let i =0; i < input.length; i ++) {
        let goingUp = input[i];
        let goingDown = input[input.length -1 -i]
        result.push(goingUp + goingDown)
    }
    return result
}

