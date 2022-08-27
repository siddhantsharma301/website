import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';

export interface PageInfo {
    title: string;
    cover?: string;
    coverPosition?: number;
}
  
export interface Page extends PageInfo {
    uri: string;
    date: string;
}

export const POSTS = {
    'privacy-isnt-a-right': {
        date: new Date('2022-08-09').toDateString(),
        uri: 'clearlynotsid/Privacy-isn-t-a-Right-but-it-Should-c2b2dad0f0474f2c9c48e10c17b99e20',
      },
};

export const getPageInfo = (page: ExtendedRecordMap): PageInfo => {
    const info: PageInfo = {
      title: getPageTitle(page),
    };
  
    const block = Object.values(page.block)[0].value;
    if (block.type === 'page' && block.format?.page_cover) {
      info.coverPosition = block.format.page_cover_position;
      info.cover =
        'https://www.notion.so/image/' +
        encodeURIComponent(block.format.page_cover) +
        '?table=block&id=' +
        block.id;
    }
  
    return info;
};