import Requester from 'libs/Requester';

export enum SharingServices {
  VK = 'vk',
}

export const sharingUrls = {
  [SharingServices.VK]: (title: string, image: string) =>
    Requester.createHref(`https://vk.com/share.php`, {
      title,
      image,
      url: 'https://sadislands.ru',
    }),
};
