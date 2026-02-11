import useNotificationStore from "../store/notificationStore";

const NotificationList = () => {
    const notifications = useNotificationStore(
        (state) => state.notifications
    );
    const addNotification = useNotificationStore(
        (state) => state.addNotification
    );
    const markAsRead = useNotificationStore(
        (state) => state.markAsRead
    );
    const clearNotifications = useNotificationStore(
        (state) => state.clearNotifications
    );

    const unreadNotifications = notifications.filter((n) => !n.read);

    return (
        <div>
            <h3>Unread Notifications</h3>

            {/* Test button to verify store */}
            <button
                onClick={() =>
                    addNotification("Test notification", "success")
                }
            >
                Add Test Notification
            </button>

            {unreadNotifications.length === 0 && (
                <p>No new notifications</p>
            )}

            <ul>
                {unreadNotifications.map((n) => (
                    <li key={n.id}>
                        <strong>[{n.type}]</strong> {n.message}
                        <button onClick={() => markAsRead(n.id)}>
                            Mark as read
                        </button>
                    </li>
                ))}
            </ul>

            {notifications.length > 0 && (
                <button onClick={clearNotifications}>
                    Clear All
                </button>
            )}
        </div>
    );
};

export default NotificationList;
