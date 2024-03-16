function Cars(manufacturer: string, model: string, ...arr: any[]){
    function extraInfo(){
        /*for(let i = 0; i < arr.length; i++){
            let extaInfo: object = {info: arr[i]};
        }*/
    let info = {...arr};
        return info;
    }

    let carInfo: object = {Manufacturer: manufacturer, Model: model, extraInfo: extraInfo()};
    return carInfo;
}

let car1 = Cars("Toyota", "Corolla","Blue", 2015, 2020)
console.log(car1);