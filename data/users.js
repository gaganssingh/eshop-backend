import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin user",
        email: "test@test.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Will Smith",
        email: "will@test.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Kane Johnstone",
        email: "kane@test.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
