export default function(db) {
  return {

    saveUsers: function(newUsers, callback) {
      db.collection("tweets").insertOne(newUsers, callback);
    },

    getUsers: function(callback) {
      db.collection("users").find().toArray(callback);
    },

  };
}
