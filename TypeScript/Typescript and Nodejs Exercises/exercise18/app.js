var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Oslo", "Kashmir", "Silicon Valley", "Austin", "Amsterdam"];
console.log(placesToVisit);
console.log(__spreadArray([], placesToVisit, true).sort());
console.log(placesToVisit);
var tempArray = __spreadArray([], placesToVisit, true).sort();
for (var i = tempArray.length - 1; i >= 0; i--) {
    console.log(tempArray[i]);
}
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
placesToVisit.sort();
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
