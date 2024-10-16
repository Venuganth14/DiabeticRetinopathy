// import { NextApiRequest, NextApiResponse } from 'next';
// // import { fetchNgrokUrl } from '@/utils/ngrok';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const ngrokUrl = await fetchNgrokUrl();
  
//   if (!ngrokUrl) {
//     return res.status(500).json({ error: 'Failed to fetch ngrok URL' });
//   }

//   try {
//     const response = await fetch(`${ngrokUrl}/predict`);
//     const data = await response.json();
//     return res.status(200).json({ data });
//   } catch (error) {
//     return res.status(500).json({ error: 'Failed to fetch data' });
//   }
// }
