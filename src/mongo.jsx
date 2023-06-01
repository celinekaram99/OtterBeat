// import express from 'express';
// import { json } from 'body-parser';
// import { connect, Schema, model } from 'mongoose';

// // Connect to MongoDB
// // eslint-disable-next-line no-undef
// connect('mongodb+srv://'+process.env.USERNAME+':'+process.env.PASSWORD+'@cluster0.7z6ukik.mongodb.net/OtterBeat', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Failed to connect to MongoDB', err));

// // Define schema for Song
// const songSchema = new Schema({
//   artist_name: String,
//   song_title: String,
//   duration: Number,
//   release_year: Number,
// });

// // Create Song model
// const Song = model('Song', songSchema);

// // Create express app
// const app = express();
// app.use(json());

// // Middleware to check if the user is premium
// app.use((req, res, next) => {
//   const username = req.query.username || req.body.username;
//   // Check if the user is premium in OtterBeat's users table (you need to implement this logic)
//   const isPremium = checkIfUserIsPremium(username);
//   req.isPremium = isPremium;
//   next();
// });

// // Get all songs by artist
// app.get('/songs', (req, res) => {
//   const artistName = req.query.artist_name;

//   // Partial and case-insensitive search
//   const query = { artist_name: { $regex: new RegExp(artistName, 'i') } };

//   Song.find(query)
//     .select('id song_title duration release_year')
//     .then((songs) => res.json(songs))
//     .catch((err) => res.status(500).json({ error: 'An error occurred' }));
// });

// // Add a song to favorites list
// app.post('/favorites', (req, res) => {
//   const songId = req.body.song_id;
//   const username = req.body.username;

//   // Check if the user exceeded the favorites limit for standard users
//   if (!req.isPremium) {
//     // You can adjust the limit as required
//     const favoritesLimit = 20;
//     const userFavoritesCount = getUserFavoritesCount(username);

//     if (userFavoritesCount >= favoritesLimit) {
//       return res
//         .status(400)
//         .json({ error: 'Favorites limit exceeded for standard user' });
//     }
//   }

//   // Save the song to the user's favorites list (you need to implement this logic)
//   saveSongToFavorites(username, songId);

//   res.status(201).json({ message: 'Song added to favorites' });
// });

// // Get user's favorites list
// app.get('/favorites', (req, res) => {
//   const username = req.query.username;

//   // Get the user's favorites list (you need to implement this logic)
//   const favoritesList = getUserFavoritesList(username);

//   res.json(favoritesList);
// });

// // Start the server
// app.listen(3000, () => console.log('Server started on port 3000'));

// // Helper functions (replace with your own implementation)

// function checkIfUserIsPremium(username) {
//   // Check if the user is premium in OtterBeat's users table
//   // Replace this with your own logic to check user premium status
//   // Return true if the user is premium, false otherwise
// }

// function getUserFavoritesCount(username) {
//   // Get the count of user's favorites from your database
//   // Replace this with your own logic to retrieve user favorites count
//   // Return the count of user's favorites
// }
// function saveSongToFavorites(username, songId) {
//     // Save the song to the user's favorites in your database
//     // Replace this with your own logic to save the song to the user's favorites
//   }
  
//   function getUserFavoritesList(username) {
//     // Get the user's favorites list from your database
//     // Replace this with your own logic to retrieve the user's favorites list
//     // Return the user's favorites list
//   }