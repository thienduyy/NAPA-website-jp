export const simplify = (jsonObject) => {
    for (let key in jsonObject)
        if (Array.isArray(jsonObject[key]) && jsonObject[key].length === 1)
            jsonObject[key] = jsonObject[key][0];
    return jsonObject;
};

/**
 * @param {Array} jsonArray
 * @param {String} keyName
 * @param {String|Array} valueName
 * @param {Boolean} zipDuplicate
 * @param {Boolean} allowNull
 * @param {Boolean} simple
 */

export const zipToObject = (
    jsonArray,
    keyName = "name",
    valueName = ["language", "image"],
    { zipDuplicate = true, allowNull = false, simple = true } = {}
) => {
    jsonArray = JSON.parse(JSON.stringify(jsonArray));

    jsonArray.sort((a, b) => {
        const regex = /(?:[)\d+(?=])/g;
        const num1 = a.name.match(regex),
            num2 = b.name.match(regex);
        // console.log(num1, a);
        if (!num1 || !num2) return num1 ? -1 : 1;
        return parseInt(num1[0]) - parseInt(num2[0]);
    });

    let object = jsonArray.reduce((acc, cur) => {
        const key = cur[keyName];

        const value = Array.isArray(valueName)
            ? valueName.reduce((o, val) => {
                if (allowNull || cur[val]) o[val] = cur[val];

                return o;
            }, {})
            : cur[valueName];
        acc[key] = value;

        return acc;
    }, {});

    if (zipDuplicate) {
        let o = {};
        for (let k in object) {
            const regex = /\[\d+\]/;
            if (regex.test(k)) {
                const key = k.replace(/\[\d+\]/, "");
                if (o[key]) o[key].push(object[k]);
                else o[key] = [object[k]];
            } else o[k] = object[k];
        }
        object = o;
    }

    // console.log('After ',object);
    return simple ? simplify(object) : object;
};