import {User} from "entities/user"


export enum ArticleSortType {
    VIEWS = "views",
    TITLE = "title",
    CREATED = "createdAt"
}

export enum ArticleOrderType {
    ASC = "asc",
    DESC = "desc"
}

export enum ArticleBlockType {
    CODE = "CODE",
    IMAGE = "IMAGE",
    TEXT = "TEXT",
}

export enum ArticleView {
    LIST = "list",
    TILE = "tile",
}

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    paragraphs: string[]
    title?: string
}


export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    ALL = "ALL",
    IT = "IT",
    FINANCE = "FINANCE",
    BUSINESS = "BUSINESS",
    MEDIA = "MEDIA",
    SCIENCE = "SCIENCE"
}

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
    user: User
}
