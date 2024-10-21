import s from "../Profile/Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profile__block}>
      <div className={s.img__block}>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.item__name}>Followers</span>
          <span className={s.item__value}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.item__name}>Views</span>
          <span className={s.item__value}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.item__name}>Likes</span>
          <span className={s.item__value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
