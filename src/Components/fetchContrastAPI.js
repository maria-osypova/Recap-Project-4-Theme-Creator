export default async function fetchContrastAPI(hex, contrastText) {
  const response = await fetch(
    "https://www.aremycolorsaccessible.com/api/are-they",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ colors: [hex, contrastText] }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to check contrast");
  }
  const result = await response.json();
  const contrastCheck = result.overall;
  return contrastCheck;
}
