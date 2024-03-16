var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Cars(manufacturer, model) {
    var arr = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arr[_i - 2] = arguments[_i];
    }
    function extraInfo() {
        /*for(let i = 0; i < arr.length; i++){
            let extaInfo: object = {info: arr[i]};
        }*/
        var info = __assign({}, arr);
        return info;
    }
    var carInfo = { Manufacturer: manufacturer, Model: model, extraInfo: extraInfo() };
    return carInfo;
}
var car1 = Cars("Toyota", "Corolla", "Blue", 2015, 2020);
console.log(car1);
