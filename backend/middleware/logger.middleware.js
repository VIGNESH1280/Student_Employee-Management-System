const logger = (req, res, next) => {
  try {
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Timestamp: ${new Date().toLocaleString()}`);
    next();
  } catch (error) {
    console.log(error);
  }
};
export default logger;
