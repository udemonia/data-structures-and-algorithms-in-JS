


const capitalize = (str) => {
    // auto capitalize the first indexed string
    let results = str[0].toUpperCase()


    for (let i =1; i < str.length; i++) {
        str[i -1] === ' ' ? results += str[i].toUpperCase() : results += str[i]
    }

    return results
}


console.log(capitalize('brandon is running like crazy!'))