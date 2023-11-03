import { User } from "../store/userStore";

export default function extractInfo(formData: FormData): User {
  const profilePicture = formData.get('profilePicture') as string;
  const fullName = formData.get('fullName') as string;
  const cellPhone = formData.get('cellPhone') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user: User = {
    profilePicture,
    fullName,
    cellPhone,
    email,
    password,
  };

  return user;
}