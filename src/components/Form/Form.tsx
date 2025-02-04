import { IFormProps } from "../../modal/modal";

export const Form = (props: IFormProps) => {
  const { title, callbackSubmit, callbackChange, value } = props;

  return (
    <div className="container__form">
      <form className="form__content" onSubmit={callbackSubmit}>
        <label className="c">
          <span className="label__content">{title}</span>
          <textarea className="form__textarea" value={value} name="content" rows={10} required onChange={callbackChange}></textarea>
        </label>
        <button type="submit" className="form__btn"></button>
      </form>
    </div>
  )
}
