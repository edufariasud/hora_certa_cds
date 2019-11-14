function time() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    if (h > 12) {
        h = h - 12;
    };
    h = h * 2 - 1;
    if (m > 30) {
        h = h + 1;
    }
    if (m > 30) {
        m = m - 30;
    };
    m = m * 2 - 1;
    if (s > 30) {
        m = m + 1;
    }
    if (h > 0 && h < 10) {
        h = "0" + h;
    }
    if (m > 0 && m < 10) {
        m = "0" + m;
    }
    document.getElementById('txt').innerHTML = h + ":" + m;
    setTimeout('time()', 500);
}