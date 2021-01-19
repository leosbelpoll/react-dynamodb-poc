import dynamoose from "dynamoose";

export default new dynamoose.Schema(
  {
    id: Number,
    email: String,
    name: String,
    firstName: String,
    createdAt: String,
    updatedAt: String,
  },
  {
    saveUnknown: true,
  }
);
