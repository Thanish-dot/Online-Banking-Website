import React, { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Mohammed Tanish",
    email: "tanish@example.com",
    phone: "9876543210",
    address: "Chennai, India",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      {editing ? (
        <div>
          <form>
            <label>Name</label>
            <input name="name" value={profile.name} onChange={handleChange} />
            <label>Email</label>
            <input name="email" value={profile.email} onChange={handleChange} />
            <label>Phone</label>
            <input name="phone" value={profile.phone} onChange={handleChange} />
            <label>Address</label>
            <input name="address" value={profile.address} onChange={handleChange} />
            <button type="button" className="btn btn-primary" onClick={() => setEditing(false)}>Save Profile</button>
          </form>
        </div>
      ) : (
        <div>
          <p><strong>👤 Name:</strong> {profile.name}</p>
          <p><strong>📧 Email:</strong> {profile.email}</p>
          <p><strong>📞 Phone:</strong> {profile.phone}</p>
          <p><strong>🏠 Address:</strong> {profile.address}</p>
          <button className="btn btn-secondary" onClick={() => setEditing(true)} style={{ marginTop: '1rem' }}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default Profile;