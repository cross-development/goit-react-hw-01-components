//Core
import React from "react";
//Components
import Section from "./Section/Section";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
//Data
import user from "../json/user.json";
import statisticalData from "../json/statistical-data.json";
import friends from "../json/friends.json";
import transactions from "../json/transactions.json";

const App = () => {
  return (
    <>
      <h1>React homework #1</h1>

      <hr />

      <Section title="Social-profile (hw-01-1)">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <hr />

      <Section title="Statistics (hw-01-2)">
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>

      <hr />

      <Section title="Friends List (hw-01-3)">
        <FriendList friends={friends} />
      </Section>

      <hr />

      <Section title="Transaction History (hw-01-4)">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};

export default App;
