function numericalSequence(n, m) {
    for (var i = 0, d = 1, string = []; d <= n; i++) {
        if (i * i > m) {
            string.push(i);
            d++;
        }
    }
    return string.join(',');
}