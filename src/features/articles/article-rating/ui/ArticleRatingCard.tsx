import {memo, useCallback} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getUser} from "@/entities/user"
import {RatingCard} from "@/entities/rating"

import {updateArticleRating, useArticleRating} from "../api"

import {classnames} from "@/shared/lib/helpers/classnames"

import cls from "./ArticleRatingCard.module.sass"


export interface ArticleRatingProps {
    articleId: string
    className?: string
}

const ArticleRatingCard = ({articleId, className}: ArticleRatingProps) => {
    const {t} = useTranslation("articles")
    const user = useSelector(getUser)
    const {data} = useArticleRating({
        articleId,
        userId: user?.id ?? "",
    })
    const rate = data?.[0]

    const [ rateMutation ] = updateArticleRating()

    const onRateHandler = useCallback((value: number, feedback?: string) => {
        try {
            rateMutation({
                userId: user?.id,
                articleId,
                value,
                feedback,
            })
            // eslint-disable-next-line no-console
        } catch (e) { console.log(e) }
    }, [ articleId, rateMutation, user?.id ])

    const onSaveHandler = useCallback((value: number, feedback?: string) => {
        onRateHandler(value, feedback)
    }, [ onRateHandler ])

    const onCancelHandler = useCallback((value: number) => {
        onRateHandler(value)
    }, [ onRateHandler ])

    if (data) {
        return (
            <section
                className={classnames(cls, [ "article__rating" ], {}, [ "my-2", className ])}
            >
                <RatingCard
                    rate={rate}
                    variant="secondary"
                    onSave={onSaveHandler}
                    onCancel={onCancelHandler}
                    title={(rate ? t("ваша оценка") : t("оценить статью")) || undefined}
                    feedbackTitle={t("оставьте свой отзыв") || undefined}
                />
            </section>
        )
    }

    return null
}

export default memo(ArticleRatingCard)
