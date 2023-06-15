export const getTweetCreatedTime = (date: number) => {
  const totalMin = ((Date.now() / 1000 - date / 1000) / 60).toFixed(0);
  const totalHours = ((Date.now() / 1000 - date / 1000) / 3600).toFixed(0);

  let tweetCreatedTime;
  if (totalMin > '60') {
    tweetCreatedTime = `· ${totalHours}h`;
  } else {
    tweetCreatedTime = `· ${totalMin}min`;
  }
  return tweetCreatedTime;
};
