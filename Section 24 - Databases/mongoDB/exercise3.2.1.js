db.DatatypeExercises.find({})

db.DatatypeExercises.insertOne({ _id: 1, doc: 1 })

db.DatatypeExercises.insertOne({ _id: 2, doc: 2 })

db.DatatypeExercises.insertOne({ _id: "2", doc: 3 })

db.DatatypeExercises.insertOne({ _id: new ObjectId(), doc: 4 })

db.DatatypeExercises.insertOne({ doc: "five", freedom: true, flexibility: ["so", "much", "freedom", { oh: "yes"} ] })