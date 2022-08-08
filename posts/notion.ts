import { ExtendedRecordMap } from 'notion-types/src/maps';
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
    'stablecoin-wars': {
      date: new Date('2021-06-25').toDateString(),
      uri: 'clearlynotsid/Stablecoin-Wars-c7765e755fe3405a818c83911a224284',
    },
    'aave-and-v3': {
        date: new Date('2021-06-28').toDateString(),
        uri: 'clearlynotsid/AAVE-and-v3-5375b5b3f4704a45b75112a941363bbc'
    }
    // 'go-dokku-deployment': {
    //   date: new Date('2021-06-28').toDateString(),
    //   uri: 'shblog/Deploying-a-Go-App-with-Dokku-c504be4c35b34d20918a5cf23c0c5588',
    // },
    // 'styled-system': {
    //   date: new Date('2021-07-06').toDateString(),
    //   uri: 'shblog/Rapid-UI-development-with-styled-system-e1ce2f8a2e64485491b49e4e3a6a8f96',
    // },
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