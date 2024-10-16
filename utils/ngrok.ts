// import { ref, get } from 'firebase/database'; // Correct import for `ref` and `get`
// import { database } from '../firebase'; // Import the `database` instance from your Firebase config

// export const fetchNgrokUrl = async (): Promise<string | null> => {
//   try {
//     const ngrokRef = ref(database, 'ngrokUrl'); // Adjust this path based on your Firebase structure
//     const snapshot = await get(ngrokRef);
//     if (snapshot.exists()) {
//       return snapshot.val(); // Return the value stored at 'ngrokUrl'
//     }
//     return null;
//   } catch (error) {
//     console.error('Error fetching ngrok URL:', error);
//     return null;
//   }
// };
