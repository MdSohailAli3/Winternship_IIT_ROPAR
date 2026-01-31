type Profile = {
    userName: string;
    bio: string | null;
    avatarUrl?: string;
}

let profile1: Profile={
        userName: "Ali",
        bio: null,
};

let profile2: Profile = {
    userName: "John",
    bio: "I am a Doctor",
    avatarUrl : "http/myurl/img1"
};

function printUser(pf: Profile): void {
  let bio = pf.bio === null ? "Bio not provided" : `Bio: ${pf.bio}`;
  let url = pf.avatarUrl ? `Avatar Url: ${pf.avatarUrl}` : "url not set";
  console.log(`${pf.userName}, ${bio}, ${url}`);
}

printUser(profile1);
printUser(profile2);