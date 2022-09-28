import "./Spinner.sass"


interface PageLoaderProps {
	className: string
}

export const Spinner = ({className}: PageLoaderProps) => (
    <div className={className}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
    )
