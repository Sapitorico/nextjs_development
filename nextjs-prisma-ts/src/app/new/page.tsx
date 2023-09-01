"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NewPage({ params }: { params: { id: string } }) {
  const { handleSubmit, register, setValue } = useForm();
  const route = useRouter();
  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      });
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    } else {
      await axios.post("/api/tasks", data);
    }
    route.push("/");
    route.refresh();
  });
  return (
    <section className="h-[calc(100vh-7rem)] flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="font-bold text-2xl mb-2">
          {params.id ? "Editar" : "Crear"}
        </h1>
        <label htmlFor="title" className="font-bold text-sm">
          Escribe un titulo
        </label>
        <input
          id="title"
          type="text"
          placeholder="escribe un titulo"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-q focus:ring-sky-300 focus:border-sky-300 text-black
          block mb-2 w-full"
          {...register("title")}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Escribe una descripción
        </label>
        <textarea
          id="description"
          placeholder="escribe una descripción"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm
        focus:outline-none focus:ring-q focus:ring-sky-300 focus:border-sky-300 text-black block w-full"
          {...register("description")}
        ></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-sky-300 px-3 py-2 rounded-md text-white mt-2 "
          >
            {params.id ? "Editar" : "Crear"}
          </button>
          <button
            type="button"
            className="bg-red-500 px-3 py-2 rounded-md text-white mt-2 "
            onClick={async () => {
              if (confirm("¿Estás seguro de querer eliminar?")) {
                await axios.delete(`/api/tasks/${params.id}`);
                route.push("/");
                route.refresh();
              }
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </section>
  );
}
