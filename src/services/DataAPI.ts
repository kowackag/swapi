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

export default profile;

export async function getProfile(num: number): Promise<ProfileType> {
  const response = await profile.get(`/${num}`);
  return response.data;
}

interface UserData {
  user_data: any;
  star_wars_data: Partial<ProfileType>[] | [];
}

const db = axios.create({
  baseURL: process.env.REACT_APP_DB_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export async function saveData(userdata: UserData): Promise<boolean> {
  try {
    const response = await db.post('', userdata);
    return response.status === 201;
  } catch (err) {
    if (err.response) {
      console.error(`CreateUser returned with status ${err.response.status}`);
      return false;
    } else if (err.request) {
      console.error('No response from the server while adding data');
    }
    throw err;
  }
}
