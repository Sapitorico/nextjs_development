import { NextResponse } from "next/server";

console.log(process.env.TOKEN);

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const { sapo, ricolin } = await request.json();
  console.log(sapo, ricolin);
  return NextResponse.json({
    message: "creando datos!",
  });
}

export function PUT(request) {
  return NextResponse.json({
    message: "actualizando datos!",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "eliminando datos!",
  });
}
