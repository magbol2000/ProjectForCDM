export interface INewsItem {
  id?: number,
  news_name: string,
  short_describtion: string,
  full_news: string,
  category: string,
  audio_name: string,
  img_name: string,
  tags: string[],
  date: Date,
  is_disable_comments?: boolean
}
