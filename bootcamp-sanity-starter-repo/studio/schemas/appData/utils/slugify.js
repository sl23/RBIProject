export default (input) =>
  input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200);
