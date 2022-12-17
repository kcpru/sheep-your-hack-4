import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, useSearchParams } from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion'

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

      <TransitionLayout>
        {step === 'welcome' && <Welcome />}
        {step === 'income' && <IncomeForm />}
        {step === 'expenses' && <ExpensesForm />}
        {step === 'goal' && <OnboadingGoalForm />}
      </TransitionLayout>
    </>
  )
}

const TransitionLayout = ({ children }) => {
  const [urlQuery] = useSearchParams()
  const key: string = urlQuery

  const variants = {
    pageInitial: {
      opacity: 0,
      y: 10,
    },
    pageAnimate: {
      opacity: 1,
      y: 0,
    },
  }
  const exit = {
    opacity: 0,
    y: -10,
  }
  const transition = { duration: 0.15, ease: 'easeInOut' }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        layout="position"
        key={key}
        initial="pageInitial"
        animate="pageAnimate"
        variants={variants}
        exit={exit}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Onboading
