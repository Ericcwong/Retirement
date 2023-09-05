import type { V2_MetaFunction } from "@remix-run/node"
import { PlanCards, Title } from "~/components/index"
export const meta: V2_MetaFunction = () => {
  return [{ title: "Retirement App" }, { name: "Taking retirement seriously" }]
}

export default function Index() {
  return (
    <div className="container m-auto h-full">
      <div className="grid mt-10 gap-4 justify-center items-center">
        <Title>
          <p>
            There are a bunch of ways to hit your retirement goals and I want to
            help you paint what the picture would look like.
          </p>
        </Title>
        <UserForm />
        {/* <PlanCards /> */}
      </div>
    </div>
  )
}

function UserForm() {
  const inputStyle = "flex justify-between items-center w-full"
  return (
    <div className="grid ">
      <Title subText>
        <p>Lets start with the numbers!</p>
      </Title>
      <form
        action="/user"
        method="post"
        className="grid gap-4 justify-center items-center border"
      >
        <div className={inputStyle}>
          <div>What is your age?</div>
          <input type="number" name="age" className="border ml-4" />
        </div>
        <div className={inputStyle}>
          What is your annual income?
          <input type="number" name="annual-income" className="border ml-4" />
        </div>
      </form>
    </div>
  )
}
