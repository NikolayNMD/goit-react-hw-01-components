import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <List class="friend-list">
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </List>
  );
};
