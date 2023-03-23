db.profiles.find(
{
// filter document (CONDITIONS)

"biography" : /\d{1,3},\d{1,3}/    
    
},

{
// projection document (SELECT)

"_id" : 0, "biography" : 1

}
)


/*
db.profiles
        .find({}, { biography: 1 })
        .sort({ _id: 1 })
        .forEach(d => {
            print(`${d._id + ' '.repeat(11 - d._id.length) +
             JSON.stringify(d.biography)}`)
})
*/

/*
(() => {
           ungrouped = /^n+a+$/
           grouped = /^(na)+$/
           print(`using /^n+a+$/ on:
       nanananana = ${ungrouped.test('nanananana')} (want to be true)
       nanan = ${ungrouped.test('nanan')} (want to be false)
       using /^(na)+$/ on:
       nanananana = ${grouped.test('nanananana')}  (want to be true)
       nanan = ${grouped.test('nanan')} (want to be false)`)
       })()
*/