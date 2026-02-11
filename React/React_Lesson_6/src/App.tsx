import { UserProfile } from './components/UserProfile';
import { FileList } from './components/FileList';
import { NotificationsPanel } from './components/NotificationsPanel';

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>DesignHub</h1>

      <UserProfile />

      <hr />

      <FileList />

      <hr />

      <NotificationsPanel />
    </div>
  );
}
