// Mock users database

const users = [
  { id: 1, username: 'user1', password: 'user1', role: 'user' },
  { id: 2, username: 'admin', password: 'admin', role: 'admin' },
  { id: 3, username: 'user2', password: 'user2', role: 'user' },
  { id: 4, username: 'guest', password: 'guest', role: 'guest' }
];

function findUser(username) {
  return users.find(user => user.username === username);
}

function findUserById(id) {
  return users.find(user => user.id === id);
}

module.exports = { findUser, findUserById, users };



























