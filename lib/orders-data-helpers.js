export default function(db) {
  return {

    saveOrder: function(newOrder, callback) {
      db.collection("tweets").insertOne(newOrder, callback);
    },

    getOrders: function(callback) {
      db.collection("orders").find().toArray(callback);
    },

  };
}
