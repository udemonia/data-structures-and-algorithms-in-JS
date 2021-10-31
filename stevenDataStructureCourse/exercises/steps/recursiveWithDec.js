const printCountdown = (n, dec=1) => {
    if (n <= 0) {
        return;
    }
    console.log(n);
    n -= dec;
    printCountdown(n)
}

printCountdown(20)