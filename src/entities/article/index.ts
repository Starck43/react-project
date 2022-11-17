export type {Article} from "./model/types/article"
export type {ArticleSchema} from "./model/types/articleSchema"
export type {ArticleListSchema} from "./model/types/articleListSchema"
export {ArticleView, ArticleOrderType, ArticleBlockType, ArticleType} from "./model/types/article"

export {fetchArticleList} from "./model/services/fetchArticleList/fetchArticleList"
export {fetchArticleNextList} from "./model/services/fetchArticleNextList/fetchArticleNextList"
export {initArticleList} from "./model/services/initArticleList/initArticleList"
export {articleSlice, articleReducer, articleActions} from "./model/slice/article-details/articleSlice"
export {getArticleData, getArticleLoading, getArticleError} from "./model/selectors/article-details/getArticleDetails"
export {articlesReducer, articlesActions, getArticlesData} from "./model/slice/article-list/articleListSlice"
export {
    getArticlesView,
    getArticlesLoading,
    getArticlesError,
    getArticlesSearch,
    getArticlesType,
} from "./model/selectors/article-list/getArticleListData"

export {ArticleList} from "./ui/article-list/ArticleList"
export {ArticleDetailsCard} from "./ui/ArticleDetailsCard"
