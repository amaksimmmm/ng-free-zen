import { TitleData } from '../../ui/Title/types';
import { LinkData } from '../../ui/Link/types';
import { ImageData } from '../../ui/Image/types';

export type DownloadData = {
  title: TitleData;
  texts: number[];
  links: LinkData[];
  image: ImageData;
};
