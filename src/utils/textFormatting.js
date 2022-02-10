export function titleCase(str) {
  return str
    .replace("-", " ")
    .toLowerCase()
    .replace(/\b(\w)/g, (s) => s.toUpperCase());
}
