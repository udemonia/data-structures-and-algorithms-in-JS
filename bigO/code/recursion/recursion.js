

function countTo(max, current, list) {
    if( current > max) return;
    console.log(current);
    countTo(max, current + 1)
}

const counts = countTo(10,1)