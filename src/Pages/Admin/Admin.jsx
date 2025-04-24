import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AgentReq from "./AgentReq";
import AllUsersManage from "./AllUsersManage";
import AllTransactions from "./AllTransactions";
import ActiveAgentList from "./ActiveAgentList";
import AgentBalanceReq from "./AgentBalanceReq";
import AgentWithdrawalReq from "./AgentWithdrawalReq";

const Admin = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Admin Panel
      </h2>

      <div className="bg-base-100 shadow-md rounded-lg p-4">
        <Tabs>
          <TabList className="flex flex-wrap justify-center gap-2 mb-4 border-b border-gray-300">
            <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary transition duration-200 font-medium react-tabs__tab">
              Pending Agent Request
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary transition duration-200 font-medium react-tabs__tab">
              Active Agents
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary transition duration-200 font-medium react-tabs__tab">
              All Transactions
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary transition duration-200 font-medium react-tabs__tab">
              All Users
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary transition duration-200 font-medium react-tabs__tab">
              Balance Req
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-primary transition duration-200 font-medium react-tabs__tab">
              Withdraw Req
            </Tab>
          </TabList>

          <TabPanel>
            <AgentReq />
          </TabPanel>
          <TabPanel>
            <ActiveAgentList />
          </TabPanel>
          <TabPanel>
            <AllTransactions />
          </TabPanel>
          <TabPanel>
            <AllUsersManage />
          </TabPanel>
          <TabPanel>
            <AgentBalanceReq />
          </TabPanel>
          <TabPanel>
            <AgentWithdrawalReq />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
