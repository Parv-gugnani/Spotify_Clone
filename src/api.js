const songs = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist 1",
    url: "song1.mp3",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist 2",
    url: "song2.mp3",
  },
  // Add more songs
];

export function getSongs() {
  return Promise.resolve(songs);
}
