

const maxDate = (dates) => {
    return dates.sort((a,b) => a-b)[0]
}

const values = [
    '10/05/10', '03/03/21',
    '06/02/72', '11/17/21'
]

console.log(new Date(maxDate(values)));




