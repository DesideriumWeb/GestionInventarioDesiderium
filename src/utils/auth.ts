import {jwtDecode} from "jwt-decode"; // Import the jwt-decode function
import nookies from "nookies"; // For cookie handling

interface DecodedToken {
  exp: number; // Expiration time in seconds
}

export const checkSession = (): boolean => {
  debugger
  const cookies = nookies.get(); // Get all cookies
  const token = cookies.token; // Retrieve the token cookie

  console.log("Token from cookies:", token); // Debugging log

  if (!token) {
    return false; // No token, session not active
  }

  try {
    const decodedToken: DecodedToken = jwtDecode(token); // Decode the token
    const currentTime = Date.now() / 1000; // Current time in seconds

    // Check if the token has expired
    if (decodedToken.exp < currentTime) {
      nookies.set(null, "token", "", {
        path: "/",
        maxAge: 0, // Remove the expired token
        sameSite: "strict",
      });
      return false; // Token expired
    }

    return true; // Token is valid
  } catch (error) {
    console.error("Error decoding the token:", error);
    return false; // Token is invalid
  }
};
