export function titleCase(str) {
  return str
    .replaceAll("-", " ")
    .toLowerCase()
    .replace(/\b(\w)/g, (s) => s.toUpperCase());
}
