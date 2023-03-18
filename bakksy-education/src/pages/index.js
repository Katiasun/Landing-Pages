import * as React from "react"
import { injectIntl } from "gatsby-plugin-react-intl"
import BlockLayout from "../components/BlockLayout"
import MainWrapper from "../components/MainWrapper"

const IndexPage = ({ intl }) => {
  return (
    <main>
      <MainWrapper>
        <BlockLayout>
          <h1>{intl.formatMessage({ id: "test" })}</h1>
        </BlockLayout>
      </MainWrapper>
    </main>
  )
}

export default injectIntl(IndexPage)

export const Head = ({ pageContext }) => <>
  <html lang={pageContext.language} />
  <meta name="description" content={pageContext.intl.messages.pageDescription} />
  <title>{pageContext.intl.messages.pageTitle}</title>
</>
