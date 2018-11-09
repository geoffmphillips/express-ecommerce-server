export default function(db) {
  return {

    saveAdmin: function(newAdmin, callback) {
      db.collection("tweets").insertOne(newAdmin, callback);
    },

    getAdmins: function(callback) {
      db.collection("admin").find().toArray(callback);
    },

  };
}
