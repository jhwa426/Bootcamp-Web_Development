// date, day functions

// module.exports.getDate =...
// same as below

exports.getDate = function() {

    const today = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return today.toLocaleDateString("en-NZ", options);
}

exports.getDay = function() {

    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-NZ", options);
}

// console.log(module.exports);