import * as React from "react"
import InitialBlock from "../components/InitialBlock"

const IndexPage = () => {
  return (
    <main>
      {/* <Header /> */}
      <InitialBlock />
      {/* <EducationDivisionBlock /> */}
      {/* <LearnPlanBlock /> */}
      {/* <CertificateBlock /> */}
      {/* <InvestmentJourneyBlock /> */}
      {/* <AboutBotBlock /> */}
      {/* <QuizBlock /> */}
      {/* <AboutBakksyBlock /> */}
      {/* <Footer /> */}
    </main>
  )
}

export default IndexPage

export const Head = ({ pageContext }) => <>
  <html lang={pageContext.language} />
  <meta name="description" content={pageContext.intl.messages.pageDescription} />
  <title>{pageContext.intl.messages.pageTitle}</title>
</>
