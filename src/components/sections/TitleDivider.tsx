
const TitleDivider = ({name = "TITLE"}) => {
  return (
    <>
        <div className="modon-title bold text-slate-600">
          <h1 style={{fontSize: "1.1rem"}}>{name}</h1>
          <div className="vertical-divider"></div>
        </div>
    </>
  )
}

export default TitleDivider