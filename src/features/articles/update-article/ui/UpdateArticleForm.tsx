import {
    Article,
    articleActions,
    articleReducer,
    ArticleType,
    fetchArticleById,
    getArticleCopy,
    getArticleError,
    getArticleLoading,
} from "entities/article"
import React, {FormEvent, memo, useCallback, useState} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoAlign, InfoStatus} from "shared/ui/info/Info"
import Input, {TextArea} from "shared/ui/input/Input"
import {PageLoader} from "widgets/page-loader/PageLoader"

import {updateArticleData} from "../model/services/updateArticleData"

// import cls from "./UpdateArticle.module.sass"

export interface UpdateArticleProps {
    articleId: string
    onSuccessHandler?: () => void
}

// let validateErrors: ValidateProfileError[]
const initialReducers: ReducerList = {article: articleReducer}

export const UpdateArticleForm = memo(({articleId, onSuccessHandler}: UpdateArticleProps) => {
    const {t} = useTranslation("articles")
    const dispatch = useAppDispatch()
    const copy = useSelector(getArticleCopy)
    const isLoading = useSelector(getArticleLoading)
    const error = useSelector(getArticleError)

    const [ serverError, setServerError ] = useState(false)

    // TODO: add validation
    // const validateErrors = useSelector(getArticleValidateErrors)

    useInitialEffect(() => {
        dispatch(fetchArticleById(articleId))
    }, !copy)

    const onSaveSubmit = useCallback(async (e: FormEvent<Article>) => {
        e.preventDefault()
        const res = await dispatch(updateArticleData(articleId))
        if (copy && res.meta.requestStatus === "fulfilled") {
            dispatch(articleActions.updateData(copy))
            onSuccessHandler?.()
        }
        if (res.meta.requestStatus === "rejected") {
            setServerError(true)
        }
    }, [ dispatch, articleId, copy, onSuccessHandler ])

    const onCancelClick = useCallback(() => {
        onSuccessHandler?.()
        dispatch(articleActions.revert())
    }, [ dispatch, onSuccessHandler ])

    const onInputChange = useCallback((val, name) => {
        dispatch(articleActions.updateCopy({
            id: articleId,
            [name]: val,
        }))
    }, [ articleId, dispatch ])

    const onTypesChange = useCallback((val) => {
        const typeList = val.split("\n") as ArticleType[]
        dispatch(articleActions.updateCopy({
            id: articleId,
            type: typeList || [],
        }))
    }, [ articleId, dispatch ])

    if (error) {
        return <Info title={t("ошибка загрузки статьи!")} align={InfoAlign.CENTER} />
    }

    if (isLoading) return <PageLoader />

    console.log(serverError)
    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            {serverError && (
            <Info status={InfoStatus.ERROR} title={t("ошибка при сохранении статьи!")} align={InfoAlign.CENTER} />
            )}

            <form onSubmit={onSaveSubmit}>
                <Input
                    name="title"
                    value={copy?.title}
                    onChange={onInputChange}
                    placeholder={t("заголовок")}
                    className="mb-1"
                />
                <Input
                    name="subtitle"
                    value={copy?.subtitle}
                    onChange={onInputChange}
                    placeholder={t("подзаголовок")}
                    className="mb-1"
                />
                <Input
                    name="img"
                    value={copy?.img}
                    onChange={onInputChange}
                    placeholder={t("фото")}
                    className="mb-1"
                />
                <Input
                    name="createdAt"
                    value={copy?.createdAt}
                    onChange={onInputChange}
                    placeholder={t("дата создания")}
                    className="mb-1"
                />
                <TextArea
                    value={copy?.type?.join("\n")}
                    onChange={onTypesChange}
                    placeholder={t("разделы")}
                    className="mb-1"
                />

                <div className="centered g-1 mt-2">
                    <Button
                        type="submit"
                        bordered
                        feature={ButtonFeature.BLANK}
                    >
                        {t("сохранить")}
                    </Button>
                    <Button bordered feature={ButtonFeature.BLANK} onClick={onCancelClick}>{t("отмена")}</Button>
                </div>
            </form>
        </DynamicModuleLoader>
    )
})
