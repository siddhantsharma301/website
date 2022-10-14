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
    'dag-bft-consensus': {
        date: new Date('2022-09-25').toDateString(),
        uri: 'clearlynotsid/DAG-Based-BFT-Consensus-310e554f99e0407d9ddbb7087a7e63f1',
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