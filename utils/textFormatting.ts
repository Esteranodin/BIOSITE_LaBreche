/**
 * - Espaces insécables pour les guillemets, :, ;, !, ?
 * - Décodage des entités HTML
 */
export function formatText(text: string): string {
  if (!text) return "";

  let formatted = decodeHtmlEntities(text);
  formatted = applyTypography(formatted);

  return formatted;
}

/**
 * Décode les entités HTML courantes
 */
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, "\u00A0")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#171;/g, "«")
    .replace(/&#187;/g, "»")
    .replace(/&#8220;/g, "«")
    .replace(/&#8221;/g, "»")
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»");
}

/**
 * Règles typo
 */
function applyTypography(text: string): string {
  const nbsp = "\u00A0";

  return (
    text
      // Espaces insécables
      .replace(/«\s*/g, `«${nbsp}`)
      .replace(/\s*»/g, `${nbsp}»`)
      .replace(/"\s+/g, `"${nbsp}`)
      .replace(/\s+"/g, `${nbsp}"`)
      .replace(/\s*:\s*/g, `${nbsp}:`)
      .replace(/:\s*/g, ": ")
      .replace(/\s*;\s*/g, `${nbsp};`)
      .replace(/\s*!\s*/g, `${nbsp}!`)
      .replace(/\s*\?\s*/g, `${nbsp}?`)

      .replace(/\s*\./g, ".")
      .replace(/\.\s*/g, ". ")
      .replace(/\s*,/g, ",")
      .replace(/,\s*/g, ", ")

      // Espaces multiples
      .replace(/[ ]+/g, " ")
      .trim()
  );
}
