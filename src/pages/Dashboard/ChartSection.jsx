import React from 'react'
import AccountSummary from './AccountSummary'
import FinancialSummary from './FinancialSummary'

export const ChartSection = () => {
  return (
    <div className='col-span-12 grid grid-cols-12 gap-4 md:gap-6'>
        
        <div className='col-span-12 md:col-span-4 lg:col-span-4'>
            <AccountSummary/>
        </div>
        <div className='col-span-12 md:col-span-8 lg:col-span-8'>
            <FinancialSummary/>
        </div>
    </div>
  )
}