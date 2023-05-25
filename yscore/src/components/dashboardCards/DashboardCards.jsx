import React from 'react';
import { Box }  from '@chakra-ui/react';
import DashboardCard from './DashboardCard';
import { FaMoneyCheck, FaHistory, FaCalculator, FaCoins } from 'react-icons/fa';
import './dashboardCard.css';


function DashboardCards() {

    const cardInfo = [
        {icon: FaCoins, title: 'Payment History', text: `Payment history shows how you've paid your accounts over the length of your credit. This evidence of repayment is the primary reason why payment history makes up 35% of your score and is a major factor in its calculation. Research shows that your track record of payment tends to be the strongest predictor of the likelihood that you'll pay all debts as agreed to. And as you can imagine, a lender's number one priority is your past record of paying back (or not) your loans.`},
        {icon: FaMoneyCheck, title: 'Credit Utilization', text: `In a very general sense, amounts owed refers to how much debt you carry in total. However, the amount of debt you have is not as significant to your credit score as your credit utilization. When a high percentage of a person's available credit is been used, this can indicate that a person is overextended, and is more likely to make late or missed payments.
        Credit Utilization is a very important component of calculating credit score, which is why it makes up 30% of the final score.`},
        {icon: FaHistory, title: 'Credit History', text: `Most credit histories only get better with age. Although the length of your credit history only accounts for 15% of your FICO Score, it's still an important influence on lenders. It can definitely impact the chances of whether or not you get a loan.`},
        {icon: FaCalculator, title:'Credit Mix', text: `The types of credit you have are known as your credit mix. They can include a mix of accounts from credit cards, retail accounts, installment loans, finance company and mortgage loans.`}
    ]
  return (
    cardInfo.map(card => {
       return <DashboardCard Icon={card.icon} title={card.title} text={card.text} style={{'background': '#f0f0f0'}} />
    })
  )
}

export default DashboardCards;