type pickParam = {
    object: Record<string, any>;
    keys: string[];
}
const pick = ({object, keys}:pickParam ) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {

      obj[key] = object[key];
    }
    return obj;
  }, {} as Record<string,any>);
};

module.exports = pick;
