import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPendingGoals } from "../http/get-pending-goals";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient();

  const doPendingGoals = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
  });

  if (!doPendingGoals.data) {
    return null;
  }

  async function handleCompleteGoal(goalId: string) {
    console.log(goalId);
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
    queryClient.invalidateQueries({ queryKey: ["summary"] });
  }

  return (
    <div className="flex flex-wrap gap-3">
      {doPendingGoals.data.map((pendingGoal) => {
        return (
          <OutlineButton
            key={pendingGoal.id}
            disabled={
              pendingGoal.completionCount >= pendingGoal.desiredWeeklyFrequency
            }
            onClick={() => handleCompleteGoal(pendingGoal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {pendingGoal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}
