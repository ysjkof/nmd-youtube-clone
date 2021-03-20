import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Text is required',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // video: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   video: "video", //"video"는 DB인 Video.js의 const model = mongoose.model("video", VideoSchema);에서 "video"다.
  // },
});

const model = mongoose.model('Comment', CommentSchema);
export default model;
