import { z } from "zod";

export const schema = z.object({
  payload: z.unknown(),
});

type Schema = z.infer<typeof schema>;

let a: Schema = {
  payload: { woof: 3 },
};

console.log(schema.safeParse(a));
