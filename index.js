function greet(name, options = {}) {
    const { timeOfDay, format } = options;
    let greeting = 'Hello';
  
    if (timeOfDay) {
      const hour = new Date().getHours();
      if (hour < 12) {
        greeting = 'Good morning';
      } else if (hour < 18) {
        greeting = 'Good afternoon';
      } else {
        greeting = 'Good evening';
      }
    }
  
    switch (format) {
      case 'casual':
        return `${greeting}, ${name}!`;
      case 'formal':
        return `${greeting}, Mr./Ms. ${name}.`;
      default:
        return `${greeting}, ${name}!`;
    }
  }
  
  module.exports = greet;