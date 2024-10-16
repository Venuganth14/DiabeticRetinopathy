// "use client"

// import React, { useEffect, useState } from 'react';
// import { fetchNgrokUrl } from '../../utils/ngrok';

// const MyComponent: React.FC = () => {
//   const [ngrokUrl, setNgrokUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const getNgrokUrl = async () => {
//       const url = await fetchNgrokUrl();
//       setNgrokUrl(url);
//     };

//     getNgrokUrl();
//   }, []);

//   return (
//     <div>
//       {ngrokUrl ? <p>ngrok URL: {ngrokUrl}</p> : <p>Loading ngrok URL...</p>}
//       {ngrokUrl && (
//         <button
//           onClick={async () => {
//             try {
//               const response = await fetch(`${ngrokUrl}/api/your-endpoint`);
//               const data = await response.json();
//               console.log(data);
//             } catch (error) {
//               console.error('Error calling API:', error);
//             }
//           }}
//         >
//           Call API
//         </button>
//       )}
//     </div>
//   );
// };

// export default MyComponent;
