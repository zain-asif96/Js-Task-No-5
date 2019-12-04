function lowercase(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    first_part = (str.substring(0, 3)).toLowerCase();
    last_part = str.substring(3, str.length);
    return first_part + last_part;
}
console.log(lowercase("ab"));
console.log(lowercase("ALi"));
console.log(lowercase("MuzAMMil"));