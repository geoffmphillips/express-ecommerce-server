export default function productsDataHelpers(db) {
  return {

    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, callback);
    },

    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    },

  };
}
