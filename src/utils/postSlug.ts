/**
 * Convert a Markdown entry id into a stable decimal permalink.
 *
 * FNV-1a is deterministic, dependency-free and works on UTF-8 title bytes,
 * so source files can keep readable Chinese names without exposing encoded
 * Chinese characters in article URLs.
 */
export function getPostSlug(id: string): string {
  const normalized = id
    .replace(/\.(md|mdx)$/iu, "")
    .normalize("NFKC")
    .trim()
    .toLocaleLowerCase("zh-CN");
  const bytes = new TextEncoder().encode(normalized);
  let hash = 0x811c9dc5;

  for (const byte of bytes) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193);
  }

  return (hash >>> 0).toString(10);
}
