export class Utilities {
  static isEmptyObj(item:any) {
 
    return Utilities.isUndefined(item) || Utilities.isNull(item) || item.length === 0;
  }

  static isEmptyStr(item:any) {
    return Utilities.isNull(item) || item.length === 0 || item === '';
  }

  static isEmptyWithTrim(item:any) {
    return Utilities.isNull(item) || item.length === 0 || item.trim() === '';
  }

  static isNull(item:any) {
    return item === null;
  }

  static isUndefined(item:any) {
    return item === undefined;
  }

  static isMultipleOfStep (step:any, value:any) {
    return   (value % step) === 0 || step === 0 ;
  }

  static checkMin (value:any,min:any) {
    return Number(value) >= min ;
  }

  static checkMax (value:any,max:any) {
    return Number(value) > max ;
  }
}
