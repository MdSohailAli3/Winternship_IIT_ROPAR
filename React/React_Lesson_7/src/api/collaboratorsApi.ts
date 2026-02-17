export async function fetchCollaborators() {
  return new Promise<{ id: string; name: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
        { id: '3', name: 'Charlie' },
      ]);
    }, 500);
  });
}
