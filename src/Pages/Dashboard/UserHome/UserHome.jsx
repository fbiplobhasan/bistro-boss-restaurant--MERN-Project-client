import useAuth from "../../../hooks/useAuth/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>
        <span className="text-3xl">Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>
    </div>
  );
};

export default UserHome;
