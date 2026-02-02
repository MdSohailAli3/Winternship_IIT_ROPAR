type Member = {
  customerId: string;
  points: number;
};

const members = new Map<string, Member>();

// Seed data
members.set("11111111-1111-4111-8111-111111111111", {
  customerId: "11111111-1111-4111-8111-111111111111",
  points: 500,
});

members.set("22222222-2222-4222-8222-222222222222", {
  customerId: "22222222-2222-4222-8222-222222222222",
  points: 200,
});


export const db = {
  async findMember(customerId: string) {
    return members.get(customerId) || null;
  },

  async updatePoints(customerId: string, delta: number) {
    const member = members.get(customerId);
    if (!member) return;

    member.points += delta;
    members.set(customerId, member);
  },
};
