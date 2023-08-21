import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { messageArrayValidator } from "@/lib/validations/message";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    chatId: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { chatId } = params;
  const session = await getServerSession(authOptions);

  if (!session) {
    return notFound();
  }

  const { user } = session;
  const [userId1, userId2] = chatId.split("--");

  if (user.id !== userId1 && user.id !== userId2) {
    return notFound();
  }

  const chatPartnerId = user.id === userId1 ? userId2 : userId1;
  const chatPartner = (await db.get(`user:${chatPartnerId}`)) as User;

  const getChatMessage = async (chatId: string) => {
    try {
      const results: string[] = await fetchRedis(
        "zrange",
        `chat:${chatId}:messages`,
        0,
        -1
      );
      const dbMessage = results.map((result) => {
        JSON.parse(result) as Message;
      });

      const dbMessageReverse = dbMessage.reverse();
      const messages = messageArrayValidator.parse(dbMessageReverse);

      return messages;
    } catch (error) {
      notFound();
    }
  };

  const initialMessage = await getChatMessage(chatId);

  return <div>page</div>;
};

export default page;
