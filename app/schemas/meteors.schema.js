import Joi from "joi";
export const meteorsQuerySchema = Joi.object({
  date: Joi.alternatives().try(
    Joi.array()
      .items(
        Joi.string().pattern(
          new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/)
        )
      )

      .max(2),
    Joi.string().pattern(
      new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/)
    )
  ),
  count: Joi.valid("true"),
  wereDangerousMeteors: Joi.valid("true"),
});
