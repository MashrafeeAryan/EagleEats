// stores/userHealthStore.ts

// Import the main function to create Zustand stores
import { create } from 'zustand'

// Import middleware to add persistence capability to the store
import { persist } from 'zustand/middleware'

// Import AsyncStorage, which allows us to store data on the device in React Native
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * 1. Define the shape (structure) of the state in this store.
 * This is useful for TypeScript to know what data and functions the store contains.
 */
type UserHealthStore = {
  // --- Data fields (state) ---
  userID: string
  weight_KG: string
  weight_lbs: string
  heightInches: string
  heightCM: string
  ageYears: string
  gender: string
  activityLevel: string

  // --- Updater functions (similar to setState) ---
  setUserID: (id: string) => void
  setWeight_KG: (weight: string) => void
  setWeight_lbs: (weight: string) => void
  setHeightInches: (height: string) => void
  setHeightCM: (height: string) => void
  setAgeYears: (age: string) => void
  setGender: (sex: string) => void
  setActivityLevel: (performance: string) => void
}

/**
 * 2. Create the Zustand store using the `create` function.
 * We also wrap it with the `persist` middleware so it saves data even when the app restarts.
 */
export const useUserHealthStore = create<UserHealthStore>()(
  persist(
    // (set) is a function provided by Zustand to update the store state
    (set) => ({
      // --- Initial state values ---
      userID: '',
      weight_KG: '',
      weight_lbs: '',
      heightInches: '',
      heightCM: '',
      ageYears: '',
      gender: '',
      activityLevel: '',

      // --- State updater functions (equivalent to setState in React) ---
      setUserID: (id) => set({ userID: id }),
      setWeight_KG: (weight) => set({ weight_KG: weight }),
      setWeight_lbs: (weight) => set({ weight_lbs: weight }),
      setHeightInches: (height) => set({ heightInches: height }),
      setHeightCM: (height) => set({ heightCM: height }),
      setAgeYears: (age) => set({ ageYears: age }),
      setGender: (sex) => set({ gender: sex }),
      setActivityLevel: (performance) => set({ activityLevel: performance }),
    }),

    // --- Persistence configuration ---
    {
      // The name used as the key in AsyncStorage (like localStorage)
      name: 'userHealthInfo-storage',

      // Tell Zustand to use AsyncStorage for React Native
      storage: AsyncStorage,
    }
  )
)
