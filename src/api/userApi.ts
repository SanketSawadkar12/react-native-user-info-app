export type User = {
  id: string;
  name: string;
  address: string;
  dob: string;
  mobile: string;
  skype: string;
  email: string;
};

export const fetchUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const Users: User[] = [
        {
          id: "1",
          name: "Sanket",
          address: "Bhandup east, Mumbai",
          dob: "05-10-2001",
          mobile: "+91 8949309994",
          skype: "sanket.sawadkar",
          email: "sanketsawadkar@gmail.com",
        },
        {
          id: "2",
          name: "Rahul",
          address: "Andheri, Mumbai",
          dob: "20-01-2004",
          mobile: "+91 749893999",
          skype: "rahul.rane",
          email: "rahulrane@gmail.com",
        },
        {
          id: "3",
          name: "Suraj",
          address: "Mulund west, Mumbai",
          dob: "06-11-1999",
          mobile: "+91 777789393",
          skype: "suraj.pandey",
          email: "surajpandey@gmail.com",
        },
      ];
      resolve(Users);
    }, 1000);
  });
};
