export function timeAgo(date: Date): string {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
    // Define time intervals in seconds
    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
  
    // Calculate the difference and format accordingly
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const difference = Math.floor(seconds / secondsInUnit);
      if (difference >= 1) {
        return `${difference} ${unit}${difference === 1 ? '' : 's'} ago`;
      }
    }
  
    return 'just now';
  }