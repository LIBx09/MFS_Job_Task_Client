const UserAgentInfo = () => {
  const users = [
    {
      id: "6802c14628026982715683e4",
      email: "nahimjiad1212@gmail.com",
      pin: "111111",
      phone: "01971321505",
    },
    {
      id: "68036ecb79e8b2d7afc6cc79",
      email: "ibrahim123@gmail.com",
      pin: "111111",
      phone: "01629559720",
    },
    {
      id: "68036f1879e8b2d7afc6cc7b",
      email: "ibrahim1234@gmail.com",
      pin: "111111",
      phone: "01629559721",
    },
  ];

  const agents = [
    {
      id: "6803a83f8dcbf07464991437",
      email: "agent01@gmail.com",
      pin: "111111",
      phone: "01629559920",
    },
    {
      id: "6803f442ee6f704612aaf651",
      email: "agent03@gmail.com",
      pin: "111111",
      phone: "01629557720",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex  mb-4">
        <h2 className="text-2xl font-bold mb-4 flex-1">Users</h2>
        <h2 className="text-2xl font-bold mb-4 flex-1">Agents</h2>
      </div>
      <div className="flex ">
        <ul className="mb-8 flex-1">
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              <strong>Email:</strong> {user.email} <br />
              <strong>Phone:</strong> {user.phone} <br />
              <strong>PIN:</strong> {user.pin} <br />
              <strong>ID:</strong> {user.id}
            </li>
          ))}
        </ul>

        <ul className="mb-8 flex-1">
          {agents.map((agent) => (
            <li key={agent.id} className="mb-2">
              <strong>Email:</strong> {agent.email} <br />
              <strong>Phone:</strong> {agent.phone} <br />
              <strong>PIN:</strong> {agent.pin} <br />
              <strong>ID:</strong> {agent.id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserAgentInfo;
