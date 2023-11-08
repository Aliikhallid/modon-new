
const TitleDivider = ({name = "TITLE"}) => {
  return (
    <>
        <div className="modon-title regular text-primary-color">
          <h1 style={{fontSize: "1.1rem"}}>{name}</h1>
          <div className="vertical-divider"></div>
        </div>
    </>
  )
}

export default TitleDivider