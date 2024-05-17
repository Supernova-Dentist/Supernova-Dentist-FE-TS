// const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';

// // Function to fetch profile data from Instagram API
// export const fetchProfileData = async () => {
//   try {
//     const response = await fetch(`https://graph.instagram.com/me?fields=id,username,profile_picture_url,bio,followers_count,follows_count&access_token=${ACCESS_TOKEN}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch profile data');
//     }
//     const profileData = await response.json();
//     const { id, username, profile_picture_url, bio, followers_count, follows_count } = profileData;
//     return {
//       profile: {
//         id,
//         username,
//         profile_picture_url,
//         bio,
//         followers: followers_count,
//         following: follows_count
//       },
//       // You can fetch more data like posts, stories, etc. here
//     };
//   } catch (error) {
//     console.error('Error fetching profile data:', error);
//     throw error;
//   }
// };
