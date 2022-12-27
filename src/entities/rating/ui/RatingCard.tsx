import {memo, useCallback, useState} from "react"
import {useTranslation} from "react-i18next"

import type {ThemeVariant} from "@/shared/types/theme"
import {TextArea} from "@/shared/ui/input"
import {Modal} from "@/shared/ui/modals"
import {Card} from "@/shared/ui/card"
import {classnames} from "@/shared/lib/helpers/classnames"
import {Rate} from "@/shared/ui/rate"
import {Header} from "@/shared/ui/header"

import type {Rating} from "../model/types/rating"

import cls from "./RatingCard.module.sass"


interface RatingCardProps {
    rate?: Rating
    title?: string
    feedbackTitle?: string
    variant?: ThemeVariant
    onCancel?: (value: number) => void
    onSave?: (value: number, feedback?: string) => void
    className?: string
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        rate, title, feedbackTitle, variant, onCancel, onSave, className,
    } = props
    const {t} = useTranslation()

    const [ selectedStars, setSelectedStars ] = useState(rate?.value ?? 0)
    const [ feedback, setFeedback ] = useState(rate?.feedback ?? "")
    const [ headerTitle, setHeaderTitle ] = useState(title)
    const [ showModal, setShowModal ] = useState(false)


    const onSelectClick = useCallback((starsCount: number) => {
        setSelectedStars(starsCount)
        if (feedbackTitle) {
            setShowModal(true)
        } else {
            onSave?.(starsCount)
        }
        setHeaderTitle(t("спасибо за вашу оценку") || "")
    }, [ feedbackTitle, onSave, t ])

    const onSubmitHandler = useCallback(() => {
        onSave?.(selectedStars, feedback)
        setShowModal(false)
    }, [ feedback, onSave, selectedStars ])

    const onCancelHandler = useCallback(() => {
        onCancel?.(selectedStars)
        setShowModal(false)
    }, [ onCancel, selectedStars ])

    return (
        <Card
            variant={variant}
            bordered
            rounded
            className={classnames(cls, [ "rating" ], {}, [ className ])}
        >
            <Header
                variant={variant}
                title={headerTitle}
                fullWidth
                align="center"
            >
                <Rate size="large" value={selectedStars} onSelect={onSelectClick} />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {rate?.feedback && <blockquote>"{rate?.feedback}"</blockquote>}
            </Header>

            <Modal
                header={feedbackTitle}
                open={showModal}
                onSubmit={onSubmitHandler}
                onClose={onCancelHandler}
                fullWidth
                rounded
                primaryBtnLabel={t("отправить")}
                secondaryBtnLabel={t("отмена")}
            >
                <TextArea
                    value={feedback}
                    width="100%"
                    placeholder={feedbackTitle || ""}
                    onChange={setFeedback}
                />
            </Modal>
        </Card>
    )
})
