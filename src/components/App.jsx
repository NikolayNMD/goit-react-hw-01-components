import { Profile } from './Profile/Profile';
import user from '../jsonchik/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../jsonchik/data.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
