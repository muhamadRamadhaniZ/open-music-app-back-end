/* eslint linebreak-style: ["error", "windows"] */
const mapDBToModel = ({
  id,
  name,
  year,
  songs,
}) => ({
  id,
  name,
  year,
  songs,
});

const mapSongToModel = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});
const mapSongDetailToModel = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
});

module.exports = { mapDBToModel, mapSongToModel, mapSongDetailToModel };
