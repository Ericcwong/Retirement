import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { BudgetBreakDown, PlanCards, Title } from "~/components"

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const searchParams = url.searchParams
  const age = searchParams.get("age")
  const salary = searchParams.get("salary")
  const plan = searchParams.get("plan")

  return json({
    age,
    salary,
    plan,
  })
}

export default function Plan() {
  const { age, salary } = useLoaderData()
  return (
    <div className="container mx-auto">
      <Title>Plan</Title>

      <div className="flex text-2xl border py-2 my-6 gap-4 justify-center items-center">
        <div>Age: {age}</div>
        <div>Salary: {salary}</div>
      </div>

      <PlanCards />
      <BudgetBreakDown />
    </div>
  )
}
