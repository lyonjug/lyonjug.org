WebFont.load({
    custom: {
        families: ["Ubuntu:n4", "Font Awesome 5 Brands:n4", "Font Awesome 5 Free:n4,n9"],
        urls: ["/css/custom.css", "/css/fontawesome-all.css"]
    }
});

function getCompareDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('');
}