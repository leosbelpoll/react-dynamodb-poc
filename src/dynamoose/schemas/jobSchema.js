import dynamoose from "dynamoose";
import UserSchema from "./userSchema";

export default new dynamoose.Schema(
  {
    id: Number,
    title: String,
    status: String,
    user: UserSchema,
    createdAt: String,
    completedAt: String,
  },
  {
    saveUnknown: true,
  }
);
