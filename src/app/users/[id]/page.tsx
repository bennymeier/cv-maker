import { UserDocument } from '@/models/User';
import { Box } from '@chakra-ui/react';

type Props = {
  params: {
    id: string;
    user: UserDocument;
  };
};
const getUserById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function Page({ params }: Props) {
  const { id } = params;
  const data = await getUserById(id);
  console.log(data);
  return (
    <>
      User {params.id}
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}
