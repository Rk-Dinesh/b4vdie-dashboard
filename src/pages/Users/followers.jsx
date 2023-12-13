import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../../host';

const FollowUser = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleFollow = async () => {
    try {
      const response = await axios.put(`${API}/follow`, { userid: userId }, { headers: { Authorization: `Bearer ${token}` } });
      const { updatedCurrentUser, updatedFollowedUser } = response.data;
      // Handle success - Maybe update UI or state
      setMessage('Successfully followed user');
    } catch (error) {
      // Handle error - Display error message
      setMessage('Error: Unable to follow user');
    }
  };

  return (
    <div>
      <h2>Follow User</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFollow}>Follow</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FollowUser;
