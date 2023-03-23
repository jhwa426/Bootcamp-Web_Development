db.tweet.find(
{
// filter document (CONDITIONS)

$and : [{"user.url" : {$ne : null}}, {"entities.hashtags" : {$size : 0}}, {"entities.user_mentions" : {$size : 0}}, {"user.followers_count" : {$gt : 100}}]
 
},

{
// projection document (SELECT)


    

}
)

