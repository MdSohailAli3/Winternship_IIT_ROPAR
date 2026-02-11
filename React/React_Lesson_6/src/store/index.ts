import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { UserSlice, createUserSlice } from './slices/userSlice';
import { FileSlice, createFileSlice } from './slices/fileSlice';
import { CommentSlice, createCommentSlice } from './slices/commentSlice';
import { NotificationSlice, createNotificationSlice } from './slices/notificationSlice';

export type DesignHubStore =
  UserSlice &
  FileSlice &
  CommentSlice &
  NotificationSlice;

export const useDesignHubStore = create<DesignHubStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...createUserSlice(set),
        ...createFileSlice(set),
        ...createCommentSlice(set, get),
        ...createNotificationSlice(set),
      }),
      { name: 'designhub-store' }
    )
  )
);
