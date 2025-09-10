import React, { useState } from 'react';
import './Profile.css';

const defaultUser = {
  name: 'John Doe',
  role: 'Student',
  email: 'john.doe@krmu.edu.in',
  phone: '+91-9876543210',
  department: 'Computer Science',
  avatar: '/assets/avatar.png',
};

const Profile = () => {
  const [user, setUser] = useState(defaultUser);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    setUser(formData);
    setEditing(false);
  };

  return (
    <div className="profile page-content">
      <h1>User Profile</h1>
      <div className="profile-card">

        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />

        {!editing ? (
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Department:</strong> {user.department}</p>
            <button className="edit-btn" onClick={() => setEditing(true)}>Edit Profile</button>
          </div>
        ) : (
          <form className="profile-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <label>Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>Role
              <input type="text" name="role" value={formData.role} onChange={handleChange} />
            </label>
            <label>Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>Phone
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <label>Department
              <input type="text" name="department" value={formData.department} onChange={handleChange} />
            </label>
            <div className="profile-form-buttons">
              <button type="submit" className="save-btn">Save</button>
              <button type="button" className="cancel-btn" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default Profile;
