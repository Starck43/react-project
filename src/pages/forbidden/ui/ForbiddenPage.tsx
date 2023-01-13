import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Info, InfoStatus } from "@/shared/ui/info"

import { Page } from "@/widgets/page"

function ForbiddenPage() {
    const { t } = useTranslation()

    return (
        <Page data-testid="ForbiddenPage">
            <Info Tag="h2" title={t("доступ запрещен")} subTitle={t("нет прав доступа")} status={InfoStatus.WARNING} />
        </Page>
    )
}

export default memo(ForbiddenPage)
