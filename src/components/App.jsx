import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import items from 'transactions.json';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics item="Upload stats" data={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
};
