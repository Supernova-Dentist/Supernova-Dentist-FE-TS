import React from 'react';

const ProfileInfo = ({ profile }) => {
  return (
    <div className='profile-info'>
      <img src={profile.profile_picture_url} alt={profile.username} />
      <h2>{profile.username}</h2>
      <p>{profile.bio}</p>
      <p>{profile.followers} followers</p>
      <p>{profile.following} following</p>
      {/* Add more profile info as needed */}
    </div>
  );
};

export default ProfileInfo;
