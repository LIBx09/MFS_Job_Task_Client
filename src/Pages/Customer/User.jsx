import UserAgentInfo from "../../component/UserAgentInfo";
import UserTabs from "./UserTabs";

const User = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6">
        Welcome to the User Panel
      </h3>
      <UserAgentInfo />
      <div className="bg-white rounded-lg shadow-md p-6">
        <UserTabs />
      </div>
    </div>
  );
};

export default User;
