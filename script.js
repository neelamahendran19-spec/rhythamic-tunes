const moodToGenre = {
  happy: 'pop',
  sad: 'acoustic',
  energetic: 'rock',
  relaxed: 'jazz'
};

function recommendSongs() {
  const mood = document.getElementById('moodSelector').value;
  const genre = moodToGenre[mood];

  document.getElementById('songList').innerHTML =
    <div>🎵 Sample songs for mood "${mood}" (genre: ${genre}) will appear here.</div>;
}