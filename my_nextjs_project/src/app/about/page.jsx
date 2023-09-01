"use client";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "about",
};

export default function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <div>About</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus
        pariatur nobis tempore enim natus alias voluptate ducimus inventore
        omnis, autem nemo iste earum, asperiores distinctio repellat corrupti ex
        debitis sunt nam reiciendis voluptatibus nulla. Facere accusantium,
        doloribus sapiente inventore, ipsa aut culpa cum sit harum, laudantium
        perferendis! Enim, inventore, tempora ipsa deleniti minima sequi
        obcaecati libero fugit illum nobis rerum perspiciatis asperiores
        laudantium? Laudantium, consequatur temporibus voluptas illo,
        perferendis, ut corporis rem velit eligendi ullam esse at exercitationem
        consequuntur voluptatibus. Rem assumenda impedit maxime esse vel
        perspiciatis. Molestiae quia quasi quis explicabo, corrupti optio neque
        non culpa totam nesciunt!
      </p>
      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert("click");
          router.push("/");
        }}
      >
        click
      </button>
    </section>
  );
}
