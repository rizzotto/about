import './styles.scss'

function Skill({ name }) {
    return (
        <div className="skill">{name}</div>
    )
}

export default function Skills() {
    return (
      <div className="skills">
        <Skill name="Team Work"/>
        <Skill name="Agile Methodology" />
        <Skill name="API's" />
        <Skill name="Web Development"/>
        <Skill name="Creative Thinking" />
        <Skill name="Communication" />
        <Skill name="Listening Skills" />
      </div>
    )
  }