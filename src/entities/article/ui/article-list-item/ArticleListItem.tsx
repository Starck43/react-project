import {memo, useMemo, CSSProperties, HTMLAttributeAnchorTarget} from "react"
import {useTranslation} from "react-i18next"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {classnames} from "shared/lib/helpers/classnames"
import {Avatar} from "shared/ui/avatar/Avatar"
import {Button, ButtonFeature, ButtonSize} from "shared/ui/button/Button"
import {Card} from "shared/ui/card/Card"
import Header, {TitleType} from "shared/ui/header/Header"
import {Flex, Row} from "shared/ui/stack"
import EyeIcon from "shared/assets/icons/eye-20-20.svg"

import {Article, ArticleBlockType, ArticleTextBlock, ArticleView} from "../../model/types/article"
import {ArticleText} from "../article-text/ArticleText"

import cls from "./ArticleListItem.module.sass"


interface ArticleListItemProps {
    article: Article
    view: ArticleView
    shadowed?: boolean
    target?: HTMLAttributeAnchorTarget
    className?: string
    style?: CSSProperties
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        article, view, shadowed = false, target, className, style,
    } = props
    const {t} = useTranslation("articles")
    // const [ isHover, bindHover ] = useHover()

    const dateBlock = useMemo(() => (
        <span className={cls.created__date}>{article.createdAt}</span>
    ), [ article.createdAt ])

    const typesBlock = useMemo(() => (
        <span className={cls.types}>{article.type?.join(", ")}</span>
    ), [ article.type ])

    const viewsBlock = useMemo(() => (
        <>
            <span className={cls.views}>{article.views}</span>
            <EyeIcon className={cls.views__icon} />
        </>
    ), [ article.views ])

    const imageBlock = useMemo(() => (
        <img src={article.img} alt={article.title} className={cls.image} />
    ), [ article.img, article.title ])

    const textBlock = useMemo(() => {
        const text = article.blocks?.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
        return (text) ? <ArticleText block={text} className={cls.text} /> : null
    }, [ article.blocks ])

    const renderArticleItem = useMemo(
        () => (view === ArticleView.TILE
                ? (
                    <>
                        <div className={classnames(cls, [ "image__wrapper" ])}>
                            {imageBlock}
                            {dateBlock}
                        </div>
                        <Header
                            title={article.title}
                            titleType={TitleType.H5}
                            className={cls.header}
                        >
                            <Row align="center" fullWidth className={cls.meta}>
                                {typesBlock}
                                {viewsBlock}
                            </Row>
                        </Header>
                    </>
                )
                : (
                    <>
                        <Header
                            title={article.title}
                            titleType={TitleType.H4}
                            inlined
                            className={cls.header}
                        >
                            {article?.user?.avatar && (
                                <Avatar
                                    src={article.user.avatar}
                                    title={article.user.username}
                                    rounded
                                    size="xs"
                                    inlined
                                    className={cls.avatar}
                                />
                            )}
                            {dateBlock}
                            {typesBlock}
                        </Header>

                        <Row justify="between" fullWidth className={classnames(cls, [ "body" ], {}, [ "my-2" ])}>
                            {imageBlock}
                            {textBlock}
                        </Row>

                        <Row justify="between" align="center" fullWidth className={cls.footer}>
                            <Button
                                feature={ButtonFeature.BLANK}
                                size={ButtonSize.NORMAL}
                                bordered
                                rounded
                                href={RoutesPath.article_details + article.id}
                                className={cls.read_more__button}
                            >
                                {t("читать еще")}
                            </Button>

                            <Flex className={cls.meta}>
                                {viewsBlock}
                            </Flex>
                        </Row>
                    </>
                )
        ),
        [
            article.id,
            article.title,
            article.user?.avatar,
            article.user?.username,
            dateBlock,
            imageBlock,
            t,
            textBlock,
            typesBlock,
            view,
            viewsBlock,
        ],
    )

    return (
        <Card
            id={`article-${article.id}`}
            variant="secondary"
            href={view === ArticleView.TILE ? RoutesPath[AppRoutes.ARTICLE_DETAILS] + article.id : ""}
            target={target}
            bordered
            rounded
            shadowed={shadowed}
            style={style}
            className={classnames(cls, [ "article", "secondary", view ], {}, [ className ])}
        >
            {renderArticleItem}
        </Card>
    )
})
