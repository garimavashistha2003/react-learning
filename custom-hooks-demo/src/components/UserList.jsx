import React from "react";

function UserList({ users }) {
  return (
    <>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
            </div>
          );
        })}
    </>
  );
}

export default UserList;
