import axios from 'axios';

const profile = axios.create({
  baseURL: process.env.REACT_APP_PROFILE_API_URL,
});

interface ProfileType {
  name: string;
  created: string;
  vehicles: string[] | [];
  eye_color: string;
  birth_year: string;
}

console.log(process.env.REACT_APP_PROFILE_API_URL);

export default profile;

export async function getProfile(num: number): Promise<ProfileType> {
  console.log(process.env.REACT_APP_PROFILE_API_URL);
  const response = await profile.get(`/${num}`);
  return response.data;
}
