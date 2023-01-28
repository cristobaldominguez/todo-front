function SectionTitle({ icon, children }) {
  return <h2 className="mx-auto max-w-3xl px-6 my-8 text-2xl font-bold text-indigo-600 dark:text-indigo-500 flex">
  {icon && <i className={`icon-${icon}`}></i>}
  {children}
</h2>
}

export default SectionTitle
