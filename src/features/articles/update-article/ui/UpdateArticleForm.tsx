import {FormEvent, memo, useCallback, useState} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

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


import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoAlign, InfoStatus} from "shared/ui/info/Info"
import Input, {TextArea} from "shared/ui/input/Input"
import {Row} from "shared/ui/stack"
import {PageLoader} from "widgets/page-loader/PageLoader"

import {updateArticleData} from "../model/services/updateArticleData"

import cls from "./UpdateArticleForm.module.sass"


export interface UpdateArticleProps {
    articleId: string
    onCloseHandler?: () => void
}

// let validateErrors: ValidateProfileError[]
const initialReducers: ReducerList = {article: articleReducer}

export const UpdateArticleForm = memo(({articleId, onCloseHandler}: UpdateArticleProps) => {
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
            onCloseHandler?.()
        }
        if (res.meta.requestStatus === "rejected") {
            setServerError(true)
        }
    }, [ dispatch, articleId, copy, onCloseHandler ])

    const onCancelClick = useCallback(() => {
        dispatch(articleActions.revert())
        onCloseHandler?.()
    }, [ dispatch, onCloseHandler ])

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

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            <div className={cls.container}>

                {serverError && (
                    <Info
                        status={InfoStatus.ERROR}
                        subtitle={t("ошибка при сохранении статьи!")}
                        align={InfoAlign.CENTER}
                    />
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

                    <Row justify="center" gap="sm" className="mt-2">
                        <Button
                            type="submit"
                            bordered
                            feature={ButtonFeature.BLANK}
                        >
                            {t("сохранить")}
                        </Button>
                        <Button bordered feature={ButtonFeature.BLANK} onClick={onCancelClick}>{t("отмена")}</Button>
                    </Row>
                </form>
            </div>
        </DynamicModuleLoader>
    )
})
