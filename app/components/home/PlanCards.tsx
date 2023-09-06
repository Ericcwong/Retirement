import { useState } from "react"
import { Title } from "../elements/Title"
import { PieChart } from "react-minimal-pie-chart"
export function PlanCards() {
  const options = [
    {
      name: "60/30/10",
      description:
        "60% of your income goes to your needs, 30% to your wants, and 10% to your savings.",
      link: "/retirement",
      data: [
        { title: "Needs", value: 60, color: "#E38627" },
        { title: "Wants", value: 30, color: "#C13C37" },
        { title: "Savings", value: 10, color: "#6A2135" },
      ],
    },
    {
      name: "50/30/20",
      description:
        "50% of your income goes to your needs, 30% to your wants, and 20% to your savings.",
      link: "/retirement",
      data: [
        { title: "Needs", value: 50, color: "#E38627" },
        { title: "Wants", value: 30, color: "#C13C37" },
        { title: "Savings", value: 20, color: "#6A2135" },
      ],
    },
    {
      name: "70/20/10",
      description:
        "70% of your income goes to your needs, 20% to your wants, and 10% to your savings.",
      link: "/retirement",
      data: [
        { title: "Needs", value: 70, color: "#E38627" },
        { title: "Wants", value: 20, color: "#C13C37" },
        { title: "Savings", value: 10, color: "#6A2135" },
      ],
    },
  ]
  return (
    <div className="grid gap-4">
      <Title subText>
        Here are different plans and pick which one fits better to your
        situation.
      </Title>
      <div className="grid grid-cols-3 gap-4">
        {options.map((option) => (
          <div
            key={option.name}
            className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
            onClick={() => {
              // Assuming you want to append the option's name to the URL
              window.location.href = `${window.location.href}&plan=${option.name}`
            }}
            style={{ cursor: "pointer" }} // Change the cursor to indicate it's clickable
          >
            <div className="mb-4">
              <div className=" font-bold text-xl mb-2 text-gray-700">
                {option.name} rule
              </div>
              <div className="h-28">
                <PieChart
                  animate
                  data={option.data}
                  label={({ dataEntry }) => dataEntry.value}
                  labelStyle={{
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    fill: "#121212",
                  }}
                  viewBoxSize={[100, 100]}
                />
                <p className=" text-base">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
