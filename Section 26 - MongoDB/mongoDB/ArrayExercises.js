use exercises

db.ArrayExercises.drop()

db.ArrayExercises.insertMany([
    {
        title: "one",
        scores: [10, 20, 30]
    },
    {
        title: "two",
        scores: [20, 30, 40]
    },
    {
        title: "three",
        authors: [
            { name: "Abigail", gender: "f", current: true },
            { name: "Betsy", gender: "f", current: false }
        ]
    },
    {
        title: "four",
        authors: [
            { name: "Aaron", gender: "m", current: true },
            { name: "Betsy", gender: "f", current: false }
        ]
    }
])