enum Role {Doctor, Nurse, Admin}

interface Staff {
    id: number;
    name: string;
    role: Role;
}

let staff_members : Staff[] = [
    {id: 100, name: "Smith", role: Role.Doctor},
    {id: 101, name: "Ira", role: Role.Nurse},
    {id: 102, name: "Newton", role: Role.Admin}
];

function showSummary(staff: Staff[]):void{
    console.log("Staff Summary: ");
    staff.forEach((st) => {
        console.log(`name: ${st.name}, Role: ${Role[st.role]}`);
    });
}
showSummary(staff_members);