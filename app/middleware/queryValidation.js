export default function queryValidation(schema,type) {
  return (req, res, next) => {
    const validation = schema.validate(req.query);

    if (validation.error) {
      res
        .status(400)
        .send(validation.error.details.map((error) => error.message));
    } else {
      next();
    }
  };
}
