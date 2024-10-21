import Profile from "../Profile/Profile";
import userData from "../../json/userData.json";
import friends from "../../json/friends.json";
import transactions from "../../json/transactions.json";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Section from "../Section/Section";
import Container from "../Container/Container";

const App = () => {
  return (
    <>
      <Section>
        <Container>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
          <FriendList friends={friends} />
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </>
  );
};

export default App;
