import { FormEvent, memo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import {
    Article,
    ArticleType,
    articleActions,
    articleReducer,
    fetchArticleById,
    getArticleForm,
    getArticleError,
    getArticleLoading,
} from "@/entities/article"

import DynamicModuleLoader, { ReducerList } from "@/shared/lib/components/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect"
import { Button, ButtonFeature } from "@/shared/ui/button"
import { Info, InfoStatus } from "@/shared/ui/info"
import { Input, TextArea } from "@/shared/ui/input"
import { Row } from "@/shared/ui/stack"
import { Loader } from "@/shared/ui/loader"

import { updateArticleData } from "../model/services/updateArticleData"

import cls from "./UpdateArticleForm.module.sass"

export interface UpdateArticleProps {
    articleId?: string
    onCloseHandler?: () => void
}

// let validateErrors: ValidateProfileError[]
const initialReducers: ReducerList = { article: articleReducer }

export const UpdateArticleForm = memo(({ articleId, onCloseHandler }: UpdateArticleProps) => {
    const { t } = useTranslation("articles")
    const dispatch = useAppDispatch()
    const form = useSelector(getArticleForm)
    const isLoading = useSelector(getArticleLoading)
    const error = useSelector(getArticleError)

    const [serverError, setServerError] = useState(false)

    // TODO: add validation
    // const validateErrors = useSelector(getArticleValidateErrors)

    useInitialEffect(() => {
        dispatch(fetchArticleById(articleId))
    }, !form)

    const onSaveSubmit = useCallback(
        async (e: FormEvent<Article>) => {
            e.preventDefault()
            const res = await dispatch(updateArticleData(form?.id))
            if (form && res.meta.requestStatus === "fulfilled") {
                onCloseHandler?.()
            }
            if (res.meta.requestStatus === "rejected") {
                setServerError(true)
            }
        },
        [dispatch, form, onCloseHandler],
    )

    const onCancelClick = useCallback(() => {
        dispatch(articleActions.revert())
        onCloseHandler?.()
    }, [dispatch, onCloseHandler])

    const onInputChange = useCallback(
        (val: string, name: string | undefined) => {
            if (form?.id && name) {
                dispatch(
                    articleActions.updateCopy({
                        id: form?.id,
                        [name]: val,
                    }),
                )
            }
        },
        [form, dispatch],
    )

    const onTypesChange = useCallback(
        (val: string) => {
            const typeList = val.split("\n") as ArticleType[]

            if (form?.id) {
                dispatch(
                    articleActions.updateCopy({
                        id: form?.id,
                        type: typeList || [],
                    }),
                )
            }
        },
        [form, dispatch],
    )

    if (!articleId) {
        return <Info title={t("ошибка")} subTitle={t("не указан id для статьи!")} status={InfoStatus.ERROR} />
    }

    if (error) {
        return <Info subTitle={t("ошибка загрузки статьи!")} />
    }

    if (isLoading) return <Loader />

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            <div data-testid="UpdateArticleForm" className={cls.container}>
                {serverError && (
                    <Info
                        data-testid="UpdateArticleForm.ServerError"
                        subTitle={t("ошибка при сохранении статьи!")}
                        status={InfoStatus.ERROR}
                    />
                )}

                <form onSubmit={onSaveSubmit}>
                    <Input
                        data-testid="UpdateArticleForm.Title"
                        name="title"
                        value={form?.title}
                        onChange={onInputChange}
                        placeholder={t("заголовок") || ""}
                        className="mb-1"
                    />
                    <Input
                        name="subtitle"
                        value={form?.subtitle}
                        onChange={onInputChange}
                        placeholder={t("подзаголовок") || ""}
                        className="mb-1"
                    />
                    <Input
                        name="img"
                        value={form?.img}
                        onChange={onInputChange}
                        placeholder={t("фото") || ""}
                        className="mb-1"
                    />
                    <Input
                        name="createdAt"
                        value={form?.createdAt}
                        onChange={onInputChange}
                        placeholder={t("дата создания") || ""}
                        className="mb-1"
                    />
                    <TextArea
                        value={form?.type?.join("\n")}
                        onChange={onTypesChange}
                        placeholder={t("разделы") || ""}
                        className="mb-1"
                    />

                    <Row justify="center" gap="sm" className="mt-2">
                        <Button
                            data-testid="UpdateArticleForm.SaveButton"
                            type="submit"
                            feature={ButtonFeature.BLANK}
                            bordered
                        >
                            {t("сохранить")}
                        </Button>
                        <Button
                            data-testid="UpdateArticleForm.CancelButton"
                            feature={ButtonFeature.BLANK}
                            bordered
                            onClick={onCancelClick}
                        >
                            {t("отмена")}
                        </Button>
                    </Row>
                </form>
            </div>
        </DynamicModuleLoader>
    )
})
