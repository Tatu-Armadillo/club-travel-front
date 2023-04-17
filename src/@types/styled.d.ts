import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,

        colors: {
            primaryBg: string,
            secundaryBg: string,
            tertiaryBg: string,
            primaryTxt: string,
            secundaryTxt: string,
            tertiaryTxt: string,
            primaryShadow: string,
            secundaryShadow: string
        }
    }
}