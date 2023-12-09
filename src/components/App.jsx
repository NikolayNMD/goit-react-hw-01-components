import { Profile } from './Profile/Profile';
import user from '../jsonchik/user.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};
