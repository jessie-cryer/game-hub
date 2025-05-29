// don't need - but can use as <Provider> wrapper in main.tsx
// import { Provider } from './components/ui/provider' <--> add this to main.tsx
import { ChakraProvider } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface ProviderProps {
    children: ReactNode
}

export function Provider({ children }: ProviderProps) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}