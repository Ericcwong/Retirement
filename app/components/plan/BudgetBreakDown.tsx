import { useLoaderData } from "@remix-run/react"
import { useEffect, useState } from "react"

export function BudgetBreakDown() {
  const { age, salary, plan } = useLoaderData()
  console.log("what is salary?", salary)
  const [budget, setBudget] = useState({
    weekly: {
      essentials: 0,
      wants: 0,
      savings: 0,
    },
    monthly: {
      essentials: 0,
      wants: 0,
      savings: 0,
    },
    annual: {
      essentials: 0,
      wants: 0,
      savings: 0,
    },
  })

  useEffect(() => {
    let essentialsRatio, wantsRatio, savingsRatio

    switch (plan) {
      case "60/30/10":
        essentialsRatio = 0.6
        wantsRatio = 0.3
        savingsRatio = 0.1
        break
      case "50/30/20":
        essentialsRatio = 0.5
        wantsRatio = 0.3
        savingsRatio = 0.2
        break
      case "70/20/10":
        essentialsRatio = 0.7
        wantsRatio = 0.2
        savingsRatio = 0.1
        break
      default:
        console.log("what is plan?", plan)
        return
    }

    // Assuming the provided salary is monthly for this example
    const annualSalary = salary

    const monthlySalary = salary / 12
    const weeklySalary = monthlySalary / 4 // Rough estimate

    setBudget({
      weekly: {
        essentials: weeklySalary * essentialsRatio,
        wants: weeklySalary * wantsRatio,
        savings: weeklySalary * savingsRatio,
      },
      monthly: {
        essentials: monthlySalary * essentialsRatio,
        wants: monthlySalary * wantsRatio,
        savings: monthlySalary * savingsRatio,
      },
      annual: {
        essentials: annualSalary * essentialsRatio,
        wants: annualSalary * wantsRatio,
        savings: annualSalary * savingsRatio,
      },
    })
  }, [plan, salary])
  const categories = ["Essentials", "Wants", "Savings"]
  const periods = ["weekly", "monthly", "annual"]

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          >
            <div className="mb-4">
              <div className="font-bold text-xl mb-2 text-gray-700">
                {category}
              </div>
              {periods.map((period) => (
                <div key={period}>
                  <p className="text-gray-700 text-sm font-semibold">
                    {period.charAt(0).toUpperCase() + period.slice(1)}:
                  </p>
                  <p className="text-gray-700 text-base">
                    {budget[period][category.toLowerCase()]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
