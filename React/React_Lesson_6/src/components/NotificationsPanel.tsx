import { useDesignHubStore } from '../store';

export function NotificationsPanel() {
  const notifications = useDesignHubStore((s) => s.notifications);
  const addNotification = useDesignHubStore((s) => s.addNotification);
  const markAsRead = useDesignHubStore((s) => s.markAsRead);
  const clearNotifications = useDesignHubStore(
    (s) => s.clearNotifications
  );

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>Unread Notifications</h3>

      <button
        onClick={() =>
          addNotification({
            id: Date.now().toString(),
            message: 'New collaboration update',
            read: false,
          })
        }
      >
        Add Notification
      </button>

      <ul>
        {notifications.filter((n) => !n.read).length === 0 && (
          <li>No unread notifications</li>
        )}

        {notifications
          .filter((n) => !n.read)
          .map((n) => (
            <li key={n.id}>
              {n.message}
              <button
                style={{ marginLeft: '0.5rem' }}
                onClick={() => markAsRead(n.id)}
              >
                Mark as read
              </button>
            </li>
          ))}
      </ul>

      <button onClick={clearNotifications}>
        Clear All
      </button>
    </div>
  );
}
