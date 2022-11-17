const { sqlDataSource } = require("./data-source");

const createUser = async (name, phone, email, password) => {
  try {
    await sqlDataSource.query(
      `INSERT INTO users(
        name,
        phone,
        email,
        password) 
      VALUES (?, ?, ?, ?)
          `,
      [name, phone, email, password]
    );
  } catch (err) {
    throw new Error("INVALID DATA INPUT");
  }
};

const getUserByEmail = async (email) => {
  const [user] = await sqlDataSource.query(
    `
        SELECT *
        FROM users
        WHERE users.email = ?
        `,
    [email]
  );
  return user;
};

module.exports = { getUserByEmail, createUser };
