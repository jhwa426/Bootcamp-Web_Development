db.posts.find(
{
// filter document (CONDITIONS)

"caption" : /(#|@)[a-z0-9]+/i    

},

{
// projection document (SELECT)

"_id" : 0, "caption" : 1
    
}
)
