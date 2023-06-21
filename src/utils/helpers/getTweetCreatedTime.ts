export const getTweetCreatedTime = (date: number) => {
  const totalMinutes = ((Date.now() / 1000 - date / 1000) / 60).toFixed(0);
  const totalHours = ((Date.now() / 1000 - date / 1000) / 3600).toFixed(0);

  let tweetCreatedTime;
  if (totalMinutes > '60') {
    tweetCreatedTime = `· ${totalHours}h`;
  } else {
    tweetCreatedTime = `· ${totalMinutes}min`;
  }
  return tweetCreatedTime;
};
