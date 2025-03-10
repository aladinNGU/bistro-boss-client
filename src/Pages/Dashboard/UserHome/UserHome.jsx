import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();
    return (
      <div>
        <h2 className="text-3xl">
          Hi, Welcome
          {user?.displayName ? (
            <span className="text-green-600"> {user.displayName}</span>
          ) : (
            "Back"
          )}
        </h2>
      </div>
    );
};

export default UserHome;