import { ErrorCode } from "./errorTypes";
import customError from "./customError";

class EntityNotFoundError extends customError<ErrorCode> {}
export default EntityNotFoundError;