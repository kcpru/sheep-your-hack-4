import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, useSearchParams } from 'react-router-dom'

import ExpensesForm from './subpages/ExpensesForm'
import IncomeForm from './subpages/IncomeForm'
import OnboadingGoalForm from './subpages/OnboardingGoalForm'
import Welcome from './subpages/Welcome'

type subpageStep = {
  component: any
  name: string
}

const Onboading = () => {
  const [formData, setFormData] = useState()

  const handleFormChange = (e: any, name: string) => {
    // setFormData((prev: any) => {
    //     ...prev,
    //     name: e.target.value
    // })
  }

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

      {step === 'welcome' && <Welcome />}
      {step === 'income' && <IncomeForm />}
      {step === 'expenses' && <ExpensesForm />}
      {step === 'goal' && <OnboadingGoalForm />}
    </>
  )
}

export default Onboading
