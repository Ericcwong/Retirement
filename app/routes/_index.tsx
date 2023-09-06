import { json, redirect, type V2_MetaFunction } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { PlanCards, Title } from "~/components/index"
export const meta: V2_MetaFunction = () => {
  return [{ title: "Retirement App" }, { name: "Taking retirement seriously" }]
}

export async function loader({ request }: { request: Request }) {
  console.log("What is loader request?", request)
  // const formData = await request.formData()
  // const value = Object.fromEntries(formData)
  // console.log("What is loader data?", value)
  return json({
    message: "Hello World",
  })
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const value = Object.fromEntries(formData)
  // const formData = new URLSearchParams(await request.text())
  console.log("formData", value)
  return redirect(`/plan?age=${value.age}&salary=${value["annual-income"]}`)
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
        <Title subText>
          <p>
            Currently, there is only calculations for single status. Married,
            filing jointly, and head of household are not implemented.{" "}
          </p>
        </Title>
        <UserForm />
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
      <Form
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
        <input type="submit" value="Submit" />
      </Form>
    </div>
  )
}
