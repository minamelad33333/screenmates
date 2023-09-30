function formatTimeAgo(publishDate) {
  const currentDate = new Date();
  const date = new Date(publishDate);

  const timeDifference = Math.abs( currentDate - date );

  const seconds = Math.floor(timeDifference / 1000);

  if (seconds <= 0 ) {
    return "Just Now!";
  }

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minutes ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(seconds / 86400);
    return `${days} days ago`;
  }
}

export default formatTimeAgo;
