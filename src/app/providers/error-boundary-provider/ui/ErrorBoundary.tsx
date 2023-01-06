import { ReactNode, ErrorInfo, Suspense, Component } from "react"
import { PageError } from "@/widgets/page-error"

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: ErrorInfo) {
        // Update state so the next render will show the fallback UI.
        // eslint-disable-next-line no-console
        console.log(error)
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        // eslint-disable-next-line no-console
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError)
            return (
                <Suspense fallback="">
                    <PageError className="page__error" />
                </Suspense>
            )
        return children
    }
}

export default ErrorBoundary
