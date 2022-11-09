import {memo} from "react"
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {useTranslation} from "react-i18next"

import {ArticleDetailsCard} from "entities/article"
import {
    CommentList, commentsReducer, fetchCommentsData, getCommentsData, getCommentsError, getCommentsLoading,
} from "entities/comment"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import {Info, InfoAlign} from "shared/ui/info/Info"
import Header, {HeaderAlign} from "shared/ui/header/Header"


function ArticleDetailsPage() {
    const {t} = useTranslation("articles")
    const {id} = useParams<{ id: string }>()
    const comments = useSelector(getCommentsData.selectAll)
    const isLoading = useSelector(getCommentsLoading)
    const error = useSelector(getCommentsError)
    const dispatch = useAppDispatch()

    useInitialEffect(() => dispatch(fetchCommentsData(id)))

    const initialReducers: ReducerList = {profile: commentsReducer}

    if (!id) {
        return <Info title={t("статья не найдена!")} align={InfoAlign.CENTER} />
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className="content">
                <div className="container">
                    <Header title={t("article")} shadowed align={HeaderAlign.CENTER} />
                    <ArticleDetailsCard id={id} />
                    <Header title={t("комментарии")} shadowed className="mt-2" />
                    <CommentList
                        isLoading={isLoading}
                        error={error}
                        comments={comments}
                    />
                </div>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
