import { Profile } from './Profile/Profile';
import user from '../jsonchik/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../jsonchik/data.json';
import { FriendsList } from './FriendsList/FriendList';
import friends from '../jsonchik/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../jsonchik/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
