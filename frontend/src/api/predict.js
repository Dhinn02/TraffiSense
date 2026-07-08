export async function uploadCsvAndPredict(file) {
  const ENDPOINTS = [
    "https://traffic-congestion-prevention.onrender.com/predict-csv",
    "http://127.0.0.1:8000/predict-csv", // fallback
  ];

  const formData = new FormData();
  formData.append("file", file);

  let lastError = null;

  for (const url of ENDPOINTS) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      clearTimeout(timeoutId);
      return await res.json(); // ✅ SUCCESS — stop here
    } catch (err) {
      clearTimeout(timeoutId);
      lastError = err;

      // If timeout on Render free tier
      if (err.name === "AbortError") {
        console.warn(`Timeout from ${url}, trying next endpoint...`);
      } else {
        console.warn(`Failed at ${url}, trying next endpoint...`);
      }

      // try next endpoint
    }
  }

  // ❌ If all endpoints fail
  throw new Error(
    "Prediction service is unavailable on both remote and local servers."
  );
}