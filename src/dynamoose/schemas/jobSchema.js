import dynamoose from "dynamoose";

export default new dynamoose.Schema(
  {
    id: Number,
    userId: Number,
    title: String,
    completed: Boolean,
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);
