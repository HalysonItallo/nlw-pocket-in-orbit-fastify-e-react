import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { createGoal } from "../../services/create-goal";
import z from "zod";

export const createGoalRoute: FastifyPluginAsyncZod = async (fastify) => {
  fastify.post(
    "/goals",
    {
      schema: {
        body: z.object({
          title: z.string(),
          desiredWeeklyFrequency: z.number().int().min(1).max(7),
        }),
      },
    },
    async (request) => {
      const { title, desiredWeeklyFrequency } = request.body;

      await createGoal({
        title,
        desiredWeeklyFrequency,
      });
    }
  );
};
