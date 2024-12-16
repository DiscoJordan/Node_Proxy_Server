import { meteorsQuerySchema } from "../schemas/meteors.schema.js";
export default function queryValidation(req, res, next) {
  const validation = meteorsQuerySchema.validate(req.query);

  if (validation.error) {
    res.status(400).send( validation.error.details.map(error=>error.message));
  } else {
    next();
  }
}
