import s from "../FriendListItem/FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  return (
    <div className={s.item}>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={s.user__name}>{friend.name}</p>
      {friend.isOnline ? (
        <p className={clsx(s.status, s.green)}>Online</p>
      ) : (
        <p className={clsx(s.status, s.red)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
