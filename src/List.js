import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListUsers(data.data);
      } catch (error) {
        console.error("Error of listusers:", error);
      }
    };

    fetchUsers();
  }, []);
  console.log("listUsers", listUsers);
  return (
    <div className="user-list">
     {listUsers.map((elm) => (
          <div className="style"> key={elm.id}
            <h2>{elm.name}</h2>
            <p>{elm.email}</p>
            <p>{elm.phone}</p>
          </div>
     )) }
    </div>
  );
};

export default List;
