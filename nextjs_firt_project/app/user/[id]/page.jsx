async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);
  console.log(user);
  return (
    <div className="bg-red-400 p-10 rounded-md">
      <img src={user.avatar} className="rounded-full m-auto my-4" alt="" />
      <h3>
        {user.id} {user.first_name} {user.last_name}
      </h3>
      <p>{user.email}</p>
    </div>
  );
}
