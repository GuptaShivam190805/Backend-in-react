export async function fetchAvailablePlaces() {
  try {
    const response = await fetch("http://localhost:3000/places");

    if (!response.ok) {
      throw new Error("Failed to fetch places");
    }

    const resData = await response.json();

    if (!resData.places) {
      throw new Error("Response data does not contain 'places'");
    }

    return resData.places;
  } catch (error) {
    console.error("Error fetching places:", error.message);
    throw error; // propagate the error to the calling function
  }
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update places");
  }

  const resData = await response.json();
  return resData.message;
}
