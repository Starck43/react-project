import React, {memo, useCallback, useState} from "react"
import {useTranslation} from "react-i18next"

import {Rating} from "@/entities/rating"

import {TextArea} from "@/shared/ui/input/Input"
import {Modal} from "@/shared/ui/modals"
import {Card} from "@/shared/ui/card/Card"
import {classnames} from "@/shared/lib/helpers/classnames"
import {Rate} from "@/shared/ui/rate/Rate"
import Header from "@/shared/ui/header/Header"

import cls from "./RatingCard.module.sass"


interface RatingCardProps {
    rate?: Rating
    title?: string
    feedbackTitle?: string
    onCancel?: (value: number) => void
    onSave?: (value: number, feedback?: string) => void
    className?: string
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        rate, title, feedbackTitle, onCancel, onSave, className,
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
            variant="secondary"
            bordered
            rounded
            className={classnames(cls, [ "rating" ], {}, [ className ])}
        >
            <Header
                title={headerTitle}
                fullWidth
                align="center"
            >
                <Rate value={selectedStars} onSelect={onSelectClick} />
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
