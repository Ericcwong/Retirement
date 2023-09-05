export function Title({
  children,
  subText,
}: {
  children: React.ReactNode
  subText?: boolean
}) {
  return (
    <h1
      className={`${
        subText ? "text-xl" : "text-2xl"
      } font-bold text-center text-gray-900 dark:text-gray-100`}
    >
      {children}
    </h1>
  )
}
