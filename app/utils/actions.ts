'use server';

import db from '@/app/utils/db';

export const fetchAllProjects  = async ({ search = '' }: { search: string }) => {
  return db.projectItem.findMany({
    where: {
      OR: [
        { url: { contains: search, mode: 'insensitive' } }
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};


// const renderError = (error: unknown): { message: string } => {
//   console.log(error);
//   return {
//     message: error instanceof Error ? error.message : 'An error occurred',
//   };
// };