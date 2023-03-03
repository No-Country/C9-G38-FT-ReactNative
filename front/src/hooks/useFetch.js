import { useAuthStore } from '../store/authStore';
import { BASE_URL } from '../constants/endpoints';

const useFetch = () => {
  const authToken = useAuthStore((state) => state.authToken);
  //'Content-Type': 'application/json',
  const connect = async (params) => {
    const { url, data, extra } = params;

    if (extra) {
      url.path = url.path.replace(`:id`, extra);
    }

    const req = await fetch(`${BASE_URL}${url.path}`, {
      method: url.method,
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json ',
      },
      body: JSON.stringify(data),
    });
    //if (req.status === 400 || req.status === 401)
    const res = await req.json();
    console.log(res);
    if (res.status === 'error') {
    }
    return res.data;
  };

  return connect;
};
export default useFetch;
