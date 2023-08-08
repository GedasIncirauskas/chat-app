import { authOptions } from "@/lib/auth";
import { addUserValidation } from "@/lib/validations/add-user";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email: emailToAdd } = addUserValidation.parse(body.email);
    const response = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/get/user:email${emailToAdd}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        },
        cache: "no-store",
      }
    );
    const { result } = (await response.json()) as { result: string | null };

    if (!result) {
      return new Response("This user not exist", { status: 400 });
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (result === session.user.id) {
      return new Response("You cannot add yourself", { status: 400 });
    }
  } catch (error) {}
}
