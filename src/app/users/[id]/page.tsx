import PersonalForm from '@/components/PersonalForm';
import { UserDocument } from '@/models/User';

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
  return (
    <>
      User {params.id}
      <PersonalForm initialData={data.data} method="PUT" />
    </>
  );
}
