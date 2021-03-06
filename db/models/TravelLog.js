const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    popularity_rating: {
      type: Number,
      default: 0
    },
    description: {
      type: String
    },
    image_url: {
      type: String
    },
    location: {
      type: String
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
  },
  { timestamps: true }
)
