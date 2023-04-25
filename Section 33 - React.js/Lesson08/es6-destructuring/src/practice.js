const cars = [
    {
        model: "Tesla Model 3",
        coloursByPopularity: ["red", "white"],
        speedStats: {
            topSpeed: 150,
            zeroToSixty: 3.2
        },
        type: ["Sedan", "SUV"]
    },

    {
        model: "Honda Civic",
        //The top colour refers to the first item in the array below:
        //i.e. hondaTopColour = "black"
        coloursByPopularity: ["black", "silver"],
        speedStats: {
            topSpeed: 140,
            zeroToSixty: 8.5
        },
        type: ["Sedan", "SUV"]
    }
];

export default cars;