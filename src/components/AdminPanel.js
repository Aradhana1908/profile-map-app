import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: ''
  });

  const handleInputChange = (e) => {
    setNewProfile({
      ...newProfile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({ name: '', photo: '', description: '', address: '' });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newProfile.name} onChange={handleInputChange} placeholder="Name" />
        <input name="photo" value={newProfile.photo} onChange={handleInputChange} placeholder="Photo URL" />
        <input name="description" value={newProfile.description} onChange={handleInputChange} placeholder="Description" />
        <input name="address" value={newProfile.address} onChange={handleInputChange} placeholder="Address" />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AdminPanel;