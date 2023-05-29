import { ReceivedPost } from '../../types';

export const sortPostsList = (value: string, postsList: ReceivedPost[]) => {
  const clonePostsList = [...postsList];

  clonePostsList.sort((a, b) => {
    const titleA = value === 'increase' ? a.title.toLocaleLowerCase() : b.title.toLocaleLowerCase();
    const titleB = value === 'increase' ? b.title.toLocaleLowerCase() : a.title.toLocaleLowerCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });

  return clonePostsList;
};
