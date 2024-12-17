import Joi from "joi";
export const meteorsQuerySchema = Joi.object({
  date: Joi.alternatives().try(
    Joi.array()
      .items(
        Joi.string()
          .pattern(
            new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/),
          )
          .message("Dates should be in format YYYY-MM-DD"),
      )

      .max(2),
    Joi.string()
      .pattern(new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/))

      .message("Date should be in format YYYY-MM-DD"),
  ),

  count: Joi.string()
    .valid("true")
    .messages({ "any.only": 'Count should be "true"' }),

  wereDangerousMeteors: Joi.string()
    .valid("true")
    .messages({ "any.only": 'wereDangerousMeteors should be "true"' }),
});
