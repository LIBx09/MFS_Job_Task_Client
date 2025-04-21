import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CashOut from "./CashOut";
import CashIn from "./CashIn";
import CashRequest from "./CashRequest";

const AgentTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>UserCashOut</Tab>
          <Tab>UserCashIn</Tab>
          <Tab>Cash Request</Tab>
          <Tab>Title 4</Tab>
        </TabList>

        <TabPanel>
          <CashOut />
        </TabPanel>
        <TabPanel>
          <CashIn />
        </TabPanel>
        <TabPanel>
          <CashRequest />
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default AgentTabs;
