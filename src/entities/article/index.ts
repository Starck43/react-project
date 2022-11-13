export type {Article, ArticleView} from "./model/types/article"
export type {ArticleSchema} from "./model/types/articleSchema"

export {articleSlice, articleReducer, articleActions} from "./model/slice/articleSlice"
export {getArticleData, getArticleLoading, getArticleError} from "./model/selectors/getArticleDetails"

export {ArticleList} from "./ui/article-list/ArticleList"
export {ArticleDetailsCard} from "./ui/ArticleDetailsCard"
