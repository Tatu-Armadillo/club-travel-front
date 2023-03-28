import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,
            backgroundCardAbout: string,
            backgroundCardLine: string,
            boxShadowCardAbout:string,
            title: string,
            paragraph: string
            paragraphShadow: string
            paragraphCardAbout: string,
            paragraphCardLine: string
        }
    }
}