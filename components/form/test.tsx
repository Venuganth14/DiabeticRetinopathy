// // pages/index.tsx
// import { GetStaticProps } from 'next';
// import { ref, get } from 'firebase/database';
// import { database } from '../../firebase';
// interface Props {
//   data: any;
// }

// const HomePage: React.FC<Props> = ({ data }) => {
//   return (
//     <div>
//       <h1>Data from Firebase</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const snapshot = await get(ref(database, 'your/path/to/data'));
//   const data = snapshot.exists() ? snapshot.val() : null;

//   return {
//     props: {
//       data,
//     },
//     revalidate: 60, // Optional: Revalidate every 60 seconds
//   };
// };

// export default HomePage;
