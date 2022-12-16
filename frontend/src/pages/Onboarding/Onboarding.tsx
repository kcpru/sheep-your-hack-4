import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, useSearchParams } from 'react-router-dom'

import ExpensesForm from './subpages/ExpensesForm'
import OnboadingGoalForm from './subpages/OnboardingGoalForm'
import Welcome from './subpages/Welcome'

type subpageStep = {
  component: any
  name: string
}

const Onboading = () => {
  const [activeSubPage, setActiveSubPage] = useState<string>()

  const location = useLocation()
  const [urlQuery] = useSearchParams()

  const step = urlQuery.get('step')

  useEffect(() => {
    console.log(step)
  }, [location.search])

  return (
    <>
      <Helmet>
        <title>Onboarding</title>
      </Helmet>

      <h1>Home</h1>
      <p>Home page</p>

      {step === 'welcome' && <Welcome />}
      {step === 'goal' && <OnboadingGoalForm />}
      {step === 'expenses' && <ExpensesForm />}
    </>
  )
}

export default Onboading
