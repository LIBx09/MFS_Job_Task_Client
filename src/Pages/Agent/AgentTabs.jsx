import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import CashIn from "./CashIn";
import CashRequest from "./CashRequest";
import WithDrawal from "./WithDrawal";

const AgentTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>UserCashIn</Tab>
          <Tab>Cash Request</Tab>
          <Tab>WithDrawal Req</Tab>
        </TabList>

        <TabPanel>
          <CashIn />
        </TabPanel>
        <TabPanel>
          <CashRequest />
        </TabPanel>
        <TabPanel>
          <WithDrawal />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default AgentTabs;
