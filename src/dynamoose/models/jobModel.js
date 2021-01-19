import dynamoose from "dynamoose";
import JobSchema from "../schemas/jobSchema";

export default dynamoose.model("jobs", JobSchema);
