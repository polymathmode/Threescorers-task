import React from 'react';
import './UserTable.css'; // Import the CSS file for styling

interface User {
  id: number;
  name: string;
  imageUrl: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'User 1',
    imageUrl: 'https://example.com/user1.jpg',
  },
  {
    id: 2,
    name: 'User 2',
    imageUrl: 'https://example.com/user2.jpg',
  },
  // Add more user objects as needed
];

const UserTable: React.FC = () => {
  return (
    <div className="user-table-container">
      <h2>List of Users</h2>
      <table className="user-table">
        <thead>
          
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.imageUrl}
                  alt={`${user.name}'s headshot`}
                  className="user-headshot"
                />
              </td>
              <td>{user.name}</td>
              <td>
                <button className="view-details-button">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
