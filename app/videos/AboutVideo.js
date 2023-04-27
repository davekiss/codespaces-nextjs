const AboutVideo = ({ asset }) => {
  let title = 'Default Title'
  let description = 'Default description'

  if (asset?.passthrough) {
    const passthrough = JSON.parse(asset.passthrough)
    if (passthrough.title) {
      title = passthrough.title
    }
    if (passthrough.description) {
      description = passthrough.description
    }
  }

  return (
    <div className="about">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default AboutVideo
