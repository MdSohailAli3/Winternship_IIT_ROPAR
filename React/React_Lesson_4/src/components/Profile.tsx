import useUserStore from "../store/userStore";

const Profile = () => {
    const user = useUserStore((state) => state.user);
    const clearUser = useUserStore((state) => state.clearUser);

    if (!user) return <p>Not logged in</p>;

    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={clearUser}>Logout</button>
        </div>
    );
};

export default Profile;
