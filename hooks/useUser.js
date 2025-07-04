import { useContext } from "react";
import { UserContext } from "../context/UserContext";


// A custom react hook to provid access to the UserContext, which contains user-related state
// such as authentication status, user data, etc.
export function useUser() {
    // Access the current value of UserContext
    const context = useContext(UserContext);

    // Ensure the hook is used within a <UserProvider>, throw error if not
    if (!context) {
        throw new Error('useUser must be used inside UserProvider');
    }

    // Return the context value (e.g., { user, setUser })
    return context;
}
