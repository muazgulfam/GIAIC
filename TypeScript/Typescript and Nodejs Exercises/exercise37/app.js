function make_shirt(size, msg) {
    if (size === void 0) { size = "Large"; }
    if (msg === void 0) { msg = "I love TypeScript"; }
    console.log("The size of the T-shirt is " + size + "\nThe text to be written on it is " + msg);
}
make_shirt();
make_shirt("medium");
