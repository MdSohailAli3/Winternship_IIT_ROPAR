export async function fetchNotes() {
  return new Promise<{ id: string; text: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 'n1', text: 'First note' },
        { id: 'n2', text: 'Second note' },
      ]);
    }, 500);
  });
}
