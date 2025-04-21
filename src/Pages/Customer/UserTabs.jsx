import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import UserCashOut from "./UserCashOut";
import SendMoney from "./SendMoney";

const UserTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>User Cash Out</Tab>
          <Tab>Send Money</Tab>
        </TabList>
        <TabPanel>
          <UserCashOut />
        </TabPanel>
        <TabPanel>
          <SendMoney />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default UserTabs;
