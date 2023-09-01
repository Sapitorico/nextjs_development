import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard/TaskCard";
// import axios from "axios";

async function loadTasks() {
  return await prisma.task.findMany();
  // const res = await axios.get("http://localhost:3000/api/tasks");
}

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const task = await loadTasks();
  return (
    <div className="grid grid-cols-3 gap-3 mt-5">
      {task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
